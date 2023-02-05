import { state } from "./gamestate.js";

export class Base {
  constructor(positionX, positionY, width, height, speed) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.width = width;
    this.height = height;
    this.speed = speed;
  }
  drawBase(ctx, gameBase) {
    ctx.drawImage(
      gameBase,
      this.positionX,
      this.positionY,
      this.width,
      this.height
    );
  }

  moveBase() {
    let direction = -1;
    let speed = 7;
    if (state.current == state.getReady) {
      this.positionX = (this.positionX + speed * direction) % (this.width / 2);
    }
    if (state.current == state.game) {
      this.positionX = (this.positionX + speed * direction) % (this.width / 2);
    }
  }
}
