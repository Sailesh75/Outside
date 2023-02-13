const SUITS = ["♣️", "♠️", "♦️", "♥️"];
const VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const deck = [];

export default class Deck {
  constructor() {
    this.createDeck();
    this.shuffleCards();
  }

  createDeck = () => {
    for (let suitIndex = 0; suitIndex < SUITS.length; suitIndex++) {
      for (let valueIndex = 0; valueIndex < VALUES.length; valueIndex++) {
        let card = {
          suit: SUITS[suitIndex],
          value: VALUES[valueIndex],
        };
        deck.push(card);
      }
    }
    return;
  };

  shuffleCards = () => {
    for (let index = 0; index < deck.length; index++) {
      let random = Math.trunc(Math.random() * 52);
      let temp = deck[index];
      deck[index] = deck[random];
      deck[random] = temp;
    }
    console.log(deck);
    return;
  };

  getNextCard = () => {
    return deck.shift();
  };
}


