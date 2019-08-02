export default function Sketch1 (p) {
let balls = []

p.setup = function () {
  p.createCanvas(900, 400);
  for(let i = 0; i <= 25; i += 1){
    balls.push(new Ball());
  }
}

p.draw = function () {
  p.background(220);
  for(let i = 0; i < balls.length; i += 1){
    balls[i].move();
  }
}

class Ball{

  constructor(){
    this.size = p.random(25,150);
    this.color = [p.random(255),p.random(255),p.random(255)];
    this.speed = p.random(0,2);
    this.ballDiam = this.size/2;
    this.xMove = p.random(this.ballDiam, p.width - this.ballDiam)
    this.yMove = p.random(this.ballDiam, p.height - this.ballDiam)
    this.yAng = p.random(1,4);
    this.xAng = p.random(1,4);
    this.xDir = 1;
    this.yDir = 1;
    this.active = false;
  }

  move(){
    p.ellipse(this.xMove,this.yMove,this.size,this.size);
    p.fill(...this.color);
    this.xMove += this.xAng * this.xDir * this.speed;
    this.yMove += this.yAng* this.yDir * this.speed;
    if (this.xMove >= p.width - this.ballDiam && this.xDir == 1){
      this.xDir = -1;
    }
    if (this.xMove <= this.ballDiam && this.xDir == -1){
      this.xDir = 1;
    }
    if (this.yMove >= p.height - this.ballDiam && this.yDir == 1){
      this.yDir = -1;
    }
    if (this.yMove <= this.ballDiam && this.yDir == -1){
      this.yDir = 1;
    }
    }
  }
}