class Block{
    constructor(x, y, width, height, angle) {
        var options = {
          restitution :0.5,
          friction :1.5,
          isStatic : false,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      
      display(){
        console.log(this.body.speed);
        if(this.body.speed <6){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }else{
        World.remove(world, this.body);
        push();
        pop();
        
      }
    }
  }
  

