var myFont;

function preload(){
    myFont=loadFont("NewFontGX.ttf");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    
    // Starting location
    x = 100;
    y = 100;
    // Dimensions
    w = 75;
    h = 50;
}

function draw(){
    text("Hello World", 30,40)
    textFont(myFont)
    fill(255,0,0)
}