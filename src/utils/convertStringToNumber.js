export default function convertStringToNumber(string) {
  let stringValue = string.product.price;
  let currentValue = parseInt(stringValue.replace(/,/g, ""));

  return currentValue;
}
