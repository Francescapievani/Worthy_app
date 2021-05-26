let myImage;
let myLogo;
let myText1 = "Worthy sarà la tua guida in\nquesto viaggiodi crescita personale";
let myText2 = "Worthy ti guiderà suggerendoti\nattività sempre nuove";
let myMockup;
let myBackground;
let myDescription = "Mettiti in gioco\ne scopri il tuo potenziale";



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


  fill("#1F2849");
  textFont('Lexend');
  textSize(35);
  text(myDescription, 40, 350);

  fill("#FEB596");
  textFont('Lexend');
  textSize(30);
  text(myText1, 40, 450);

  fill("#88CBDB");
  textFont('Lexend');
  textSize(30);
  text(myText2, 40, 530);




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
