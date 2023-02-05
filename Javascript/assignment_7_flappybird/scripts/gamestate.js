export const state = {
    current : 0,
    getReady : 0,
    game : 1,
    over : 2
 }

export class Start{
    constructor(
        positionX,
        positionY,
        width,
        height
    ){
        this.positionX = positionX;
        this.positionY = positionY;
        this.width = width;
        this.height = height;
    }
    drawStart(ctx,getReady){
        if(state.current == state.getReady){
            ctx.drawImage(getReady, this.positionX, this.positionY, this.width, this.height);
        }
    }
 }

export class GameOver{
    constructor(
        sX,
        sY,
        positionX,
        positionY,
        width,
        height
    )
    {
        this.sX = sX;
        this.sY = sY;
        this.positionX = positionX;
        this.positionY = positionY;
        this.width = width;
        this.height = height;
    }
    
    drawFinish(ctx,sprite){
        if(state.current == state.over){
            ctx.drawImage(sprite,this.sX, this.sY, this.width, this.height, this.positionX, this.positionY, this.width, this.height);
        }
    }
}
