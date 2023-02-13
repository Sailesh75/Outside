import Deck from "./deck.js";
import { LandingPage, Gameplay } from "./userInterface.js";
import Dealer from "./dealer.js";
import Player from "./player.js";

const landingPage = new LandingPage();
const gameplay = new Gameplay();
const deck = new Deck;
const player = new Player(deck);
const dealer = new Dealer(deck);

landingPage.landingPageUI();
gameplay.gameplay();
player.getPlayerCard();
player.displayPlayerCard();
player.dragPlayerCard();
player.getPlayerSets();
player.getScore();
dealer.getdealerCard();
dealer.dealerPlay();
dealer.displayCards();

const landingUI = document.querySelector(".container");
const gameplayUI = document.querySelector(".gameplay-UI");
gameplayUI.style.display = "none";

const element = document.querySelector(".play-button");
const button = document.querySelector(".showbutton");
button.disabled = true;

element.addEventListener("click", () => {
  landingUI.style.display = "none";
  gameplayUI.style.display = "block";
});
