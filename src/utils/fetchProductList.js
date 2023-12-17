export default async function productList() {
  let res = await fetch("https://cart-api.teamrabbil.com/api/product-list");
  let data = await res.json();

  return data.data;
}
