class Bolas {
  constructor(posx, posy, radio, color) {
    this.x = posx;
    this.y = posy;
    this.r = radio;
    this.colores = color;
  }

  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 6);
    if (this.x > width || this.x < 0) {
      this.x = width / 2;
    }
    if (this.y > height || this.y < 0) {
      this.y = random(0,height/10);
    }

  }

  show() {
    stroke(this.colores, 255 ,255-this.colores);
    strokeWeight(3);
    fill(255);
    ellipse(this.x, this.y, this.r * 2);
  }

}
