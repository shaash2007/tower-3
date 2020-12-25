class Box {
    constructor(x, y, width, height, colour, stat) {
      var options = {
          'isStatic': stat,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.colour = colour;
      this.life = 1;
      
      World.add(world, this.body);
    }

    destroy(){
        if (this.body.speed < 5) {
            this.display();
        }
        else {
            World.remove(world, this.body);
            push();
            this.visibility = this.visibility - 1;
            this.life = this.life - 1;
            tint(255, this.visibility);
            pop();
        }
    }

    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(this.colour);
      rect(0, 0, this.width, this.height);
      pop();
    }

    score(){
      if(this.life < 0 && this.life > -101){
        score = score + 1;
      }
    }
    
  }
  