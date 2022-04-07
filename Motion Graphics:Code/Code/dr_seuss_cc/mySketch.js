let grass;
let trees;
let pg;
let pg2;
let tick=true;
const startTimer = 120
let secs = startTimer;
let frames = 60;
let alpha=255;
let sceneTracker=1;
let gif_loadIntro, gif_createIntro;
let gif_loadContinued, gif_createContinued;
let vid, vid2;


function preload() {
  fRoboto = loadFont('https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf');
  girl= loadImage('girl.png');
  hump = loadImage('hump.png');
  trees = loadModel('tree_3d.obj');
  elephant= loadImage('elephant.png');
  balloon= loadImage('balloon.png');
  things= loadImage('dr_seuss_things.png');
  cat = loadImage('dr_seuss_cat.png');
  
vid=createVideo('intro_continued.mp4',vidLoad);
vid.hide();
vid2=createVideo('intro.mp4',vidLoad);
vid2.hide();

}

function vidLoad() { // callback for my videos
vid.loop();
vid.volume(0);
}


let cols, rows; // colums and rows for building my grid
let scale = 20; // my constant
let w = 1400; // I fill more than the screen size because of how the 3d rendering functions with 2d drawings
let h = 1400;

let flying = 0; // my variable for the flying illusion

let terrain = []; // my array that will nest  2 more arrays within it

function setup() {
  createCanvas(800, 800, WEBGL); // set 800x800 window size to converse performance on all devices when rendering WEB GL
  frameRate(frames);
sceneTracker=0;
  cols = w / scale;
  rows = h / scale;




}

//initial cam position
// this 3d Terrain Simulator is based off Dan Shiffman's Coding Challenge #11 in Processing
// All code needed to be translated in p5js, and I wanted this to act as a solid foundation for texturing the terrain to fit Dr Seuss images.
// link:https://www.youtube.com/watch?v=IKB1hWWedMk

function draw() {
image(vid,-410,-390); // my intro video
//console.log(sceneTracker);
textFont(fRoboto);
textSize(15);
textAlign(LEFT,LEFT);
text('click to proceed :)',-250,0); // text to guide


  if(sceneTracker >= 2) { // scene manager
refresh();

if(tick=false) { // one loop
tick=true;
image.remove();
refresh(); // function at bottom
 
}
vid.hide();
landscape(); // my main terrain



}





}


function landscape() {

background(11,13,250);
flying-=0.1;


  stroke(0,0);
  fill(23,alpha,23);
  rotateX(PI/2.3); // my rotation of 60 degrees 
  translate(-w/2,-h/2); // moving my canvas to fit the grid fully

  let yoff=flying;
for(let y=0; y < rows; y++) { 
let xoff = 0; 
  terrain[y]=[];
for(let x=0; x < cols; x++) {
 

  terrain[y][x]= map(noise(xoff,yoff),0,1,-5,70); // my noise function essentially will help my terrain look more "organic" as one random value will be surrounded by related value and so forth.
  alpha=map(terrain[y][x],-5,50,180,250);
xoff += 0.1; // to make my perlin noise values more structued, i make a xoff and yoff values to help structure the terrain consistently
}
yoff += 0.1;
}

  for(let y=0; y < rows-1; y++) { // double for loops for rows and columns
    
      beginShape(TRIANGLE_STRIP); // theses 2 for loops create a perfect grid
    
  for(let x=0; x < cols; x++) {

  



    if(terrain[y][x]>=48) {


push();
ambientLight(255);
noStroke();
translate(-300,-300,0);
translate(x*scale,y*scale,-terrain[y][x]);
rotateY(250);
rotateZ(300);

if(terrain[y][x]>=40) { // my balloons in the distance!
push();
translate(x*scale+15,y*scale+20, terrain[y][x]+2);
translate(100,100);
rotateX(18);
rotateY(-20);
rotateZ(-350);
texture(balloon);
plane(balloon.width-800, balloon.height-800);
pop();

}
if(terrain[y][x]>=60) {
push();
texture(elephant);
rotateY(-180);
rotateX(10);
translate(-280,100,300);
plane(elephant.width-500,elephant.height-500);
pop();
}


if(terrain[y][x]>=52) { // my tree colors!
ambientMaterial(255,245,111); // lorax tree colors!
  } else {
ambientMaterial(242,111,119);
}
model(trees);
pop();

}
      vertex(x*scale,y*scale, terrain[y][x]); // first variable is x and y, third is Z which will generate the "terrain" or mountains thanks to a random value
      vertex(x*scale,(y+1)*scale,terrain[y+1][x]);



    }


endShape();
  }







}

  

function mousePressed() {
  sceneTracker++;
  tick=false;


}

function refresh() {
clear(); // allows my ballons to pop up!

}



