const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const CONTAINER_WIDTH = 1000;
const CONTAINER_HEIGHT = 500;
const NUMBER_OF_BOXES = 5;
const BOX_HEIGHT = 50;
const BOX_WIDTH = 50;
let boxes = [];

canvas.width = CONTAINER_WIDTH;
canvas.height = CONTAINER_HEIGHT;

const antImage = new Image();
antImage.src = 'assests/ant.svg';
console.log(antImage);

const getRandomColor = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const getPositionX = () => {
    return Math.floor(Math.random() * (CONTAINER_WIDTH - BOX_WIDTH));
}

const getPositionY = () => {
    return Math.floor(Math.random() * (CONTAINER_HEIGHT - BOX_HEIGHT));
}

const createBox = (n) => {
    for (let i = 0; i < n; i++) {
        let positionX = getPositionX();
        let positionY = getPositionY();
        let box = {
            x: positionX,
            y: positionY,
            width: BOX_WIDTH,
            height: BOX_HEIGHT,
            color: getRandomColor()
        }
        boxes.push(box);
        ctx.fillStyle = box.color;
        ctx.fillRect(positionX, positionY, BOX_WIDTH, BOX_HEIGHT);
        ctx.drawImage(antImage, positionX ,positionY, BOX_WIDTH, BOX_HEIGHT);
    }
    checkOverlap();
}

const checkOverlap = () => {
    let overlap = true;
    while(overlap){
        overlap = false;
        for (let i = 0; i < boxes.length; i++) {
            for (let j = i + 1; j < boxes.length; j++) {
                let box1 = boxes[i];
                let box2 = boxes[j];
                if (box1.x <= box2.x + box2.width &&
                    box1.x + box1.width >= box2.x &&
                    box1.y <= box2.y + box2.height &&
                    box1.height + box1.y >= box2.y) {
                    //The boxes are overlapping (moving one box to new position)
                    let newX = getPositionX();
                    let newY = getPositionY();
                    box2.x = newX;
                    box2.y = newY;
                    ctx.fillStyle = box2.color;
                    ctx.fillRect(newX, newY, box2.width, box2.height);
                    overlap = true;
                    }
                }
            }
    }
}

createBox(NUMBER_OF_BOXES);