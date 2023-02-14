let playerfirstsetscore,
  playersecondsetscore,
  playerthirdsetscore,
  playerpoints = 0,
  dealerpoints = 0;

const wrongSound = new Audio();
wrongSound.src = "assets/audio/wrong.mp3";

const cashSound = new Audio();
cashSound.src = "assets/audio/cash.mp3";

const loseSound = new Audio();
loseSound.src = "assets/audio/aww.mp3";

const winSound = new Audio();
winSound.src = "assets/audio/yay.mp3";

export default class CompareRank {
  constructor() {}

  getPlayerScore(firstscore, secondscore, thirdscore) {
    playerfirstsetscore = firstscore;
    playersecondsetscore = secondscore;
    playerthirdsetscore = thirdscore;

    if (
      playerfirstsetscore <= playersecondsetscore &&
      playersecondsetscore <= playerthirdsetscore
    ) {
      const button2 = document.querySelector(".savebutton");
      const button = document.querySelector(".showbutton");
      button.disabled = false;
      button.style.backgroundColor = "green";
      button2.innerHTML = "Saved";
      const rankResult = document.querySelector(".text");
      rankResult.innerHTML = "";
      cashSound.play();
    } else {
      wrongSound.play();
      const rankResult = document.querySelector(".text");
      rankResult.style.color = "red";
      rankResult.innerHTML = "Sets not in order!!";
      const button = document.querySelector(".showbutton");
      button.disabled = true;
    }
  }

  compareFirstset(dealerscore) {
    let dealer = document.querySelector(".result-indicator--dealerfirstset");
    let player = document.querySelector(".result-indicator--playerfirstset");

    if (dealerscore < playerfirstsetscore) {
      dealer.style.backgroundColor = "green";
      player.style.backgroundColor = "red";
      wrongSound.play();
      dealerpoints++;
      console.log("Dealer points after firstSet:", dealerpoints);
    } else {
      dealer.style.backgroundColor = "red";
      player.style.backgroundColor = "green";
      cashSound.play();
      playerpoints++;
      console.log("Player points after firstset:", playerpoints);
    }
  }

  compareSecondset(dealerscore) {
    let dealer = document.querySelector(".result-indicator--dealersecondset");
    let player = document.querySelector(".result-indicator--playersecondset");
    if (dealerscore < playersecondsetscore) {
      dealer.style.backgroundColor = "green";
      player.style.backgroundColor = "red";
      wrongSound.play();
      dealerpoints++;
      console.log("Dealer points after secondset:", dealerpoints);
    } else {
      dealer.style.backgroundColor = "red";
      player.style.backgroundColor = "green";
      cashSound.play();
      playerpoints++;
      console.log("Player points after secondset:", playerpoints);
    }
  }

  compareThirdset(dealerscore) {
    let dealer = document.querySelector(".result-indicator--dealerthirdset");
    let player = document.querySelector(".result-indicator--playerthirdset");
    if (dealerscore < playerthirdsetscore) {
      dealer.style.backgroundColor = "green";
      player.style.backgroundColor = "red";
      wrongSound.play();
      dealerpoints++;
      console.log("Dealer points after thirdset:", dealerpoints);
    } else {
      dealer.style.backgroundColor = "red";
      player.style.backgroundColor = "green";
      cashSound.play();
      playerpoints++;
      console.log("Player points after thirdset:", playerpoints);
    }
  }

  showResult() {
    console.log(dealerpoints);
    console.log(playerpoints);
    if (dealerpoints > playerpoints) {
      loseSound.play();
      const rankResult = document.querySelector(".text");
      rankResult.style.color = "red";
      rankResult.innerHTML = "You lost!!";
      const restartbutton = document.querySelector(".restartbutton");
      restartbutton.style.display = "block";
    } else if (playerpoints > dealerpoints) {
      winSound.play();
      const rankResult = document.querySelector(".text");
      rankResult.style.color = "green";
      rankResult.innerHTML = "You won!!";
      const restartbutton = document.querySelector(".restartbutton");
      restartbutton.style.display = "block";
    }
  }
}
