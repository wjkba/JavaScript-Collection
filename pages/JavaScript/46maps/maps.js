const store = new Map([
  ["Hat", 20],
  ["Shirt", 50],
  ["Jeans", 70],
]);

const test = store.keys();
console.log(test.find("Hat"));

function getPrice(itemName) {
  price = store.get(itemName);
  return price;
}
