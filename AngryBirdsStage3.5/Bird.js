class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage = loadImage("sprites/smoke.png");
    this.trajectray = []
   // bird_angle = this.body.angle;
    //console.log(bird_angle)
  }

  display() {
   // this.body.position.x = mouseX;
   // this.body.position.y = mouseY;
    super.display();
    
    //console.log(this.body.velocity.x)
    if(this.body.velocity.x>10 && this.body.position.x>200){
      var position = [this.body.position.x,this.body.position.y]
      this.trajectray.push(position)
    }

       for(var i = 0;i<this.trajectray.length;i++){
       image(this.smokeimage,this.trajectray[i][0],this.trajectray[i][1])
       }
   }
}
