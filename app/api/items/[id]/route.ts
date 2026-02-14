const getStore = () =>
  (globalThis as unknown as { __itemsStore?: any[] }).__itemsStore ?? [];

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const items = getStore();
  const index = items.findIndex((item) => item.id === params.id);

  if (index === -1) {
    return Response.json({ error: "Item not found" }, { status: 404 });
  }

  items.splice(index, 1);
  (globalThis as unknown as { __itemsStore?: any[] }).__itemsStore = items;

  return Response.json({ success: true });
}
