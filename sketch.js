function setup(){
  createCanvas(500,500); 
  background (20);
  angleMode (DEGREES);
  for (x=0;x < width; x+=50){
geometry (x,300, random(0,200), random (250,20));
}
}

 function geometry(x,y,size,whatever){
  fill(whatever);
  noStroke();
  rect(x,y-size, 50, size);
  triangle(x+25, y-size, 50,50, 180, 0)


}

function draw(){
  for(x=0;x<30; x+= 30){
    fill(10,50,250, 150);
    noStroke();
rect (random(0,width), random(300,height ), random (0,30));
}
  for(x=0;x<30; x+= 30){
    fill(250,250,250, 150);
    noStroke();
rect (random(0,width), random(0,height ), random (0,3),random (0,40));
}

}