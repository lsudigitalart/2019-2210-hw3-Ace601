function setup() {
    createCanvas(3500,3500)
    background(51, 99, 88)    
    
    }
    
    function draw() {
     
      
   //ellipse   
  for(var x2 = 0; x2 <= width; x2 =x2+95 ){
            for(var y2 = 0; y2 <= height; y2 = y2+95){

                
                fill(255)
              ellipse(x2 +45,y2+49,90,90)
                 
            }
        }  
      //triangle
      for(var x= 0; x<=width; x+=95){
        for(var y = 0; y <= height; y = y + 95){
      
      
      noStroke()
      fill(65,129,115)
      triangle(x+5, y+75, x+45, y+3, x+86, y+75)}
      }
      
//ellispe 1
        for(var x2 = 0; x2 <= width; x2 =x2+95 ){
            for(var y2 = 0; y2 <= height; y2 = y2+95){

                stroke(0)
                strokeWeight(4)
                fill(255)
              ellipse(x2 +45,y2+49,40,40)
                 
            }
        }        

//ellipse 2
for(var x2 = 0; x2 <= width; x2 =x2+95 ){
            for(var y2 = 0; y2 <= height; y2 = y2+95){
                noStroke()
                fill(0)
               ellipse(x2+45,y2+49,12,12)
            }
}
           
    
      
    
      
      
    }
