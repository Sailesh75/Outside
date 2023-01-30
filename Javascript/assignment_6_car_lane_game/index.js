const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 1200

ctx.beginPath();
ctx.strokeStyle = 'white';
ctx.moveTo(250, 100);
ctx.lineTo(250, 1000);
ctx.stroke();

//second line
ctx.beginPath();
ctx.strokeStyle = 'white';
ctx.moveTo(560,100);
ctx.lineTo(560, 1000);
ctx.stroke();

// const position = {
//     'left_lane' : '',
//     'middle_lane' : '',
//     'right_lane' : ''
// };

const createCar =()=> {
    ctx.fillRect()

}


const animateBox = () =>{
         
}



















