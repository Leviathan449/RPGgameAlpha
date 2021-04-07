class Ghost {
  constructor(x,y,r)
	{
		var options = { 
      density: 10, 
      frictionAir: 0.5
    };
		
		this.r=r;
		this.image=loadImage("PlaceholderImages/Enemies/BooPlaceholder2.png");
		this.body=Bodies.circle(x,y,r, options)
		World.add(world, this.body);
		this.Visiblity = 255

	}
	display()
	{
		if(this.body.speed < 0.8){
			push()
			translate(this.body.position.x, this.body.position.y);
	        rotate(this.body.angle)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r)
			pop()
			
		   }
		   else{
			World.remove(world, this.body);
			push();
			this.Visiblity = this.Visiblity - 5;
			tint(255,this.Visiblity);
			image(this.image, this.body.position.x, this.body.position.y, 100, 100);
			pop();
			
		   }
		  }
			
	}

