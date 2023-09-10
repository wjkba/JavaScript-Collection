let cards = [
  "A",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

shuffle(cards);

console.log(cards);

function shuffle(array) {
  let currentIndex = array.length;
  while (currentIndex != 0) {
    // while there are cards to shuffle
    let randomIndex = Math.floor(Math.random() * array.length); // choose random card
    currentIndex -= 1; // each iteration of the loop removes 1 card from the pool
    let temp = array[currentIndex]; // holds temporary value while swapping elements
    array[currentIndex] = array[randomIndex]; // swaps current card with random card
    array[randomIndex] = temp; // value stored in temp is moved to randomIndex
  }
  return array; // once the loop is finished this line returns shuffled array
}
