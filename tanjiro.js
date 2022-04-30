function setup() {
  createCanvas(400, 200);
}

function draw() {
  //1つの四角形の1辺のサイズ
  //横に四角形を10個書きたいので、幅を10でわる
  const w = width/10;
  //縦に四角形を4個書きたいので、高さを5でわる
  const h = height/4;
  //X方向に繰り返し
  //キャンバスの幅まで
  //widthはシステム変数(キャンバスの幅が入っている)
  for(let i = 0; i <width/w; i+=1){
    //Y方向に繰り返し
    //キャンバスの高さまで
    //heightはシステム変数(キャンバスの高さが入っている)
    for(let j = 0;j<height/h;j+=1){
      //もしi+jが偶数だったら緑
      if((i+j)%2==0){
        fill('#66CDAA');
      }
      //奇数だったら黒
      else{
        fill('#000000');
      }
      //四角形を描く
      rect(i*w,j*h, w, h);
    }
  }
}