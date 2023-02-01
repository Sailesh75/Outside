const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 300;
canvas.height = 750;

let playerX = canvas.width / 2;
let playerY = canvas.height - 100;
let playerWidth = 80;
let playerHeight = 100;
let score = 0;
let obstacles = [];
let intervalId;
let speed = 10;
let carlane;
let lastlane;

const playerCar = new Image();
playerCar.src = 'assests/player.png';

const obstacleCar = new Image();
obstacleCar.src = 'assests/obstacle.png'

const carCollision = new Audio();
carCollision.src = 'assests/car_crash.mp3';

const createPlayer = () => {
  ctx.drawImage(playerCar, playerX - playerWidth / 2, playerY, playerWidth, playerHeight);
}

const createObstacles =()=> {
  obstacles.forEach(obstacle => {
    ctx.drawImage(obstacleCar, obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  });
}

const checkCollision = () =>{
    obstacles.forEach(obstacle => {
        if (
          playerX + playerWidth / 2 > obstacle.x &&
          playerX - playerWidth / 2 < obstacle.x + obstacle.width &&
          playerY < obstacle.y + obstacle.height
        ) {
            carCollision.play();
            clearInterval(intervalId);
            alert("Game Over! Score: " + score);
            document.location.reload();
        }
      });
      score++;
    }


const generateObstacles = () => {
  if (Math.random() < 0.1) {
        carlane = Math.floor(Math.random() * 3);
    if (carlane === lastlane) {
      carlane = (carlane + 1) % 3;
    }
    lastlane=carlane;
      let x = canvas.width / 3 * carlane + canvas.width / 6 - 25;
        if (obstacles.length<=1){
          obstacles.push({
            x: x,
            y: 0,
            width: 50,
            height: 100,
            carlane: carlane,
          });
          console.log(obstacles);
        }
  }
  checkCollision();
  obstacles.forEach(obstacle => {
    obstacle.y += speed;
    obstacles = obstacles.filter(obstacle => obstacle.y  <= canvas.height)
  });
}


const renderGame = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // road with three lanes
  ctx.fillStyle = "grey";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "white";
  ctx.beginPath();
  ctx.moveTo(canvas.width / 3, 0);
  ctx.lineTo(canvas.width / 3, canvas.height);
  ctx.moveTo(canvas.width / 3 * 2, 0);
  ctx.lineTo(canvas.width / 3 * 2, canvas.height);
  ctx.stroke();

  // creating player
  ctx.fillStyle = "red";
  createPlayer();

  // creating obstacles
  ctx.fillStyle = "black";
  createObstacles();

  // Display score
  ctx.fillStyle = "white";
  ctx.font = "30px Arial";
  ctx.fillText("Score: " + score, 10, 40);
}

// Handle arrow key events
document.onkeydown = function(e) {
    switch (e.key) {
    case "ArrowLeft":
    playerX -= canvas.width / 3;
    playerX = Math.max(playerX, playerWidth / 2);
    break;
    case "ArrowRight":
    playerX += canvas.width / 3;
    playerX = Math.min(playerX, canvas.width - playerWidth / 2);
    break;
    }
};
    
const startButton = document.getElementById("start-button");
startButton.addEventListener("click", ()=> {
  startButton.style.display='none';
  intervalId = setInterval(() => {
    renderGame();
    generateObstacles();
  }, 50);
});

















