class Item {
  constructor(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
  addCart() {
    console.log(`${this.name} has been added to your cart.`);
  }
}
const item1 = new Item("Hat", 50, 5);
const item2 = new Item("Shirt", 50, 99);
const item3 = new Item("Ring", 50, 1);

const items = [item1, item2, item3];

console.log(items[0]); // returns item1 Object
console.log(items[0].name); // returns name of item1

items[1].addCart(); // invoke item2.addCart() function

addAll(items);

function addAll(items) {
  for (const item of items) {
    item.addCart();
  }
}
