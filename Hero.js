class Hero {
  constructor(x,y,r)
	{
		var options = { 
      density: 0.3, 
	  restitution: 1,
	  isStatic : false
    };
		
		this.r=r;
		this.image = loadImage("PlaceholderImages/LuigiPlaceHolderUpdated.png");
		this.body=Bodies.circle(x, y, r, options)
		World.add(world, this.body);
       console.log(this.body)
	}
	display()
	{
			
			var heroPos=this.body.position;	
			//heroPos.x = mouseX
			//heroPos.y = mouseY

			push()
			translate(heroPos.x, heroPos.y-100);
			rotate(this.body.angle)
			
			fill(255,0,255)
			imageMode(CENTER);
			image( this.image,0,0,this.r+100, this.r+100)
			pop()
			
	}
}
