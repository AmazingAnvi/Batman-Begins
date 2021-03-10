class Drop {
    constructor(x, y, width, height) {
      var options = {
          'restitution':1,
          'friction':0.1,
          'density':3.0
           //isStatic = false
      }
      maxDrops = [];


      this.body = Bodies.circle(x, y,5, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("darkBlue");
      strokeWeight("1");
      ellipse(0, 0, this.width, this.height);
      pop();

//      if(this.body.velocity.x > 10 && this.body.position.x > 200){
//        var position = [this.body.position.x, this.body.position.y];
//        maxDrops.push(position);
//      }

      
        if(this.body > height) {
           Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
     
      for(var i = 0; 1 < maxDrops; i++) {
        Drops.push(new createDrop (random(0,4000), random(0,400)));
     }
 
    }
    
  };

  


  //for(var i=0; i<this.trajectory.length; i++){
    //ellipse(this.trajectory[i][0], this.trajectory[i][1]);
  //}
  

//  if(this.body.velocity.x > 10 && this.body.position.x > 200){
//    var position = [this.body.position.x, this.body.position.y];
//    this.trajectory.push(position);
//  }
 



  