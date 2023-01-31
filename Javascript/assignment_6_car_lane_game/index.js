const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 300;
canvas.height = 700;

let playerX = canvas.width / 2;
let playerY = canvas.height - 50;
let playerWidth = 50;
let playerHeight = 100;
let score = 0;
let obstacles = [];
let intervalId;


const createPlayer = () => {
  ctx.fillRect(playerX - playerWidth / 2, playerY, playerWidth, playerHeight);
}

const createObstacles =()=> {
  obstacles.forEach(obstacle => {
    ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  });
}

const checkCollision = () =>{
    obstacles.forEach(obstacle => {
        if (
          playerX + playerWidth / 2 > obstacle.x &&
          playerX - playerWidth / 2 < obstacle.x + obstacle.width &&
          playerY < obstacle.y + obstacle.height
        ) {
            clearInterval(intervalId);
            alert("Game Over! Score: " + score);
            document.location.reload();
        }
      });
      score++;
    }


const updateGame = () => {
  obstacles.forEach(obstacle => {
    obstacle.y += 5;
    // Removing obstacles
    obstacles = obstacles.filter(obstacle => obstacle.y + obstacle.height <= canvas.height);
  });
  // Generate new obstacles
  if (Math.random() < 0.1) {
    let lane = Math.floor(Math.random() * 3);
    let x = canvas.width / 3 * lane + canvas.width / 6 - 25;
    obstacles.push({
      x: x,
      y: 0,
      width: 50,
      height: 100,
      lane: lane
    });
  }
  checkCollision();
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
    

intervalId = setInterval(() => {
    renderGame();
    updateGame();
  }, 50);

















