export default class Player {
  constructor(gameWidth, gameHeight, image) {
    this.image = new Image();
    this.image.src = image;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = 200;
    this.height = 200;
    this.x = 0;
    this.y = this.gameHeight - this.height;
    this.frameX = 0;
    this.frameY = 0;
    this.speed = 0;
    this.vy = 0;
    this.g = 1;
  }

  draw(context) {
    context.drawImage(
      this.image,
      this.frameX * this.width, // sx
      this.frameY * this.height, // sy
      this.width, // sw
      this.height, // sh
      this.x,
      this.y,
      this.width,
      this.height,
    );
  }

  update(input) {
    this.x += this.speed;
    // X movement
    if ((input.keys.indexOf('d') > -1)
    && (input.keys.indexOf('a') > -1)) {
      this.speed = 0;
    } else if (input.keys.indexOf('d') > -1) {
      this.speed = 5;
    } else if (input.keys.indexOf('a') > -1) {
      this.speed = -5;
    } else {
      this.speed = 0;
    }
    // X bounds
    if (this.x < 0) {
      this.x = 0;
    } else if (this.x > this.gameWidth - this.width) {
      this.x = this.gameWidth - this.width;
    }
    // Y movement
    if (this.onGround()
     && (input.keys.indexOf(' ') > -1 || input.keys.indexOf('w') > -1)) {
      this.vy -= 24;
    }

    this.y += this.vy;

    if (!this.onGround()) {
      this.vy += this.g;
      this.frameY = 1;
    } else {
      this.vy = 0;
      this.frameY = 0;
    }
    // Y Bounds
    if (this.y > this.gameHeight - this.height) {
      this.y = this.gameHeight - this.height;
    }
  }

  onGround() {
    return this.y >= this.gameHeight - this.height;
  }
}
