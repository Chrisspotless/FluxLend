"use client"

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  description: z.string().optional(),
  price: z
    .number({ invalid_type_error: "Price is required" })
    .positive("Price must be greater than 0"),
  currency: z.string().min(1, "Currency is required").default("NGN"),
  stock: z.number().min(0, "Stock must be 0 or higher").default(0),
  category: z.string().optional(),
  image: z
    .any()
    .refine((file) => file instanceof File || file === undefined, "Image is required")
    .optional(),
});

type FormValues = z.infer<typeof schema>;

export default function ItemUploadPage() {
  const router = useRouter();
  const [preview, setPreview] = useState<string | null>(null);
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(
    null
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      currency: "NGN",
      stock: 0,
    },
  });

  const imageFile = watch("image");

  useEffect(() => {
    if (imageFile && imageFile instanceof File) {
      const url = URL.createObjectURL(imageFile);
      setPreview(url);
      return () => URL.revokeObjectURL(url);
    }
    setPreview(null);
    return undefined;
  }, [imageFile]);

  const onSubmit = async (values: FormValues) => {
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      if (values.description) formData.append("description", values.description);
      formData.append("price", String(values.price));
      formData.append("currency", values.currency || "NGN");
      formData.append("stock", String(values.stock ?? 0));
      if (values.category) formData.append("category", values.category);
      if (values.image instanceof File) formData.append("image", values.image);

      const response = await fetch("/api/items", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to create item");
      }

      setToast({ type: "success", message: "Item created successfully." });
      setTimeout(() => {
        router.push("/admin/items");
      }, 600);
    } catch (error) {
      setToast({ type: "error", message: "Unable to create item. Try again." });
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="pt-28 pb-16">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <p className="text-sm font-semibold text-gray-500 tracking-wide mb-4">
            Admin
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            Upload new item
          </h1>
          <p className="text-lg text-gray-600">
            Add new catalog items for kiosk and Scan & Go experiences.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-semibold text-gray-700">Name</label>
                <input
                  {...register("name")}
                  className="mt-2 h-12 w-full rounded-xl border border-gray-200 px-4 text-sm focus:border-[#00a3a3] focus:outline-none"
                  placeholder="Fresh produce bundle"
                />
                {errors.name && (
                  <p className="mt-2 text-xs text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">Price</label>
                <input
                  type="number"
                  step="0.01"
                  {...register("price", { valueAsNumber: true })}
                  className="mt-2 h-12 w-full rounded-xl border border-gray-200 px-4 text-sm focus:border-[#00a3a3] focus:outline-none"
                  placeholder="4500"
                />
                {errors.price && (
                  <p className="mt-2 text-xs text-red-500">{errors.price.message}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">Currency</label>
                <input
                  {...register("currency")}
                  className="mt-2 h-12 w-full rounded-xl border border-gray-200 px-4 text-sm focus:border-[#00a3a3] focus:outline-none"
                />
                {errors.currency && (
                  <p className="mt-2 text-xs text-red-500">{errors.currency.message}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">Stock</label>
                <input
                  type="number"
                  {...register("stock", { valueAsNumber: true })}
                  className="mt-2 h-12 w-full rounded-xl border border-gray-200 px-4 text-sm focus:border-[#00a3a3] focus:outline-none"
                />
                {errors.stock && (
                  <p className="mt-2 text-xs text-red-500">{errors.stock.message}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">Category</label>
                <input
                  {...register("category")}
                  className="mt-2 h-12 w-full rounded-xl border border-gray-200 px-4 text-sm focus:border-[#00a3a3] focus:outline-none"
                  placeholder="Grocery"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">Image</label>
                <input
                  type="file"
                  accept="image/*"
                  className="mt-2 w-full text-sm text-gray-600"
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    setValue("image", file as File);
                  }}
                />
                {errors.image && (
                  <p className="mt-2 text-xs text-red-500">{errors.image.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700">
                Description
              </label>
              <textarea
                {...register("description")}
                rows={4}
                className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-[#00a3a3] focus:outline-none"
                placeholder="Optional notes about this item"
              />
            </div>

            {preview && (
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                <p className="text-sm font-semibold text-gray-700 mb-3">
                  Image preview
                </p>
                <img
                  src={preview}
                  alt="Preview"
                  className="h-40 w-40 rounded-xl object-cover"
                />
              </div>
            )}

            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 rounded-full bg-[#00a3a3] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#006b6b] disabled:opacity-60"
              >
                {isSubmitting ? "Uploading..." : "Create item"}
              </button>
              <button
                type="button"
                onClick={() => router.push("/admin/items")}
                className="rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-600"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </section>

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
