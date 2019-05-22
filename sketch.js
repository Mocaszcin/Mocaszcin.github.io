let bolas = [];


function setup() {
  createCanvas(600, 400);


}

function draw() {
  background(0);

  for (let bola of bolas) {
    bola.move();
    bola.show();
  }
}

function mouseDragged() {
  let unidad=new Bolas(mouseX, mouseY, 30, random(0,255));
  bolas.push(unidad)
}
