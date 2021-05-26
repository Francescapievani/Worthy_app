let myImage;
let myLogo;
let myText1;
let myMockup;
let myBackground;



function preload(){
myImage = loadImage("./assets/scimmia01.png");
myLogo = loadImage("./assets/logo-07.png");
myMockup = loadImage("./assets/Mockup.png");
myBackground = loadImage("./assets/sfondo2-06.png");
}

function setup() {
  createCanvas(windowWidth,6000);
  background(255,252,246);
  // put setup code here
}

function draw() {

imageMode(CENTER);

image(myLogo,130, 80,230, 93);
image (myImage,310,100, 200 ,249);
image (myBackground,windowWidth/2 + 200, 500, 1333, 1000);
image (myMockup,windowWidth/2 + 400, 500, 1333, 1000);



//buttons
buttonHome = createButton("Home");
buttonHome.position(windowWidth/4, windowHeight/13);
buttonUtente = createButton("Utente");
buttonUtente.position(windowWidth/3, windowHeight/13);
buttonEnte = createButton("Ente");
buttonEnte.position(windowWidth/3+150, windowHeight/13) ;




}
