//let yumiko2 = document.getElementById("yumiko2");
// function setup() {
//   let canvas = createCanvas(400, 200);
//   canvas.parent(y2);
// }

// function draw() {
//   //1つの四角形の1辺のサイズ
//   //横に四角形を10個書きたいので、幅を10でわる
//   const w = width/10;
//   //縦に四角形を4個書きたいので、高さを5でわる
//   const h = height/4;
//   //X方向に繰り返し
//   //キャンバスの幅まで
//   //widthはシステム変数(キャンバスの幅が入っている)
//   for(let i = 0; i <width/w; i+=1){
//     //Y方向に繰り返し
//     //キャンバスの高さまで
//     //heightはシステム変数(キャンバスの高さが入っている)
//     for(let j = 0;j<height/h;j+=1){
//       //もしi+jが偶数だったら緑
//       if((i+j)%2==0){
//         fill('#66CDAA');
//       }
//       //奇数だったら黒
//       else{
//         fill('#000000');
//       }
//       //四角形を描く
//       rect(i*w,j*h, w, h);
//     }
//   }
// }
// let sketch2 = function(p){
//   p.setup = function setup() {
//     p.createCanvas(200, 200);
//   };

//   p.draw = function draw(){
//     //1つの四角形の1辺のサイズ
//     //横に四角形を10個書きたいので、幅を10でわる
//     const w = width/10;
//     //縦に四角形を4個書きたいので、高さを5でわる
//     const h = height/4;
//     //X方向に繰り返し
//     //キャンバスの幅まで
//     //widthはシステム変数(キャンバスの幅が入っている)
//     for(let i = 0; i <width/w; i+=1){
//       //Y方向に繰り返し
//       //キャンバスの高さまで
//       //heightはシステム変数(キャンバスの高さが入っている)
//       for(let j = 0;j<height/h;j+=1){
//         //もしi+jが偶数だったら緑
//         if((i+j)%2==0){
//           p.fill('#66CDAA');
//         }
//         //奇数だったら黒
//         else{
//           p.fill('#000000');
//         }
//         //四角形を描く
//         p.rect(i*w,j*h, w, h);
//       }
//     }
//   };
// };

// new p5(sketch2,"yumiko2");

let sketch2 = function(p){
  p.setup = function setup() {
    let w=p.windowWidth/6;
    let h=p.windowHeight/4;
    if(p.windowWidth < p.windowHeight){
        w=h=200;
    }
    p.createCanvas(w, h);
    p.background(200);
  };
    p.draw = function draw(){
    //1つの四角形の1辺のサイズ
    //横に四角形を10個書きたいので、幅を10でわる
    const w = p.width/10;
    //縦に四角形を4個書きたいので、高さを5でわる
    const h = p.height/4;
    //X方向に繰り返し
    //キャンバスの幅まで
    //widthはシステム変数(キャンバスの幅が入っている)
    for(let i = 0; i <p.width/w; i+=1){
      //Y方向に繰り返し
      //キャンバスの高さまで
      //heightはシステム変数(キャンバスの高さが入っている)
      for(let j = 0;j<p.height/h;j+=1){
        //もしi+jが偶数だったら緑
        if((i+j)%2==0){
          p.fill('#66CDAA');
        }
        //奇数だったら黒
        else{
          p.fill('#000000');
        }
        //四角形を描く
        p.rect(i*w,j*h, w, h);
      }
    }
  };
  p.windowResized = function windowResized(){
    let w=p.windowWidth/6;
    let h=p.windowHeight/4;
    if(p.windowWidth < p.windowHeight){
      w=h=200;
    }
    p.resizeCanvas(w, h);
    p.background(200);
  };
};

new p5(sketch2,"yumiko2");