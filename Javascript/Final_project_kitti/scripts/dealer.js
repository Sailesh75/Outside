import Rank from "./rank.js";
import CompareRank  from "./compare.js";
const compareRank = new CompareRank();
const rank = new Rank();

let dealerCards = [];
let dealerNumber = [];
let dealerSuits = [];

let dealerfirstSet = [];
let dealersecondSet = [];
let dealerthirdSet = [];

export default class Dealer {
  constructor( deck ) {
    this.deck = deck;
  }

  getdealerCard() {
    for (let i = 0; i < 9; i++) {
      dealerCards[i] = this.deck.getNextCard();
      //converting values into numerical and suit array
      dealerNumber.push(dealerCards[i].value);
      dealerSuits.push(dealerCards[i].suit);
    }
    console.log("Dealer Cards", dealerCards);
    console.log("Dealer Number", dealerNumber);
    console.log("Dealer Suits", dealerSuits);
  }

  dealerPlay() {
    const sortCards = () => {
      dealerCards.sort((a, b) => b.value - a.value);
      console.log("Sorted dealer cards", dealerCards);
      dealerNumber.sort((a, b) => b - a);
      console.log("Sorted dealer number", dealerNumber);
    };

    // check triple card
    const detectTriple = (cards) => {
      const count = {};
      for (const card of cards) {
        count[card] = count[card] ? count[card] + 1 : 1;
      }

      let highestTriple;
      for (const card in count) {
        if (count[card] === 3) {
          if (!highestTriple || card < highestTriple) {
            highestTriple = card;
          }
        }
      }
      return highestTriple;
    };

    const removeTripleCards = (triple) => {
      for (let i = 0; i < 9; i++) {
        if (dealerNumber[i] === parseInt(triple)) {
          if (dealerfirstSet.length < 3) {
            dealerfirstSet.push({
              value: dealerCards[i].value,
              suit: dealerSuits[i],
            });
          } else if (dealersecondSet.length < 3) {
            dealersecondSet.push({
              value: dealerCards[i].value,
              suit: dealerSuits[i],
            });
          } else {
            dealerthirdSet.push({
              value: dealerCards[i].value,
              suit: dealerSuits[i],
            });
          }
          dealerNumber.splice(i, 1);
          dealerSuits.splice(i, 1);
          dealerCards.splice(i, 1);
          i--;
        }
      }
    };

    //check straight cards
    const detectStraight = (numbers) => {
      let sortedNumbers = numbers;
      for (let i = 0; i < sortedNumbers.length; i++) {
        let straight = [sortedNumbers[i]];
        for (let j = i + 1; j < sortedNumbers.length; j++) {
          if (straight[straight.length - 1] - sortedNumbers[j] === 1) {
            straight.push(sortedNumbers[j]);
          }
          if (straight.length === 3) {
            return straight;
          }
        }
      }
      return null;
    };

    const removeStraightCards = (straight) => {
      for (let i = 0; i < dealerNumber.length; i++) {
        if (straight.includes(dealerNumber[i])) {
          if (dealerfirstSet.length < 3) {
            dealerfirstSet.push({
              value: dealerNumber[i],
              suit: dealerSuits[i],
            });
          } else if (dealersecondSet.length < 3) {
            dealersecondSet.push({
              value: dealerCards[i].value,
              suit: dealerSuits[i],
            });
          } else {
            dealerthirdSet.push({
              value: dealerCards[i].value,
              suit: dealerSuits[i],
            });
          }
          dealerNumber.splice(i, 1);
          dealerSuits.splice(i, 1);
          dealerCards.splice(i, 1);
          straight.splice(0, 1); //only runs the loop for a set(3 cardNumbers)
          i--;
        }
      }
    };

    //detect flush
    function detectFlush(cards) {
      let suitCounts = {};
      let flushCards = [];

      // Count the number of cards for each suit
      for (let i = 0; i < cards.length; i++) {
        let suit = cards[i].suit;
        if (!suitCounts[suit]) {
          suitCounts[suit] = 1;
        } else {
          suitCounts[suit]++;
        }
      }

      // Find the suit with the most cards
      let maxSuit = null;
      let maxCount = 0;
      for (let suit in suitCounts) {
        if (suitCounts[suit] > maxCount) {
          maxSuit = suit;
          maxCount = suitCounts[suit];
        }
      }

      // If there is a suit with at least 3 cards, add those cards to flushCards
      if (maxCount >= 3) {
        for (let i = 0; i < cards.length; i++) {
          if (cards[i].suit === maxSuit) {
            flushCards.push(cards[i]);
          }
        }
        // Sort the flushCards in descending order by number
        flushCards.sort((a, b) => b.number - a.number);

        // Return the first 3 cards in flushCards
        return flushCards.slice(0, 3);
      }

      return null;
    }

    //remove flush cards
    function removeFlushCards(flushCards, dealerCards) {
      for (let i = 0; i < flushCards.length; i++) {
        const index = dealerCards.findIndex(
          (card) =>
            card.number === flushCards[i].number &&
            card.suit === flushCards[i].suit
        );
        dealerCards.splice(index, 1);
        dealerNumber.splice(index, 1);
        dealerSuits.splice(index, 1);
      }
      if (!dealerfirstSet.length) {
        dealerfirstSet.push(...flushCards);
      } else if (!dealersecondSet.length) {
        dealersecondSet.push(...flushCards);
      } else {
        dealerthirdSet.push(...flushCards);
      }
    }

    //detect pair cards
    function detectHighestPair(cards) {
      let count = {};
      let highestPair = [];
      for (let i = 0; i < cards.length; i++) {
        if (!count[cards[i].value]) {
          count[cards[i].value] = 1;
        } else {
          count[cards[i].value] += 1;
          if (count[cards[i].value] === 2) {
            if (highestPair.length === 0) {
              highestPair = [cards[i].value, cards[i].value];
            } else {
              if (cards[i].value > highestPair[0]) {
                highestPair = [cards[i].value, cards[i].value];
              }
            }
          }
        }
      }
      let nonPairCards = [];
      for (let i = 0; i < cards.length; i++) {
        if (count[cards[i].value] === 1) {
          nonPairCards.push(cards[i].value);
        }
      }
      nonPairCards.sort((a, b) => b - a);
      if (highestPair.length > 0 && nonPairCards.length > 0) {
        highestPair.push(nonPairCards[0]);
        return highestPair;
      }
      return null;
    }

    //remove pair cards

    function removeHighestPair(pair) {
      pair = pair.sort((a, b) => b - a);
      for (let i = 0; i < dealerNumber.length; i++) {
        if (pair.includes(dealerNumber[i])) {
          if (dealerfirstSet.length < 3) {
            dealerfirstSet.push({
              value: dealerNumber[i],
              suit: dealerSuits[i],
            });
          } else if (dealersecondSet.length < 3) {
            dealersecondSet.push({
              value: dealerCards[i].value,
              suit: dealerSuits[i],
            });
          } else {
            dealerthirdSet.push({
              value: dealerCards[i].value,
              suit: dealerSuits[i],
            });
          }
          dealerNumber.splice(i, 1);
          dealerSuits.splice(i, 1);
          dealerCards.splice(i, 1);

          pair.splice(0, 1); //only runs the loop for a set(3 cardNumbers)
          i--;
        }
      }
    }

    //game loop
    const game = () => {
      sortCards();

      for (let i = 0; i < 3; i++) {
        // check tripleCard
        const triple = detectTriple(dealerNumber);
        console.log(" triple:", triple);

        if (triple) {
          removeTripleCards(triple);
        }
      }

      // detect straight

      for (let i = 0; i < 3; i++) {
        let straight = detectStraight(dealerNumber);
        console.log("Dealers run:", straight);

        if (straight) {
          removeStraightCards(straight);
        }
      }

      //detect flush

      for (let i = 0; i < 3; i++) {
        let flush = detectFlush(dealerCards);
        console.log("Dealers flush:", flush);

        if (flush) {
          removeFlushCards(flush, dealerCards);
        }
      }
      console.log(
        "Dealers card after triple , straight and flush check",
        dealerCards
      );

      //detect pair

      for (let i = 0; i < 3; i++) {
        let pair = detectHighestPair(dealerCards);
        console.log("Dealers pair:", pair);

        if (pair) {
          removeHighestPair(pair);
        }
      }

      if (dealerNumber.length == 3) {
        if (dealerthirdSet.length < 3) {
          for (let i = 0; i < dealerNumber.length; i++) {
            dealerthirdSet.push({
              value: dealerCards[i].value,
              suit: dealerSuits[i],
            });
          }
        }
      }

      //higher card

      if (dealerNumber.length == 6) {
        for (let i = 0; i < dealerNumber.length; i++) {
          if (i % 2 === 0) {
            dealersecondSet.push({
              value: dealerCards[i].value,
              suit: dealerSuits[i],
            });
          } else {
            dealerthirdSet.push({
              value: dealerCards[i].value,
              suit: dealerSuits[i],
            });
          }
        }
      }
    };

    game();
  }

  displayCards() {
    const cardType = {
      "♣️": "clubs",
      "♠️": "spades",
      "♦️": "diamonds",
      "♥️": "hearts",
    };

    const clickUpdates = () => {
      var count = 0;
      var next = function () {
        switch (count) {
          case 0:
            // function click 1 here
            for (let i = 0; i < dealerfirstSet.length; i++) {
              const card = dealerfirstSet[i];
              const number = card.value;
              const symbol = cardType[card.suit];
              const cardImage = document.querySelector(
                `.dealer-card--${i + 1}`
              );
              cardImage.src = `assets/cards/${number}_of_${symbol}.png`;
            }
            let dealerfirstsetscore = rank.getScore(dealerfirstSet);
            console.log(dealerfirstsetscore);
            compareRank.compareFirstset(dealerfirstsetscore);
            button.innerHTML = `Show 2nd set`;

            break;
          case 1:
            // function click 2 here
            for (let i = 0; i < dealersecondSet.length; i++) {
              const card = dealersecondSet[i];
              const number = card.value;
              const symbol = cardType[card.suit];
              const cardImage = document.querySelector(
                `.dealer-card--${i + 4}`
              );
              cardImage.src = `assets/cards/${number}_of_${symbol}.png`;
            }
            let dealersecondsetscore = rank.getScore(dealersecondSet);
            console.log(dealersecondsetscore);
            compareRank.compareSecondset(dealersecondsetscore);
            button.innerHTML = `Show 3rd set`;

            break;
          case 2:
            // function click 3 here
            for (let i = 0; i < dealerthirdSet.length; i++) {
              const card = dealerthirdSet[i];
              const number = card.value;
              const symbol = cardType[card.suit];
              const cardImage = document.querySelector(
                `.dealer-card--${i + 7}`
              );
              cardImage.src = `assets/cards/${number}_of_${symbol}.png`;
            }
            let dealerthirdsetscore = rank.getScore(dealerthirdSet);
            console.log(dealerthirdsetscore);
            compareRank.compareThirdset(dealerthirdsetscore);
            button.innerHTML = `Show result`;

          default:
            // function click 1 here
            // compareRank.showResult();
            console.log("All clicks are done.");
            break;
        }
        count = count < 3 ? count + 1 : 3;
      };

      return next;
    };

    for (let i = 0; i < 9; i++) {
      const cardImage = document.querySelector(`.dealer-card--${i + 1}`);
      cardImage.src = `assets/cards/back.png`;
    }
    const button = document.querySelector(".showbutton");
    button.addEventListener("click", clickUpdates());
  }
}
