const CANVAS_HEIGHT = window.innerHeight;
const NUMBER_OF_LANES = 3;
const CANVAS_WIDTH = CANVAS_HEIGHT*NUMBER_OF_LANES / 7.5;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.height = CANVAS_HEIGHT;
canvas.width = CANVAS_WIDTH;

const LANE_GAP = 10;
let playerHeight = 100;
let playerWidth = CANVAS_WIDTH/NUMBER_OF_LANES-LANE_GAP*2;
// let playerX = (canvas.width / NUMBER_OF_LANES) * Math.ceil(NUMBER_OF_LANES/2) + (LANE_GAP);
let playerX = canvas.width / 2;
let playerY = canvas.height - playerHeight;
let score = 0;
let obstacles = [];
let intervalId;
let speed = 15;
let carlane;
let lastlane;

const state = {
    current : 0,
    getReady : 0,
    game : 1,
    over : 2
 }

const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");
const gameScore = document.getElementById("game-score");

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
            setTimeout(()=>{
              state.current = state.over;
              gameLoop();
            },1000);
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

const startGame = () =>{
  obstacles = [];
  score = 0;
    restartButton.style.display = 'none';
    startButton.style.display = 'none';
    intervalId = setInterval(() => {
      renderGame();
      generateObstacles();
    }, 50);
}

const getReady = () =>{
    restartButton.style.display = 'none';
    startButton.addEventListener("click", ()=>
    {
      startButton.style.display = 'none';
      state.current += 1;
      gameLoop();
    });
}

const gameOver = () =>{
  canvas.style.display = 'none';
  startButton.style.display = 'none';
  restartButton.style.display = 'block';
  let result = document.createElement('p');
  result.appendChild(document.createTextNode(`Your Score : ${score}`));
  gameScore.appendChild(result);
  gameScore.style.display = 'block';
  restartButton.addEventListener("click", ()=>
  {
    restartButton.style.display = 'none';
    gameScore.style.display = 'none';
    canvas.style.display = 'block';
    console.log(state.current);
    state.current -= 1;
    console.log(state.current);
    gameLoop();
  });
}

const gameLoop = () =>{
  switch(state.current){
    case state.getReady:
      getReady();
      break;
    case state.game:
      startGame();
      break;
    case state.over:
      gameOver();
      break;  
  }
}

gameLoop();











