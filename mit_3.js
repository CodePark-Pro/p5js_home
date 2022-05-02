let sketch6 = function(p){
    p.setup = function setup() {
        p.createCanvas(200, 200);
        p.frameRate(10);
        p.background(10,10,100,50);
        };
    p.draw = function draw() {
        p.fill(p.random(0,127),p.random(0,255),p.random(127,255),127)
        p.ellipse(p.width/2,p.height/2,200,200);
    };
};


new p5(sketch6,"mit_3");