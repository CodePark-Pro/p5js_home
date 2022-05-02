let sketch4 = function(p){
    p.setup = function setup() {
        p.createCanvas(p.windowWidth/6, p.windowHeight/4);
        p.background(255);
        };
    p.draw = function draw() {
        for(let i=0; i<p.width+25; i+=50){
            for(j=0;j<p.height+25;j+=50){
                p.fill(p.mouseX,p.mouseY,p.mouseX,127);
                p.ellipse(i,j,30,30)
            }
        }
    };
    p.windowResized = function windowResized(){
        p.resizeCanvas(p.windowWidth/6, p.windowHeight/4);
        p.background(255);
      };
};
new p5(sketch4,"mit_1");