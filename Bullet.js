class Bullet {
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,50,50,options)
        World.add(world,this.body)
        this.image = loadImage("bullet.png")
    }

    shoot(){
        Matter.Body.setStatic(this.body,false)
        Matter.Body.setVelocity(this.body,{x:10,y:0})
    }

    display() {
        var pos = this.body.position
        //console.log(pos)
        imageMode(CENTER)
        push();
        image(this.image,pos.x,pos.y,25,25)
        pop();
    }

    
}