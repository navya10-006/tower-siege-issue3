class Box{
    constructor(x,y,width,height){
        var options={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic:false
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
    }

    fly(){
        this.sling.bodyA=null;
    }

    attach(body){
        this.sling.bodyA=body;
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("pink");
        rect(0, 0, this.width, this.height);
        pop();
    }
}