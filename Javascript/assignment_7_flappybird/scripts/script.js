import { Bird } from "./bird.js";
import { Pillar } from "./pillar.js";
import { Background } from "./background.js";
import { Base } from "./base.js";
import {Start,GameOver,state} from "./gamestate.js";

const CANVAS_HEIGHT = window.innerHeight;
const CANVAS_WIDTH = CANVAS_HEIGHT / 1.5;
const BASE_WIDTH = window.innerWidth;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.height = CANVAS_HEIGHT;
canvas.width = CANVAS_WIDTH;

const gameBase = new Image();
gameBase.src = 'assets/sprites/base.png';

const gameBackground = new Image();
gameBackground.src = 'assets/sprites/background-day.png';

const flappybirdUp = new Image();
flappybirdUp.src = 'assets/sprites/redbird-upflap.png';

const flappybirdDown = new Image();
flappybirdDown.src = 'assets/sprites/redbird-downflap.png'

const flappybird = new Image(); 
flappybird.src = 'assets/sprites/redbird-midflap.png';

const getReady = new Image();
getReady.src = 'assets/sprites/message.png';

const gameOver = new Image();
gameOver.src = 'assets/sprites/gameover.png';

const topPillar = new Image();
topPillar.src = 'assets/sprites/pipe-green-down.png'

const bottomPillar = new Image();
bottomPillar.src = 'assets/sprites/pipe-green-up.png'

const sprite = new Image();
sprite.src = 'assets/sprites/sprite.png'

const flapSound = new Audio();
flapSound.src = 'assets/audio/wing.wav';

const pointSound = new Audio();
pointSound.src = 'assets/audio/point.wav';

const hitSound = new Audio();
hitSound.src = 'assets/audio/hit.wav';

const swooshSound = new Audio();
swooshSound.src = 'assets/audio/swoosh.wav'

const initializeGame = () =>{
    const background = new Background(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT-80);
    const base = new Base(0, CANVAS_HEIGHT-160, BASE_WIDTH, 160);
    const bird = new Bird(10, CANVAS_HEIGHT/2, 60, 40, 10, 1 ,30, flappybirdUp, flappybirdDown, flappybird, 0);
    const start = new Start(CANVAS_WIDTH / 4, CANVAS_HEIGHT/8, 250, 250);
    const gameover = new GameOver(175, 228, CANVAS_WIDTH / 4, CANVAS_HEIGHT/4 ,300, 160);
    const pillar = new Pillar(75, 400, CANVAS_WIDTH, 0, 502, 0, 180, 5, -1, [],-150, 0, parseInt(localStorage.getItem("best")) || 0);

        setInterval(()=>{
            //draw function
            background.drawBackground(ctx,gameBackground);
            pillar.drawPillar(ctx, topPillar, bottomPillar);
            bird.drawBird(ctx); 
            base.drawBase(ctx,gameBase);
            start.drawStart(ctx,getReady);
            gameover.drawFinish(ctx,sprite);
            pillar.drawScore(ctx,CANVAS_WIDTH/2,80,300,290,300,330);
            //move function
            base.moveBase();
            bird.birdMotion(CANVAS_HEIGHT-190, hitSound); 
            pillar.movePillar(bird.positionX, bird.positionY, bird.radius, CANVAS_HEIGHT-190, hitSound, pointSound);
            base.moveBase();
        },50);

        setInterval(()=>{
            pillar.pushPillar();
        },2500);

        document.onkeydown = function(e) {
            switch (e.key) {
            case " ":
                flapSound.play();
                bird.moveBirdUp();
            break;
            }
        };

        canvas.addEventListener("click", ()=>{
            bird.moveBirdUp();
        });
}

window.onload = () =>{
    initializeGame();
}

 //controlling the game
 canvas.addEventListener("click", ()=>{
    switch(state.current){
        case state.getReady:
            swooshSound.play();
            state.current = state.game;
            break;
        case state.game:
            flapSound.play();
            break;
        case state.over:
            window.location.reload();
            state.current = state.getReady;
            break;
    }
});
