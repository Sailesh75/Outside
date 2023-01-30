const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const CONTAINER_WIDTH = 1000;
const CONTAINER_HEIGHT = 500;
const NUMBER_OF_BOXES = 5;
const BOX_HEIGHT = 50;
const BOX_WIDTH = 50;
let boxes = [];
let directions = [];

for(let i = 0; i < NUMBER_OF_BOXES; i++) {
    directions.push({x: 1, y: 1});
}


canvas.width = CONTAINER_WIDTH;
canvas.height = CONTAINER_HEIGHT;

const antImage = new Image();
antImage.src = 'assests/ant.svg';


const getPositionX = () => {
    return Math.floor(Math.random() * (CONTAINER_WIDTH - BOX_WIDTH));
}

const getPositionY = () => {
    return Math.floor(Math.random() * (CONTAINER_HEIGHT - BOX_HEIGHT));
}


let boxCounter = 0;
const createBox = (n) => {
  for (let i = 0; i < n; i++) {
    if (boxCounter >= NUMBER_OF_BOXES) break;
    let positionX = getPositionX();
    let positionY = getPositionY();
    let box = {
      x: positionX,
      y: positionY,
      width: BOX_WIDTH,
      height: BOX_HEIGHT,
      color: 'blue'
    };
    boxes.push(box);
    ctx.fillStyle = box.color;
    ctx.fillRect(positionX, positionY, BOX_WIDTH, BOX_HEIGHT);
    ctx.drawImage(antImage, positionX, positionY, BOX_WIDTH, BOX_HEIGHT);canvas.style.cursor = "pointer";
    boxCounter++;
  }
  checkOverlap();
};


const checkOverlap = () => {
for (let i = 0; i < boxes.length; i++) {
  for (let j = i + 1; j < boxes.length; j++) {
    let box1 = boxes[i];
    let box2 = boxes[j];
    if (box1.x <= box2.x + box2.width &&
      box1.x + box1.width >= box2.x &&
      box1.y <= box2.y + box2.height &&
      box1.height + box1.y >= box2.y) {
      //The boxes are overlapping
      boxes.splice(j, 1);
      ctx.clearRect(0, 0, CONTAINER_WIDTH, CONTAINER_HEIGHT);
      boxes.forEach(box => {
        ctx.fillStyle = box.color;
        ctx.fillRect(box.x, box.y, box.width, box.height);
        ctx.drawImage(antImage, box.x, box.y, BOX_WIDTH, BOX_HEIGHT);
      });
    }
  }
}
}


const moveBox = () => {
  ctx.clearRect(0, 0, CONTAINER_WIDTH, CONTAINER_HEIGHT);
  checkBoxCollision();
  for (let i = 0; i < NUMBER_OF_BOXES; i++) {
    let box = boxes[i];
    let direction = directions[i];
    if (box.x + BOX_WIDTH >= CONTAINER_WIDTH || box.x <= 0) {
      direction.x = -direction.x;
    }
    if (box.y + BOX_HEIGHT >= CONTAINER_HEIGHT || box.y <= 0) {
      direction.y = -direction.y;
    }
    box.x = box.x + direction.x;
    box.y = box.y + direction.y;
    ctx.fillStyle = box.color;
    ctx.fillRect(box.x, box.y, box.width, box.height);
    ctx.drawImage(antImage, box.x, box.y, BOX_WIDTH, BOX_HEIGHT);
  }
  };



const checkBoxCollision = () => {
for (let i = 0; i < boxes.length; i++) {
    for (let j = i + 1; j < boxes.length; j++) {
        let box1 = boxes[i];
        let box2 = boxes[j];
        if (box1.x < box2.x + box2.width &&
          box1.x + box1.width > box2.x &&
          box1.y < box2.y + box2.height &&
          box1.y + box1.height > box2.y) {
        
        // If they are, change the direction of box1
        box1.dx *= -1;
        box1.dy *= -1;      
      }
    }
  }
}


canvas.addEventListener('click', (e) => {
  let x = e.clientX - canvas.offsetLeft;
  let y = e.clientY - canvas.offsetTop;

  for (let i = 0; i < boxes.length; i++) {
    let box = boxes[i];
    if (x >= box.x && x <= box.x + box.width && y >= box.y && y <= box.y + box.height) {
      boxes.splice(i, 1);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      boxes.forEach(box => {
        ctx.fillStyle = box.color;
        ctx.fillRect(box.x, box.y, box.width, box.height);
        ctx.drawImage(antImage, box.x, box.y, BOX_WIDTH, BOX_HEIGHT);
      });
      break;
    }
  }
});
  
    
antImage.onload = () =>{
  createBox(NUMBER_OF_BOXES);
}
setInterval(moveBox,5);
