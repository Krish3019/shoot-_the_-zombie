const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

 var engine,world
var ground
var mainPlayer
var enemy
var mainPlayerImg
var bullet
var bullets = []


function setup(){
createCanvas(displayWidth,displayHeight)
engine = Engine.create();
world = engine.world

ground = new Ground(displayWidth/2,displayHeight-20,displayWidth,
    displayHeight/20)

    bullet = new Bullet(displayWidth/6,675)
mainPlayer = new Player(displayWidth/10,displayHeight/2+175)

//enemy = new Npc(displayWidth-80,displayHeight/2)
//console.log(enemy.body)
//Matter.Body.setVelocity(enemy.body,{x:-2,y:2})
//console.log(enemy.body.velocity)
}


function draw (){
background("skyblue")
Engine.update(engine)
ground.display();
mainPlayer.display();
//enemy.display();
//bullet.display();
//Matter.Body.setVelocity(enemy.body,{x:-4,y:2})

for(var i=0;i<bullet.length;i++){
    showBullets(bullets[i],i)
     console.log(bullets[i])
}
console.log(bullets)
//drawSprites();
}


function keyPressed(){
    if(keyCode===32){
        
        bullet = new Bullet(displayWidth/6,675)
        bullets.push(bullet)
      //  console.log(bullets)


    }
}

function keyReleased(){
    if(keyCode===32){
        //console.log(bullets[bullets.length-1])
        bullets[bullets.length-1].shoot();
    }
}

function showBullets(bullet,index){
    bullet.display();
}


