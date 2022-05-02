let sketch5 = function(p){
    p.setup = function setup() {
        p.createCanvas(200, 200);
        p.background(255);
        };
    p.draw = function draw() {
        p.stroke(0,p.mouseX,p.mouseY)
        p.line  (p.mouseX,p.mouseY,p.width/2,p.height/2)
    };
};

new p5(sketch5,"mit_2");