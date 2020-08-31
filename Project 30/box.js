class Box {
    constructor(x,y,width,height) {
      var options={
        isStatic : false,  
      }  
      this.body = Bodies.rectangle(x,y,width,height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.Visiblity = 255;
    } 
    
    display() {
      
      if(this.body.speed < 3) {
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        stroke("darkblue");
        strokeWeight(2);
        fill("lightblue");
        rotate(angle);
        rectMode(CENTER);
        console.log("body.speed="+ this.body.speed);
        rect(0, 0, this.width, this.height);
        pop();
      }
      else {
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        console.log(this.Visiblity);
        tint(255, this.Visiblity);
        //rect(this.body.position.x, this.body.position.y, 50, 50);
        pop();
      }
    } 
  }