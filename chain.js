class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.2,
            length: 10
        }
        this.pointB=pointB
        this.Chain = Constraint.create(options);
        World.add(world, this.Chain);
    }
    attach(body){
        this.Chain.bodyA=body    
    }
    fly(){
     this.Chain.bodyA=null

   }
    display(){
        if (this.Chain.bodyA){    
            var pointA = this.Chain.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
  
    }

}