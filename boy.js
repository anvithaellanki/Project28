class Boy{
    constructor(x,y,w,h){
        var options={
            isStatic:true,
        }
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.image=loadImage("Plucking mangoes/boy.png");
        this.body=Bodies.rectangle(this.x,this.y,this.w/20,this.h/20,options);
        World.add(world,this.body);
    }
    display(){
        var boyPos=this.body.position;		
        push();
        translate(boyPos.x, boyPos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.w, this.h);
        pop();
        
    }
}