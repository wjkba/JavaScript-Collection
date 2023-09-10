let arrayPrices = [5, 10, 15, 20, 25, 30];
let total = arrayPrices.reduce(checkOut);

console.log(`The total is ${total}PLN`);

function checkOut(total, element) {
  return total + element;
}
