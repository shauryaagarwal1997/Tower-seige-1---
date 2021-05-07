class Block{
  constructor(x, y, width, height){
    var options={
      isStatic:false
    }
    this.width=width;
    this.height=height;

    this.body=Bodies.rectangle(x,y,width,height,options)
    World.add(world,this.body);
   
  }
  display(){
    stroke("red");
    strokeWeight(3);
    fill("orange");
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
  }

}
