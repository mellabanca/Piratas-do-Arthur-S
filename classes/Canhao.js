class Canhao {
    constructor(posx, posy, largura, altura, angulo){
        this.x = posx;
        this.y = posy;
        this.lar = largura;
        this.alt = altura;
        this.ang = angulo;
        this.imagem= loadImage("./assets/canon.png");
        this.base= loadImage("./assets/cannonBase.png");
    }
    mostrar(){
    if(keyIsDown(RIGHT_ARROW)){
    this.ang +=1;   
    }
    if(keyIsDown(LEFT_ARROW)){
        this.ang -=1;   
        }
   push();
   translate(this.x, this.y);
   rotate(this.ang);
  imageMode(CENTER);
  image(this.imagem,0,0,this.lar,this.alt);
   pop();
   image(this.base,70,20,200,200);
   noFill();
    }
}