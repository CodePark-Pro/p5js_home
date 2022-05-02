let sketch6 = function(p){
    p.setup = function setup() {
        let w=p.windowWidth/6;
        let h=p.windowHeight/4;
        if(p.windowWidth < p.windowHeight){
           w=200;
           h=200; 
        }
        p.createCanvas(w, h);
        p.frameRate(10);
        p.background(10,10,100,50);
        };
    p.draw = function draw() {
        p.fill(p.random(0,127),p.random(0,255),p.random(127,255),127)
        p.ellipse(p.width/2,p.height/2,p.width,p.height);
    };
    p.windowResized = function windowResized(){
        let w=p.windowWidth/6;
        let h=p.windowHeight/4;
        if(p.windowWidth < p.windowHeight){
            w=200;
            h=200;
        }
        p.resizeCanvas(w, h);
        p.background(10,10,100,50);
      };
};


new p5(sketch6,"mit_3");