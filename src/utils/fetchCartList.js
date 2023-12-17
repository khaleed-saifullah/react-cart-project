export default async function cartList() {
  let res = await fetch(`https://cart-api.teamrabbil.com/api/cart-list`, {
    method: "GET",
    headers: {
      token: localStorage.getItem("token"),
    },
  });
  let data = await res.json();

  return data.data;
}
