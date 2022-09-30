var x = random(30,310);
var y = random(10,200);

//neck
stroke(0, 0, 0);
fill(232, 134, 65);
rect(x+76,y+166,49,34);

//Head

fill(232, 134, 65);
ellipse(x+100,y+100,140,150);
//Left Eye
fill(255, 255, 255);
ellipse(x+74,y+80,29,21);
//eye color
fill(17, 13, 224);
ellipse(x+74,y+80,11,10);
//pupil
fill(0, 0, 0);
ellipse(x+73,y+80,5,-3);
//Right eye
fill(255, 255, 255);
ellipse(x+128,y+80,29,21);
//eye color
fill(17, 13, 224);
ellipse(x+128,y+80,11,10);
//pupil
fill(0, 0, 0);
ellipse(x+128,y+80,5,-3);

//Nose
fill(232, 134, 65);
bezier(x+104, y+126, x+69, y+125, x+73, y+126, x+100, y+103);
fill(0, 0, 0);
ellipse(x+85,y+123,7,3);
//mouth
arc(x+100,y+144,57,40,0,180);
//hat
ellipse(x+181,y+56,115,10);
fill(247, 247, 247);
arc(x+100,y+61,130,90,181,361);
fill(0, 0, 0);
noStroke();
arc(x+70,y+57,53,54,181,361);
//shirt
fill(2, 79, 9);
rect(x-4,y+200,208,137,35);
fill(3, 0, 0);
textSize(30);
text("RB",x+82,y+266,209,288);
text("P", x+19,y+255);

mouseClicked = function(){
Program.restart();
};
