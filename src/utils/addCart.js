export default async function addCart(productId) {
  let res = await fetch(
    `https://cart-api.teamrabbil.com/api/create-cart/${productId}`,
    {
      method: "GET",
      headers: {
        token: localStorage.getItem("token"),
      },
    }
  );
  let data = await res.json();

  return data;
}
