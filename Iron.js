class Iron{
    constructor(x,y,height,width){
        var options={
            'restitution':0.8,
            'friction':3,
            'density':30
        }

      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = width;
      this.height = height;
      //Matter.Body.setAngle(this.body, angle); 
      World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(2);
        stroke("black");
        fill(184, 25, 25);
        rect(0, 0, this.width, this.height);
        pop();
    }
};