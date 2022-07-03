let sketch3 = function(p){
    var count = 0;
    p.setup = function setup() {
        let c = p.createCanvas(p.windowWidth,p.windowHeight/2);
        p.colorMode(p.HSB,255,255,255);
        p.background(0);
        //円の塗りつぶしは白(0)
        p.fill(0, 0, 255);
        //線の色は緑
        p.stroke(128, 255, 255);
        p.strokeWeight(2);
        p.frameRate(30);
        
        count = 0;
    };
    p.draw = function draw(){
        let h = p.windowHeight/2;
        if(count%100==0){
            p.stroke(p.random(255), 255,255);
        }
        //線を引く(x座標は変化するのでi,y座標は一定、もう一点は固定x=240,y=60)
        p.line((count%100)*(p.windowWidth/100)+5, 20, p.windowWidth/2, h/2);
        //円を描く(x,y,幅、高さ)
        p.ellipse((count%100)*(p.windowWidth/100)+5,20, 10, 10);
        
        
        //下の部分を描く
        //円を描く(x,y,幅、高さ)
        p.line((count%100)*(p.windowWidth/100)+5, h-20, p.windowWidth/2, h/2);
        p.ellipse((count%100)*(p.windowWidth/100)+5,h-20, 10, 10);
        count += 1;
    };
    p.windowResized = function windowResized(){
        let h = p.windowHeight/2;
        p.resizeCanvas(p.windowWidth, h);
        p.background(0);
        count = 0;
    }
  };
  
new p5(sketch3,"back_g");