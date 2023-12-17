const baseURL = "https://cart-api.teamrabbil.com/api";

export async function productList() {
  let res = await fetch(baseURL + "/product-list");
  let data = await res.json();

  return data.data;
}

export async function userLogin(email) {
  let res = await fetch(baseURL + "/user-login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      UserEmail: email,
    }),
  });
  let data = await res.json();

  return data;
}
