let myImage;
let myLogo;
let myText1 = "Worthy sarà la tua guida in questo\nviaggio di crescita personale";
let myText2 = "Worthy guida l’utente in un percorso di crescita personale\nattraverso attività sul campo con l’obiettivo di renderlo\nconsapevole dei propri interessi e delle proprie capacità";
let myText3 = "   Worthy è";
let myText4 = "   Worthy è";
let myText5 = "    Worthy è";
let myText6 = "   Worthy è";
let myMockup;
let myBackground;
let myPratico;
let myCostruttivo;
let myAmichevole;
let mySociale;
let myDescription = "Mettiti in gioco e\nscopri il tuo potenziale";
let myValore1;
let myValore2;
let myValore3;
let myValore4;






function preload(){
myImage = loadImage("./assets/scimmia01.png");
myLogo = loadImage("./assets/logo-07.png");
myMockup = loadImage("./assets/Mockup.png");
myBackground = loadImage("./assets/sfondo2-06.png");
myAmichevole= loadImage("./assets/amichevole.png");
myPratico = loadImage("./assets/pratico.png");
myCostruttivo= loadImage("./assets/costruttivo.png");
mySociale= loadImage("./assets/sociale.png");
myValore1= loadImage("./assets/valore1.png");
myValore2= loadImage("./assets/valore2.png");
myValore3= loadImage("./assets/valore3.png");
myValore4= loadImage("./assets/valore4.png");
}

function setup() {
  createCanvas(windowWidth,6000);
  background(255,252,246);
  // put setup code here
}

function draw() {


  fill("#1F2849");
  textFont('Lexend');
  textSize(40);
  text(myDescription, 40, 290);

  fill("#FEB596");
  textFont('Lexend');
  textSize(35);
  text(myText1, 40, 390);

  fill("#1F2849");
  textFont('Lexend');
  textSize(25);
  text(myText2, 40, 690);


  fill("#1F2849");
  textFont('Lexend');
  textSize(35);
  text(myText3, 100, 1300);


  fill("#1F2849");
  textFont('Lexend');
  textSize(35);
  text(myText4, 520, 1300);


  fill("#1F2849");
  textFont('Lexend');
  textSize(35);
  text(myText5, 970, 1300);

  fill("#1F2849");
  textFont('Lexend');
  textSize(35);
  text(myText6, 1350, 1300);












imageMode(CENTER);

//images

image(myLogo,140, 80,200, 63);
image (myImage,330,100, 200 ,249);
image (myBackground,windowWidth/2 + 200, 500, 1333, 1000);
image (myMockup,windowWidth/2 + 400, 500, 1333, 1000);
image (myAmichevole,200,1130, 400 ,336);
image (myPratico, 620,1100, 400 ,327);
image (myCostruttivo,1040,1100, 400 ,355);
image (mySociale,1460, 1100, 400 ,397);
image (myValore1, 200, 1340, 260,77 );
image (myValore2, 630, 1340, 260,77 );
image (myValore3, 1090, 1340, 260,77 );
image (myValore4, 1450, 1340, 260,77 );




//buttons
buttonHome = createButton("Home");
buttonHome.position(windowWidth/4, windowHeight/13);
buttonUtente = createButton("Utente");
buttonUtente.position(windowWidth/3, windowHeight/13);
buttonEnte = createButton("Ente");
buttonEnte.position(windowWidth/3+150, windowHeight/13) ;







}
