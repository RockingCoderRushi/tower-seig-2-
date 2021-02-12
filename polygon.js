class Polygon {
    constructor(x,y,radius) {
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
        
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius
      this.polygonimage = loadImage("polygon.png")
      World.add(world, this.body);
    }
    display(){
   
     
     
      var angle = this.body.angle;
       push(); 
       translate(this.body.position.x, this.body.position.y);
        rotate(angle);
         image(this.polygonimage,0,0,this.radius,this.radius);
          pop();
    }
  };