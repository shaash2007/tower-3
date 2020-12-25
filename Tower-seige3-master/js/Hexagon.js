class Hexa {
    constructor(x, y, radius) {
      var options = {
          'isStatic': false,
          'restitution':0.6,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.polygon(x, y, 6, radius, options);
      this.width = radius + 20;
      this.image = loadImage("ImgHexa.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      // rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.width);
      pop();
    }
  }
  