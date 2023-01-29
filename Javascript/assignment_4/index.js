const CONTAINER_WIDTH=800;
const CONTAINER_HEIGHT=400;
const NUMBER_OF_BOXES=10;
const BOX_HEIGHT = 20;
const BOX_WIDTH = 20;
let speed = 5;
let boxes = [];
let directions = [];

for(let i = 0; i < NUMBER_OF_BOXES; i++) {
    directions.push({x: 1, y: 1});
}


//outerBox
const mainBox=document.getElementById('main');
mainBox.style.width = CONTAINER_WIDTH + "px";
mainBox.style.height = CONTAINER_HEIGHT + "px";
mainBox.style.position='absolute';
mainBox.style.left = 250 + "px";
mainBox.style.top = 100 + "px";                                           
mainBox.style.backgroundColor = "beige";


//creating boxes
const getRandomColor=()=> {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


  const getPositionX= ()=> {
    return Math.floor(Math.random() * (CONTAINER_WIDTH - BOX_WIDTH));
  }


  const getPositionY=()=> {
    return Math.floor(Math.random() * (CONTAINER_HEIGHT - BOX_HEIGHT));
  }
  


const createBox=(n)=>{
    for(let i=0; i<n ; i++){
        const box = document.createElement('div');
        box.style.width = BOX_WIDTH + "px";
        box.style.height = BOX_HEIGHT + "px";   
        box.style.backgroundColor = getRandomColor();
        box.style.position='absolute';
        box.style.left = getPositionX() + "px";
        box.style.top = getPositionY() + "px";                                           
        boxes.push(box)
        mainBox.appendChild(box);
    }
    checkOverlap();
    // console.log(boxes); 
}


//to recheck the box collision until all the boxes doesn't overlap for sure
const checkOverlap=()=>{
  let overlap = true;
  while(overlap){
    overlap = false;
    for (let i = 0; i < boxes.length; i++) {
      for (let j = i + 1; j < boxes.length; j++) {
        let box1 = boxes[i];
        let box2 = boxes[j];
        let box1Left = parseInt(box1.style.left);
        let box1Top = parseInt(box1.style.top);
        let box2Left = parseInt(box2.style.left);
        let box2Top = parseInt(box2.style.top);
        if (box1Left <= box2Left + BOX_WIDTH &&
            box1Left + BOX_WIDTH >= box2Left &&
            box1Top <= box2Top + BOX_HEIGHT &&
            BOX_HEIGHT + box1Top >= box2Top) {
          //The boxes are overlapping (moving boxes to new position)
          boxes[j].style.left = getPositionX() + "px";
          boxes[j].style.top = getPositionY() + "px";
          overlap = true;
        }
      }
    }
  }
}


  const moveBox=()=>{
    checkBoxCollision();
    for (let i = 0; i < boxes.length; i++) {
        let box = boxes[i];

        let direction = directions[i];
        let left = parseInt(box.style.left);
        let top = parseInt(box.style.top);

        if (left + BOX_WIDTH + speed > CONTAINER_WIDTH ) {
            direction.x = -1;
        } else if (left - speed < 0) {
            direction.x = 1;
        }

        if (top + BOX_HEIGHT + speed > CONTAINER_HEIGHT) {
            direction.y = -1;
        } else if (top - speed < 0) {
            direction.y = 1;
        }

        box.style.left = (left + (speed * direction.x)) + "px";
        box.style.top = (top + (speed * direction.y)) + "px";
    }
  }


  const checkBoxCollision = () => {
    for (let i = 0; i < boxes.length; i++) {
        for (let j = i + 1; j < boxes.length; j++) {
            let box1 = boxes[i];
            let box2 = boxes[j];
            let box1Left = parseInt(box1.style.left);
            let box1Top = parseInt(box1.style.top);
            let box2Left = parseInt(box2.style.left);
            let box2Top = parseInt(box2.style.top);
            if (box1Left <= box2Left + BOX_WIDTH &&
                box1Left + BOX_WIDTH >= box2Left &&
                box1Top <= box2Top + BOX_HEIGHT &&
                BOX_HEIGHT + box1Top >= box2Top) {
                //The boxes are overlapping (changing direction)
                directions[i].x = -directions[i].x;
                directions[i].y = -directions[i].y;
                directions[j].x = -directions[j].x;
                directions[j].y = -directions[j].y;
            }
        }
    }
}

createBox(NUMBER_OF_BOXES);
setInterval(moveBox,50);