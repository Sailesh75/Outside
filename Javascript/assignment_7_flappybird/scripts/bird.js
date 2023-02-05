import { state } from "./gamestate.js";

export class Bird{
    constructor(
        positionX,
        positionY,
        width,
        height,
        gravity,
        direction,
        radius,
        flappybirdUp,
        flappybirdDown,
        flappybird,
        frame,
    ){
        this.positionX = positionX;
        this.positionY = positionY;
        this.width = width;
        this.height = height;
        this.gravity = gravity;
        this.direction = direction;
        this.radius = radius;
        this.flappybirdUp = flappybirdUp;
        this.flappybirdDown = flappybirdDown;
        this.flappybird = flappybird;
        this.frame = frame;
    }
    
    drawBird(ctx){
        let flappy = [this.flappybirdUp, this.flappybird, this.flappybirdDown, this.flappybird];
        let bird = flappy[this.frame];
        if( state.current == state.getReady){
            ctx.drawImage(bird, this.positionX, this.positionY, this.width, this.height);      
        }
        if( state.current == state.game){
            ctx.drawImage(bird, this.positionX, this.positionY, this.width, this.height);      
        }
    }

    birdMotion(base_position, hitSound){
        if(state.current == state.getReady){
            this.frame++;
            if (this.frame == 3){
                this.frame = 0;
            }
        }
        if(state.current == state.game){
        this.positionY = this.positionY + (this.gravity * this.direction);
        this.frame++;
        if (this.frame == 3){
            this.frame = 0;
        }
        if(this.positionY >= base_position ){
            hitSound.play();
            this.positionY = base_position;
            state.current = state.over;
        }
    }
}

    moveBirdUp()
    {
        if(state.current == state.game)
        {
            let speed = 80;
            let direction = -1;
            this.positionY = this.positionY + (speed * direction);
        }
    }
}   