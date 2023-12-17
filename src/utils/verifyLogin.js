export default async function verifyLogin(email, pin) {
  let res = await fetch("https://cart-api.teamrabbil.com/api/verify-login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      UserEmail: email,
      OTP: pin,
    }),
  });
  let data = await res.json();

  return data;
}
