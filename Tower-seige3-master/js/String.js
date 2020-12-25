class String{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body) {
        Body.setPosition(stone.body, {x: 130, y: 240});
        this.sling.bodyA = body;
    }

    display(){

        if(this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(7);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}