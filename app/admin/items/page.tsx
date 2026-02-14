"use client"

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Item = {
  id: string;
  name: string;
  description?: string;
  price: number;
  currency: string;
  stock: number;
  category?: string;
  image?: string;
  createdAt: string;
};

const LIMIT_OPTIONS = [5, 10, 20];

const formatCurrency = (value: number, currency: string) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: currency || "NGN",
    maximumFractionDigits: 0,
  }).format(value);

const formatDate = (value: string) =>
  new Intl.DateTimeFormat("en-NG", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));

export default function ItemsListPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(
    null
  );
  const [confirming, setConfirming] = useState<Item | null>(null);
  const [viewing, setViewing] = useState<Item | null>(null);

  const totalPages = Math.max(1, Math.ceil(total / limit));

  useEffect(() => {
    const handle = setTimeout(() => {
      setDebouncedSearch(search.trim());
      setPage(1);
    }, 400);
    return () => clearTimeout(handle);
  }, [search]);

  useEffect(() => {
    const controller = new AbortController();
    const loadItems = async () => {
      try {
        setLoading(true);
        setError(null);
        const params = new URLSearchParams({
          search: debouncedSearch,
          category,
          page: String(page),
          limit: String(limit),
        });
        const response = await fetch(`/api/items?${params.toString()}`, {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error("Failed to fetch items.");
        }
        const data = await response.json();
        setItems(data.items ?? []);
        setTotal(data.total ?? 0);
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          setError("Unable to load items. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    };
    loadItems();
    return () => controller.abort();
  }, [debouncedSearch, category, page, limit]);

  useEffect(() => {
    if (!toast) return;
    const handle = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(handle);
  }, [toast]);

  const categories = useMemo(() => {
    const set = new Set(items.map((item) => item.category).filter(Boolean));
    return ["all", ...Array.from(set) as string[]];
  }, [items]);

  const handleDelete = async () => {
    if (!confirming) return;
    const target = confirming;
    setConfirming(null);
    const previous = items;
    setItems((current) => current.filter((item) => item.id !== target.id));
    try {
      const response = await fetch(`/api/items/${target.id}`, { method: "DELETE" });
      if (!response.ok) {
        throw new Error("Delete failed");
      }
      setToast({ type: "success", message: "Item deleted successfully." });
    } catch (err) {
      setItems(previous);
      setToast({ type: "error", message: "Could not delete item. Please try again." });
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="pt-28 pb-10">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold text-gray-500 tracking-wide mb-3">
                Admin
              </p>
              <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
                Items management
              </h1>
              <p className="text-gray-600 mt-4 max-w-2xl">
                Track inventory items, pricing, and categories across self-checkout
                channels.
              </p>
            </div>
            <Link
              href="/admin/items/new"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00a3a3] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#006b6b]"
            >
              Add new item
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-[1fr_200px_140px]">
            <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search items"
                className="w-full text-sm text-gray-700 outline-none"
              />
            </div>
            <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
              <select
                value={category}
                onChange={(event) => {
                  setCategory(event.target.value);
                  setPage(1);
                }}
                className="w-full text-sm text-gray-700 outline-none bg-transparent"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === "all" ? "All categories" : cat}
                  </option>
                ))}
              </select>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
              <select
                value={limit}
                onChange={(event) => {
                  setLimit(Number(event.target.value));
                  setPage(1);
                }}
                className="w-full text-sm text-gray-700 outline-none bg-transparent"
              >
                {LIMIT_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option} / page
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
            {loading ? (
              <div className="p-6 space-y-4">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <div key={idx} className="h-16 w-full animate-pulse rounded-xl bg-gray-100" />
                ))}
              </div>
            ) : error ? (
              <div className="p-8 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Something went wrong
                </h3>
                <p className="text-sm text-gray-600">{error}</p>
              </div>
            ) : items.length === 0 ? (
              <div className="p-10 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No items found
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  Try a different search or add a new item.
                </p>
                <Link
                  href="/admin/items/new"
                  className="inline-flex items-center gap-2 rounded-full border border-[#00a3a3] px-5 py-2.5 text-sm font-semibold text-[#00a3a3] transition-all duration-300 hover:bg-[#00a3a3] hover:text-white"
                >
                  Create item
                </Link>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm text-gray-600">
                  <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
                    <tr>
                      <th className="px-6 py-4">Image</th>
                      <th className="px-6 py-4">Name</th>
                      <th className="px-6 py-4">Price</th>
                      <th className="px-6 py-4">Stock</th>
                      <th className="px-6 py-4">Category</th>
                      <th className="px-6 py-4">Created</th>
                      <th className="px-6 py-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {items.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="h-12 w-12 overflow-hidden rounded-xl bg-gray-100">
                            <img
                              src={item.image || "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=120&q=80"}
                              alt={item.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900">
                          {item.name}
                        </td>
                        <td className="px-6 py-4">
                          {formatCurrency(item.price, item.currency)}
                        </td>
                        <td className="px-6 py-4">
                          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                            {item.stock}
                          </span>
                        </td>
                        <td className="px-6 py-4">{item.category ?? "General"}</td>
                        <td className="px-6 py-4">{formatDate(item.createdAt)}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => setViewing(item)}
                              className="rounded-full border border-gray-200 px-3 py-1 text-xs font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-50"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              onClick={() => setConfirming(item)}
                              className="rounded-full border border-red-200 px-3 py-1 text-xs font-semibold text-red-500 transition-all duration-300 hover:bg-red-50"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {!loading && !error && items.length > 0 && (
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm text-gray-500">
                Page {page} of {totalPages}
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={page <= 1}
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                  className="rounded-full border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-700 disabled:opacity-50"
                >
                  Previous
                </button>
                <button
                  type="button"
                  disabled={page >= totalPages}
                  onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                  className="rounded-full border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-700 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {confirming && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/40 p-6">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Delete item?
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              This will permanently remove {confirming.name} from the catalog.
            </p>
            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setConfirming(null)}
                className="rounded-full border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-700"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDelete}
                className="rounded-full bg-red-500 px-4 py-2 text-xs font-semibold text-white"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {viewing && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/40 p-6">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {viewing.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {viewing.category ?? "General"}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setViewing(null)}
                className="rounded-full border border-gray-200 px-3 py-1 text-xs font-semibold text-gray-600"
              >
                Close
              </button>
            </div>
            <div className="grid gap-6 md:grid-cols-[160px_1fr]">
              <div className="h-40 w-40 overflow-hidden rounded-2xl bg-gray-100">
                <img
                  src={viewing.image || "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=200&q=80"}
                  alt={viewing.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-400">
                    Price
                  </p>
                  <p className="text-sm font-semibold text-gray-900">
                    {formatCurrency(viewing.price, viewing.currency)}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-400">
                    Stock
                  </p>
                  <p className="text-sm font-semibold text-gray-900">
                    {viewing.stock}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-400">
                    Created
                  </p>
                  <p className="text-sm font-semibold text-gray-900">
                    {formatDate(viewing.createdAt)}
                  </p>
                </div>
                {viewing.description && (
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-400">
                      Description
                    </p>
                    <p className="text-sm text-gray-600">
                      {viewing.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {toast && (
        <div className="fixed bottom-6 right-6 z-[130]">
          <div
            className={`rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-lg ${
              toast.type === "success" ? "bg-[#00a3a3]" : "bg-red-500"
            }`}
          >
            {toast.message}
          </div>
        </div>
      )}
    </main>
  );
}
