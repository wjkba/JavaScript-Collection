class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
  }
}

let cards = [
  new Card("A", "Hearts"),
  new Card("A", "Spades"),
  new Card("A", "Diamonds"),
  new Card("A", "Clubs"),
  new Card("10", "Hearts"),
  new Card("10", "Spades"),
  new Card("10", "Diamonds"),
  new Card("10", "Clubs"),
];

//anonymous objects can be refernced by an index number
//display all - method I
cards.forEach((card) => console.log(`${card.value} of ${card.suit}`));
//display all - method II
function displayAll(cards) {
  for (let i = 0; i < cards.length; i += 1) {
    console.log(`${cards[i].value} of ${cards[i].suit}`);
  }
}

// let card1 = new Card("A", "Hearts");
// let card2 = new Card("A", "Spades");
// let card3 = new Card("A", "Diamonds");
// let card4 = new Card("A", "Clubs");
// let card5 = new Card("10", "Hearts");
// let card6 = new Card("10", "Spades");
// let card7 = new Card("10", "Diamonds");
// let card8 = new Card("10", "Clubs");
// let cards = [card1, card2, card3, card4, card5, card6, card7, card8];

// console.log(card1.value + card1.suit);

// display(cards);

// function display(cards) {
//   for (card of cards) {
//     console.log(`${card.value} of ${card.suit}`);
//   }
// }
