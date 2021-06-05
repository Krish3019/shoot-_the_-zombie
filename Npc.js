class Npc{
constructor(x,y){
    var options = {
       isStatic:false
    }
    this.body = Bodies.rectangle(x,y,50,50,options)
    World.add(world,this.body);
    this.image = loadImage("zombie.png")
}

display(){
var pos = this.body.position
var angle = this.body.angle
push();
translate(pos.x,pos.y)
rotate(angle)
imageMode(CENTER)
image(this.image,0,0,100,100)
pop();
//Sconsole.log(this.body.velocity)
}






}