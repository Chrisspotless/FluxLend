const store = (globalThis as unknown as { __itemsStore?: any[] }).__itemsStore ?? [
  {
    id: "item-1",
    name: "Fresh Produce Bundle",
    description: "Seasonal fruits and vegetables.",
    price: 4500,
    currency: "NGN",
    stock: 24,
    category: "Grocery",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
    createdAt: new Date().toISOString(),
  },
  {
    id: "item-2",
    name: "Grab & Go Snacks",
    description: "Quick bites for busy shoppers.",
    price: 2200,
    currency: "NGN",
    stock: 58,
    category: "Convenience",
    image:
      "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?auto=format&fit=crop&w=400&q=80",
    createdAt: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: "item-3",
    name: "Pharmacy Essentials",
    description: "Daily health and wellness items.",
    price: 12000,
    currency: "NGN",
    stock: 12,
    category: "Pharmacy",
    image:
      "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=400&q=80",
    createdAt: new Date(Date.now() - 172800000).toISOString(),
  },
];

if (!(globalThis as unknown as { __itemsStore?: any[] }).__itemsStore) {
  (globalThis as unknown as { __itemsStore?: any[] }).__itemsStore = store;
}

const getStore = () =>
  (globalThis as unknown as { __itemsStore?: any[] }).__itemsStore ?? [];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = (searchParams.get("search") ?? "").toLowerCase();
  const category = (searchParams.get("category") ?? "all").toLowerCase();
  const page = Number(searchParams.get("page") ?? 1);
  const limit = Number(searchParams.get("limit") ?? 10);

  let items = getStore();

  if (search) {
    items = items.filter((item) =>
      item.name.toLowerCase().includes(search)
    );
  }

  if (category !== "all") {
    items = items.filter(
      (item) => item.category?.toLowerCase() === category
    );
  }

  const total = items.length;
  const start = (page - 1) * limit;
  const paged = items.slice(start, start + limit);

  return Response.json({ items: paged, total });
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = String(formData.get("name") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const price = Number(formData.get("price") ?? 0);
  const currency = String(formData.get("currency") ?? "NGN").trim();
  const stock = Number(formData.get("stock") ?? 0);
  const category = String(formData.get("category") ?? "General").trim();
  const image = formData.get("image");

  const imageUrl =
    typeof image === "string"
      ? image
      : image instanceof File
      ? `https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?auto=format&fit=crop&w=400&q=80`
      : "";

  const newItem = {
    id: `item-${Date.now()}`,
    name,
    description,
    price,
    currency,
    stock,
    category,
    image: imageUrl,
    createdAt: new Date().toISOString(),
  };

  const items = getStore();
  items.unshift(newItem);
  (globalThis as unknown as { __itemsStore?: any[] }).__itemsStore = items;

  return Response.json({ item: newItem }, { status: 201 });
}
