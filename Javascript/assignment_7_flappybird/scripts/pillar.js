import { state } from "./gamestate.js";

export class Pillar{
    constructor(
        width,
        height,
        topX,
        topY,
        bottomX,
        bottomY,
        gap,
        speed,
        direction,
        pillarLocation, 
        topPosition,
        score,
        best,
    ){
        this.width = width;
        this.height = height;
        this.top= {topX,topY};
        this.bottom = {bottomX,bottomY};
        this.gap = gap;
        this.speed = speed;
        this.direction = direction;
        this.pillarLocation = pillarLocation;
        this.topPosition = topPosition;
        this.score = score;
        this.best = best;
    }

    drawPillar(ctx, topPillar, bottomPillar){
        if(state.current == state.game){
            for(let i=0; i < this.pillarLocation.length; i++){
                let pl = this.pillarLocation[i];
                let topY = pl.y;
                let bottomY = pl.y + this.height + this.gap;
                //top pillar
                ctx.drawImage(topPillar, pl.x, topY, this.width, this.height);
                //bottom pillar
                ctx.drawImage(bottomPillar,pl.x, bottomY, this.width, this.height);
            }
        }
    }

    drawScore(ctx,positionX,positionY,scoreX,scoreY,bestX,bestY){
        ctx.fillStyle = '#FFF';
        ctx.strokeStyle = '#000';
        if(state.current == state.game){
            ctx.font = '50px Teko';
            ctx.fillText(this.score,positionX,positionY);
            ctx.strokeText(this.score,positionX,positionY);
        }
        else if(state.current == state.over){
            ctx.font = "35px Teko";
            ctx.fillText(this.score,scoreX,scoreY);
            ctx.strokeText(this.score, scoreX,scoreY);
            ctx.fillText(this.best, bestX, bestY);
            ctx.strokeText(this.best, bestX, bestY);
        }
    }

    pushPillar(){
        if(state.current == state.game){
            this.pillarLocation.push({
                x : this.top.topX,
                y : this.topPosition * (Math.random() + 1)
            });
        }
    }

    movePillar(x,y,radius,base_position,hitSound,pointSound){
        if(state.current == state.game){
            for(let i=0; i< this.pillarLocation.length; i++){
                let pl = this.pillarLocation[i];
                let topY = pl.y;
                let bottomY = topY + this.height + this.gap;
                pl.x = (pl.x + (this.speed * this.direction)); 
                if(pl.x + this.width <=0){
                    this.pillarLocation.shift();
                    pointSound.play();
                    this.score += 1;
                    this.best = Math.max(this.score,this.best);
                    localStorage.setItem("best",this.best);
                }
                if(
                    x + radius > pl.x &&
                    x - radius < pl.x + this.width &&
                    y + radius > pl.y &&
                    y - radius < pl.y + this.height
                )
                {   
                    hitSound.play();
                    this.positionY = base_position;
                    state.current = state.over;
                }
                if(
                    x + radius > pl.x &&
                    x - radius < pl.x + this.width &&
                    y + radius > bottomY &&
                    y - radius < bottomY + this.height
                )
                {
                    hitSound.play();
                    this.positionY = base_position;
                    state.current = state.over;
                }
            }
        }
    }  
}
