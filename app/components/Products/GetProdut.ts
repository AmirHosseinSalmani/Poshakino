export async function getProduct() {
  const res = await fetch("http://localhost:3000/Api/product/Product.json");
  if (!res.ok) {
    throw new Error("محصولی وجود ندارد");
  }
  const data = await res.json();

  return data;
}
