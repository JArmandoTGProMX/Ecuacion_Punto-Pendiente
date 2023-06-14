function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
  
    let centerX = width / 2;
    let centerY = height / 2;
  
    let strokeLength = min(width, height) / 2;
  
    stroke(0);
    line(0, centerY, width, centerY);
    line(centerX, 0, centerX, height);
    line(0, 0, width, height);
    line(0, height, width, 0);
  }