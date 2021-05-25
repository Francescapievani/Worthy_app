let myImage;
let myLogo;



function preload(){
myImage = loadImage("./assets/scimmia1.png");
myLogo = loadImage("./assets/logo.png");
}

function setup() {
  createCanvas(windowWidth,6000);
  background(255,252,246);
  // put setup code here
}

function draw() {
imageMode(CENTER);
image(myLogo,myImage.width/2, myImage.height/2-50);
image (myImage, myImage.width/2 +150, myImage.height/2-50);
}
