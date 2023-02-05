export class Background{
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

    drawBackground(ctx,gameBackground){
        ctx.drawImage(gameBackground, this.positionX, this.positionY, this.width, this.height);
    }
}
