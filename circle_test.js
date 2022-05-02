//let yumiko1 = document.getElementById('yumiko1');
// function setup() {
//   let canvas = createCanvas(200,200);
//   canvas.parent(y1);
// }

// function draw() {
//   ellipse(50, 50, 80, 80);
// }
let sketch1 = function(p){
  p.setup = function setup() {
    let c = p.createCanvas(p.windowWidth/6, p.windowHeight/4);
    p.background(200);
  };
  p.draw = function draw(){
    p.ellipse(50, 50, 80, 80);
  };
  p.windowResized = function windowResized(){
    p.resizeCanvas(p.windowWidth/6, p.windowHeight/4);
    p.background(200);
  };
};

new p5(sketch1,"yumiko1");