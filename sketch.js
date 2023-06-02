let boxWidth = 10

class PlayArea {

	constructor(start_x,start_y,size_x,size_y)
	{
		//coordenada de começo do ret
		this.start_x=start_x
		this.start_y=start_y

		//Tamanhos dos widths
		this.size_x=size_x
		this.size_y=size_y

		//Usado para loopar pela matriz de coords
		this.for_x=start_x+size_x
		this.for_y=start_y+size_y

		this.box_x=(start_x+size_x)/boxWidth
		this.box_y=(start_y+size_y)/boxWidth
	}

	createPlay()
	{
		strokeWeight(4)
		fill(127)
		rect(this.start_x,this.start_y,this.size_x,this.size_y)

		for(let i=this.start_x ; i<this.for_x; i+=boxWidth)
		{
			strokeWeight(1.35)
			fill(4)
			line(i,this.start_y,i,this.for_y)
		}

		for(let i=this.start_y ; i<this.for_y ; i+=boxWidth)
		{
			strokeWeight(1.35)
			fill(0)
			line(this.start_x,i,this.for_x,i)
		}




	}

	


}



let Master=new PlayArea(20,20,boxWidth*50,boxWidth*20)

//let Master=new PlayArea(0,0,boxWidth*5,boxWidth*2)
console.log(Master.box_x,Master.box_y)

class Cell{
	constructor(x,y)
	{
		this.x=x
		this.y=y
	}

	show()
	{
		
		fill(255,204,0)
		stroke(255,204,0)
		rect(boxWidth*this.x+Master.start_x+2,boxWidth*this.y+Master.start_y+2,boxWidth-4,boxWidth-4)

	}
}


let cells = []


let cell1
function setup(){
	// Creates a canvas with 800px width and 600px height
	createCanvas(1000, 800);
	frameRate(1)

	background(127);

	Master.createPlay()	
	
	cell1=new Cell(0,0)
	cell1.show()

	
	//Master.createPlay()	
	
	
	//cell1.x=20

	//cell1.show()
	
}

let value = 0;

function draw()
{
		

		
	

}

function mouseClicked() {

	


}
