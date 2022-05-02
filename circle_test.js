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
    let w=p.windowWidth/6;
    let h=p.windowHeight/4;
    if(p.windowWidth < p.windowHeight){
        w=200;
        h=200; 
    }
    p.createCanvas(w, h);
    p.background(200);
  };
  p.draw = function draw(){
    p.ellipse(50, 50, 80, 80);
  };
  p.windowResized = function windowResized(){
    let w=p.windowWidth/6;
        let h=p.windowHeight/4;
        if(p.windowWidth < p.windowHeight){
            w=200;
            h=200;
        }
        p.resizeCanvas(w, h);
    p.background(200);
  };
};

new p5(sketch1,"yumiko1");