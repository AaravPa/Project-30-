class Sling {
    constructor(bodyA, pointB) {
     var options = {
         bodyA : bodyA,
         pointB : pointB,
         stiffness : .008,
         length : 10,
       }
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }
    fly() {
     this.sling.bodyA = null
    } 
    attach(body){
      this.sling.bodyA = body;
    }
    display() {
      if(this.sling.bodyA) {
       strokeWeight(4);
       var pointA = this.sling.bodyA.position
       var pointB = this.sling.pointB
       line(pointA.x,pointA.y,pointB.x,pointB.y);
      }
   }
 }