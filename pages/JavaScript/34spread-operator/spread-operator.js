let itemSet1 = ["apple", "orange", "banana", "mango", "lemon"];
let itemSet2 = ["tomato", "potato", "onion"];
itemSet1.push(...itemSet2);
console.log(itemSet1); // 0: "apple 1: "orange" ​2: "banana" ​3: "mango" ​4: "lemon" ​5: "tomato" ​6: "potato" 7: "onion"
console.log(...itemSet1); // apple orange banana mango lemon tomato potato onion
