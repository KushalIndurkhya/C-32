class Bird extends BaseClass{
    constructor(x,y){


     super(x,y,50,50)
     this.image=loadImage("sprites/bird.png")
     this.smokeimage=loadImage("sprites/smoke.png")

        this.trajectory=[]    
    }
display(){
  var pos = this.Body.position;
 /* pos.x=mouseX
  pos.y=mouseY*/
 super.display()
if(this.Body.velocity.x>10 && pos.x>200){
       var position = [pos.x,pos.y];
       this.trajectory.push(position);
}
 for (var i=0;i<this.trajectory.length;i++){
       image(this.smokeimage,this.trajectory[i][0],this.trajectory[i][1])
      }
} 
}
