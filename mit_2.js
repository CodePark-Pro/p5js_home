let sketch5 = function(p){
    p.setup = function setup() {
        p.createCanvas(p.windowWidth/6, p.windowHeight/4);
        p.background(0);
        };
    p.draw = function draw() {
        p.stroke(0,p.mouseX,p.mouseY)
        p.line  (p.mouseX,p.mouseY,p.width/2,p.height/2)
    };
    p.windowResized = function windowResized(){
        p.resizeCanvas(p.windowWidth/6, p.windowHeight/4);
        p.background(0);
      };
};

new p5(sketch5,"mit_2");