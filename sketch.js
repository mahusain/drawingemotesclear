let input;
let img;
let canvas;
let imgSave;
let imgReset;
let lineColor = 0;
let bgColor = 255;
let lineWeight = 3;
let noiseX = 0.0

function setup() {
  frameRate(60);
  canvas = createCanvas(500, 500);
  canvas.parent('sketch-holder');
  background(bgColor);
  stroke(lineColor);
  
  imgSave = createButton('Save Image');
  imgSave.parent('save-button');
  imgSave.mousePressed(saveImage);
  
  imgReset = createButton('Reset Image');
  imgReset.parent('reset-button');
  imgReset.mousePressed(reset);
}

function saveImage() {
  saveCanvas(canvas, 'mirrorDrawing', 'png');
}
function reset() {
  background(bgColor);
}

function draw() {
  background(255, 255, 255, 3)
  strokeWeight(lineWeight);
  
  noiseX = 0.01;
  lineWeight = noise(noiseX) * 5;
  if (mouseIsPressed == true){
    line(mouseX, mouseY, pmouseX, pmouseY);
    line(width - mouseX, mouseY, width - pmouseX, pmouseY);
  stroke(lineColor);
  
  }

}