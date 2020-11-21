class Ground{
    constructor(x,y,h,w){
        var options={
            isStatic:true
        }
        this.x=x,
        this.y=y;
        this.h=h;
        this.w=w;
        this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options);
        World.add(world,this.body);
    }
    display(){
        var groundPos=this.body.position;		
        push()
		translate(groundPos.x, groundPos.y);
		rectMode(CENTER)
		fill("brown")
		rect(0,0,this.w, this.h);
		pop()
			
    }
}