export default async function removeCart(productId) {
  let res = await fetch(
    `https://cart-api.teamrabbil.com/api/remove-cart/${productId}`,
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
