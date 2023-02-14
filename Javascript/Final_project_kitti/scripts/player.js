import Rank from "./rank.js";
import CompareRank from "./compare.js";
const compareRank = new CompareRank();
const rank = new Rank();

let playerCards = [];
let playerNumber = [];
let playerSuits = [];

let playerfirstSet = [];
let playersecondSet = [];
let playerthirdSet = [];

export default class Player {
  constructor(deck) {
    this.deck = deck;
  }

  getPlayerCard() {
    for (let i = 0; i < 9; i++) {
      playerCards[i] = this.deck.getNextCard();
      playerNumber.push(playerCards[i].value);
      playerSuits.push(playerCards[i].suit);
    }
  }

  displayPlayerCard() {
    const cardType = {
      "♣️": "clubs",
      "♠️": "spades",
      "♦️": "diamonds",
      "♥️": "hearts",
    };

    for (let i = 0; i < playerNumber.length; i++) {
      const card = playerCards[i];
      const number = card.value;
      const symbol = cardType[card.suit];
      const cardImage = document.querySelector(`.img${i + 1}`);
      cardImage.src = `assets/cards/${number}_of_${symbol}.png`;
    }
  }

  dragPlayerCard() {
    const boxes = document.querySelectorAll(".box");
    const imgs = document.querySelectorAll(".img");

    let currentImg;
    let currentBox;
    let currentImgIndex;
    let currentBoxIndex;

    imgs.forEach((img) => {
      img.addEventListener("dragstart", (e) => {
        currentImg = e.target;
        currentImgIndex = [...imgs].indexOf(currentImg);
      });
    });

    boxes.forEach((box) => {
      box.addEventListener("dragover", (e) => {
        e.preventDefault();
      });

      box.addEventListener("dragenter", (e) => {
        e.preventDefault();
        currentBox = e.target.closest(".box");
        currentBoxIndex = [...boxes].indexOf(currentBox);
      });

      box.addEventListener("drop", (e) => {
        e.preventDefault();
        let prevImg = currentBox.querySelector(".img");
        if (prevImg) {
          currentBox.removeChild(prevImg);
          currentImg.parentNode.appendChild(prevImg);
        }
        currentBox.appendChild(currentImg);
        let temp = imgs[currentImgIndex];
        imgs[currentImgIndex] = imgs[currentBoxIndex];
        imgs[currentBoxIndex] = temp;
      });
    });
  }

  getPlayerSets() {
    const clickUpdatesForPlayer = () => {
      const imageClasses = [
        "box-1",
        "box-2",
        "box-3",
        "box-4",
        "box-5",
        "box-6",
        "box-7",
        "box-8",
        "box-9",
      ];

      playerfirstSet = imageClasses.slice(0, 3).map((className) => {
        const img = document.querySelector(`.${className} img`);
        const src = img.getAttribute("src");
        const [value, suit] = src.split("_of_");
        return {
          value: value.slice(13),
          suit: suit.slice(0, -4),
        };
      });

      playersecondSet = imageClasses.slice(3, 6).map((className) => {
        const img = document.querySelector(`.${className} img`);
        const src = img.getAttribute("src");
        const [value, suit] = src.split("_of_");
        return {
          value: value.slice(13),
          suit: suit.slice(0, -4),
        };
      });

      playerthirdSet = imageClasses.slice(6).map((className) => {
        const img = document.querySelector(`.${className} img`);
        const src = img.getAttribute("src");
        const [value, suit] = src.split("_of_");
        return {
          value: value.slice(13),
          suit: suit.slice(0, -4),
        };
      });

      console.log(playerfirstSet);
      console.log(playersecondSet);
      console.log(playerthirdSet);
    };

    const button2 = document.querySelector(".savebutton");
    button2.addEventListener("click", clickUpdatesForPlayer);
  }

  getScore() {
    const scorerank = () => {
      const button = document.querySelector(".showbutton");
      button.disabled = false;

      let playerfirstsetscore = rank.getScore(playerfirstSet);
      let playersecondsetscore = rank.getScore(playersecondSet);
      let playerthirdsetscore = rank.getScore(playerthirdSet);
      compareRank.getPlayerScore(
        playerfirstsetscore,
        playersecondsetscore,
        playerthirdsetscore
      );
    };

    const button2 = document.querySelector(".savebutton");
    button2.addEventListener("click", scorerank);
  }
}
