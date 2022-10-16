var drawBitmoji;
var drawBunny;
var bitmojiX = (-20);
var bitmojiY = (180);
var bitmojiSpeed = random(1,5);
var bunnySpeed = random(1,5);
var bunnyX = (84);
var bunnyY = (176);
var eyeSize = 48;
var teethSize =46;
  



draw= function() {
   background(255, 0, 0);  
   var drawBitmoji = function(){

var bitmojiHeight = 200;
var x = random(10,300);
var y = random(10,300);
var drawHead = function(x,y,bitmojiHeight){
    //neck
stroke(0, 0, 0);
fill(232, 134, 65);
rect(x+76*bitmojiHeight/200,y+166*bitmojiHeight/200,49*bitmojiHeight/200,34*bitmojiHeight/200);

//Head

fill(232, 134, 65);
ellipse(x+100 * bitmojiHeight/200,y+100 * bitmojiHeight/200,140*bitmojiHeight/200,150*bitmojiHeight/200);
//Left Eye
fill(255, 255, 255);
ellipse(x+74*bitmojiHeight/200,y+80*bitmojiHeight/200,29*bitmojiHeight/200,21*bitmojiHeight/200);
//eye color
fill(17, 13, 224);
ellipse(x+74*bitmojiHeight/200,y+80*bitmojiHeight/200,11*bitmojiHeight/200,10*bitmojiHeight/200);
//pupil
fill(0, 0, 0);
ellipse(x+73*bitmojiHeight/200,y+80*bitmojiHeight/200,5*bitmojiHeight/200,-3*bitmojiHeight/200);
//Right eye
fill(255, 255, 255);
ellipse(x+128*bitmojiHeight/200,y+80*bitmojiHeight/200,29*bitmojiHeight/200,21*bitmojiHeight/200);
//eye color
fill(17, 13, 224);
ellipse(x+128*bitmojiHeight/200,y+80*bitmojiHeight/200,11*bitmojiHeight/200,10*bitmojiHeight/200);
//pupil
fill(0, 0, 0);
ellipse(x+128*bitmojiHeight/200,y+80*bitmojiHeight/200,5*bitmojiHeight/200,-3*bitmojiHeight/200);

//Nose
fill(232, 134, 65);
bezier(x+104*bitmojiHeight/200, y+126*bitmojiHeight/200, x+69*bitmojiHeight/200, y+125*bitmojiHeight/200, x+73*bitmojiHeight/200, y+126*bitmojiHeight/200, x+100*bitmojiHeight/200, y+103*bitmojiHeight/200);
fill(0, 0, 0);
ellipse(x+85*bitmojiHeight/200,y+123*bitmojiHeight/200,7*bitmojiHeight/200,3*bitmojiHeight/200);
//mouth
arc(x+100*bitmojiHeight/200,y+144*bitmojiHeight/200,57*bitmojiHeight/200,40*bitmojiHeight/200,0,180);
//hat
ellipse(x+181*bitmojiHeight/200,y+56*bitmojiHeight/200,115*bitmojiHeight/200,10*bitmojiHeight/200);
fill(247, 247, 247);
arc(x+100*bitmojiHeight/200,y+61*bitmojiHeight/200,130*bitmojiHeight/200,90*bitmojiHeight/200,181,361);
fill(0, 0, 0);
noStroke();
arc(x+70*bitmojiHeight/200,y+57*bitmojiHeight/200,53*bitmojiHeight/200,54*bitmojiHeight/200,181,361);

};
var drawBody = function(x,y,bitmojiHeight){
//shirt
fill(2, 79, 9);
rect(x-4*bitmojiHeight/200,y+200*bitmojiHeight/200,208*bitmojiHeight/200,137*bitmojiHeight/200,35*bitmojiHeight/200);
fill(3, 0, 0);
textSize(30*bitmojiHeight/200);
text("RB",x+82*bitmojiHeight/200,y+266*bitmojiHeight/200,209*bitmojiHeight/200,288*bitmojiHeight/200);
text("P", x+19*bitmojiHeight/200,y+255*bitmojiHeight/200);

return drawHead + drawBody;

};

return drawBitmoji;
   };




stroke(0, 0, 0);
fill(232, 134, 65);
rect(bitmojiX+76,bitmojiY+166,49,34);

//Head

fill(232, 134, 65);
ellipse(bitmojiX+100,bitmojiY+100,140,150);
//Left Eye
fill(255, 255, 255);
ellipse(bitmojiX+74,bitmojiY+80,29,21);
//eye color
fill(17, 13, 224);
ellipse(bitmojiX+74,bitmojiY+80,11,10);
//pupil
fill(0, 0, 0);
ellipse(bitmojiX+73,bitmojiY+80,5,-3);
//Right eye
fill(255, 255, 255);
ellipse(bitmojiX+128,bitmojiY+80,29,21);
//eye color
fill(17, 13, 224);
ellipse(bitmojiX+128,bitmojiY+80,11,10);
//pupil
fill(0, 0, 0);
ellipse(bitmojiX+128,bitmojiY+80,5,-3);

//Nose
fill(232, 134, 65);
bezier(bitmojiX+104, bitmojiY+126, bitmojiX+69, bitmojiY+125, bitmojiX+73, bitmojiY+126, bitmojiX+100, bitmojiY+103);
fill(0, 0, 0);
ellipse(bitmojiX+85,bitmojiY+123,7,3);
//mouth
arc(bitmojiX+100,bitmojiY+144,57,40,0,180);
//hat
ellipse(bitmojiX+181,bitmojiY+56,115,10);
fill(247, 247, 247);
arc(bitmojiX+100,bitmojiY+61,130,90,181,361);
fill(0, 0, 0);
noStroke();
arc(bitmojiX+70,bitmojiY+57,53,54,181,361);
//shirt
fill(2, 79, 9);
rect(bitmojiX-4,bitmojiY+200,208,137,35);
fill(3, 0, 0);
textSize(30);
text("RB",bitmojiX+82,bitmojiY+266,209,288);
text("P", bitmojiX+19,bitmojiY+255);


bitmojiX = bitmojiX + bitmojiSpeed;

stroke(0, 0, 0);
fill(247, 244, 244);
ellipse(bunnyX-40, bunnyY-130, 60, 120);  // left ear
ellipse(bunnyX+40, bunnyY-130, 60, 120);  // right ear

ellipse(bunnyX, bunnyY-30, 150, 150);    // face

fill(0, 0, 0);
ellipse(bunnyX-30, bunnyY-50, eyeSize,  eyeSize);  // left eye
ellipse(bunnyX+30, bunnyY-50,  eyeSize,  eyeSize);  // right eye

line(bunnyX-50, bunnyY, bunnyX+50, bunnyY);   // mouth

fill(255, 255, 255);
rect(bunnyX-15, bunnyY, 15, teethSize); // left tooth
rect(bunnyX, bunnyY, 15, teethSize); // right tooth
bunnyX= bunnyX + bunnySpeed;
};



mouseClicked = function(){
Program.restart();
};
