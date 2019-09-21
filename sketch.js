function setup() {
    createCanvas(1500,1000)
    background(0)
    
    
    }
    
    function draw() {
     
      
      for(var i= 0; i<=width; i+=100){
        for(var y = 0; y <= height; y = y + 100){
      
      
      noStroke()
      fill(65,129,115)
      triangle(i+5, y+75, i+45, y+3, i+86, y+75)}
      }
      
      stroke(120)
      strokeWeight(4)
      fill(255)
    ellipse(45,49,40,40)
    
      noStroke()
      fill(0)
     ellipse(45,49,10,10)
    
    }