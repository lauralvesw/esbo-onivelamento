function setup() {
    createCanvas (700, 700);
       background("pink");
   
 }
 
 function draw() {
   
   stroke("purple");
   fill("yellow");
   
   if(mouseIsPressed){
     rect(mouseX, mouseY,12, 12 );
   }    
 }