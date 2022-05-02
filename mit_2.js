let sketch5 = function(p){
    p.setup = function setup() {
        let w=p.windowWidth/6;
        let h=p.windowHeight/4;
        if(p.windowWidth < p.windowHeight){
           w=200;
           h=200; 
        }
        p.createCanvas(w, h);
        p.background(0);
    };
    p.draw = function draw() {
        p.stroke(0,p.mouseX,p.mouseY)
        p.line  (p.mouseX,p.mouseY,p.width/2,p.height/2)
    };
    p.windowResized = function windowResized(){
        let w=p.windowWidth/6;
        let h=p.windowHeight/4;
        if(p.windowWidth < p.windowHeight){
            w=200;
            h=200;
        }
        p.resizeCanvas(w, h);
        p.background(0);
      };
};

new p5(sketch5,"mit_2");