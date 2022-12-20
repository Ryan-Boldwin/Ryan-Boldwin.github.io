background(194, 186, 186);
var currentScene = 0;
// Bitmoji saying after element clicked 
var bitmojiSpeak = ["Wow!", "Cool!", "Sweet!", "Awesome!"];
//Variable to make speech random
var newSpeak = floor(random() * bitmojiSpeak.length);
//Bitmoji function
var drawBitmoji = function(x,y,bitmojiHeight){ //neck
    stroke(0, 0, 0);
    fill(232, 134, 65);
    rect(x+76*bitmojiHeight/200,y+166*bitmojiHeight/200,49*bitmojiHeight/200,34*bitmojiHeight/200);

//Head

    fill(232, 134, 65);
    ellipse(x+100 * bitmojiHeight/200,y+100 * bitmojiHeight/200,140*bitmojiHeight/200,150   *bitmojiHeight/200);
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
    
    //shirt
    fill(2, 79, 9);
    rect(x-4*bitmojiHeight/200,y+200*bitmojiHeight/200,208*bitmojiHeight/200,137*bitmojiHeight/200,35*bitmojiHeight/200);
    };
//Array with element information
var elementInfo = [
//0
{
    name: "Hydrogen",
    atomicMass: "1.0080",
    electroNegativity: " 2.2",
    atomicRadius: "120"
 }, 
//1 = lithium
{
    name: "Lithium",
    atomicMass: "7.0000",
    electroNegativity: " 0.98",
    atomicRadius: "182"
 },
//2 = Sodium
{
    name: "Sodium",
    atomicMass: "22.9897693",
    electroNegativity: " 0.93",
    atomicRadius: "227"
 },
//3 = Potassium
{
    name: "Potassium",
    atomicMass: "39.0983",
    electroNegativity: " 0.82",
    atomicRadius: "275"
 },
//4 = Rubidium
{
    name: "Rubidium",
    atomicMass: "85.468",
    electroNegativity: " 0.82",
    atomicRadius: "303"
 }, 
//5 = Cesium
{
    name: "Cesium",
    atomicMass: "132.9054520",
    electroNegativity: " .79",
    atomicRadius: "343"
 }, 
//6 = Francium
{
    name: "Francium",
    atomicMass: "223.01973",
    electroNegativity: " .7",
    atomicRadius: "348"
 }, 
//7 = Beryllium
{
    name: "Beryllium",
    atomicMass: "9.012183",
    electroNegativity: " 1.57",
    atomicRadius: "153"
 }, 
//8 = Magnesium
{
    name: "Magnesium",
    atomicMass: "25.305",
    electroNegativity: " 1.31",
    atomicRadius: "173"
 }, 
//9 = Calcium
{
    name: "Calcium",
    atomicMass: "40.08",
    electroNegativity: " 1.0",
    atomicRadius: "231"
 }, 
//10 = Strontium
{
    name: "Strontium",
    atomicMass: "87.62",
    electroNegativity: " 0.95",
    atomicRadius: "249"
 }, 
//11 = Barium
 {
    name: "Barium",
    atomicMass: "137.33",
    electroNegativity: " 0.89",
    atomicRadius: "268"
 },
//12 = Radium
 {
    name: "Radium",
    atomicMass: "226.02541",
    electroNegativity: " 0.9",
    atomicRadius: "283"
 }, 
//13 = Scandium
 {
    name: "Scandium",
    atomicMass: "44.95591",
    electroNegativity: " 1.36",
    atomicRadius: "211"
 }, 
// 14 = Yttrium
 {
    name: "Yttrium",
    atomicMass: "88.90584",
    electroNegativity: " 1.22",
    atomicRadius: "219"
 },
//15 = Titanium
 {
    name: "Titanium",
    atomicMass: "47.867",
    electroNegativity: " 1.54",
    atomicRadius: "187"
 }, 
//16 = Zirconium
 {
    name: "Zirconium",
    atomicMass: "91.22",
    electroNegativity: " 1.33",
    atomicRadius: "186"
 }, 
//17 = Hafnium
{
    name: "Hafnium",
    atomicMass: "178.49",
    electroNegativity: " 1.3",
    atomicRadius: "212"
 }, 
//18 = Rutherfordium
 {
    name: "Rutherfordium",
    atomicMass: "267.122",
    electroNegativity: " N/A",
    atomicRadius: "N/A"
 }, 
//19 = Vanadium
 {
    name: "Vanadium",
    atomicMass: "50.9415",
    electroNegativity: " 1.63",
    atomicRadius: "179"
 }, 
//20 = Niobium
 {
    name: "Niobium",
    atomicMass: "92.90637",
    electroNegativity: " 1.6",
    atomicRadius: "207"
 }, 
//21 = tantalum
 {
    name: "Tantalum",
    atomicMass: "180.9479",
    electroNegativity: " 1.5",
    atomicRadius: "217"
 },
//22 = Dubnium
 {
    name: "Dubnium",
    atomicMass: "268.126",
    electroNegativity: " N/A",
    atomicRadius: "N/A"
 },
//23 = Chromium
 {
    name: "Chromium",
    atomicMass: "51.996",
    electroNegativity: " 1.66",
    atomicRadius: "189"
 },
//24 = Molybdenum
 {
    name: "Molybdenum",
    atomicMass: "95.95",
    electroNegativity: " 2.16",
    atomicRadius: "209"
 }, 
//25 = Tungsten
 {
    name: "Tungsten",
    atomicMass: "183.84",
    electroNegativity: " 2.36",
    atomicRadius: "210"
 },
//26 = Seaborgium
 {
    name: "Seaborgium",
    atomicMass: "269.128",
    electroNegativity: " N/A",
    atomicRadius: "N/A"
 }, 
// 27 = Manganese
 {
    name: "Manganese",
    atomicMass: "54.93804",
    electroNegativity: " 1.55",
    atomicRadius: "197"
 },
//28 = Technetium
 {
    name: "Technetium",
    atomicMass: "96.90636",
    electroNegativity: " 1.9",
    atomicRadius: "209"
 },
//29 = Rhenium
 {
    name: "Rhenium",
    atomicMass: "186.207",
    electroNegativity: " 1.9",
    atomicRadius: "217"
 },
//30 = Bohrium
 {
    name: "Bohrium",
    atomicMass: "270.133",
    electroNegativity: " N/A",
    atomicRadius: "N/A"
 },
//31 = Iron
 {
    name: "Iron",
    atomicMass: "55.84",
    electroNegativity: " 1.83",
    atomicRadius: "194"
 },
//32 = Ruthenium
 {
    name: "Ruthenium",
    atomicMass: "101.1",
    electroNegativity: " 2.2",
    atomicRadius: "207"
 },
//33 = Osmium
 {
    name: "Osmium",
    atomicMass: "190.2",
    electroNegativity: " 2.2",
    atomicRadius: "216"
 },
//34 = Hassium
 {
    name: "Hassium",
    atomicMass: "269.1336",
    electroNegativity: " N/A",
    atomicRadius: "N/A"
 },
//35 = Cobalt
 {
    name: "Cobalt",
    atomicMass: "58.93319",
    electroNegativity: " 1.88",
    atomicRadius: "192"
 },
//36= Rhodium
 {
    name: "Rhodium",
    atomicMass: "102.9055",
    electroNegativity: " 2.28",
    atomicRadius: "195"
 },
//37 = Iridium
 {
    name: "Iridium",
    atomicMass: "192.22",
    electroNegativity: " 2.2",
    atomicRadius: "202"
 },
//38 = Meitnerium
 {
    name: "Meitnerium",
    atomicMass: "277.154",
    electroNegativity: " N/A",
    atomicRadius: "N/A"
 },
//39 = Nickel
 {
    name: "Nickel",
    atomicMass: "58.693",
    electroNegativity: " 1.91",
    atomicRadius: "163"
 },
//40 = Palladium
 {
    name: "Palladium",
    atomicMass: "106.42",
    electroNegativity: " 2.2",
    atomicRadius: "202"
 },
//41 = Platinum
 {
    name: "Platinum",
    atomicMass: "195.08",
    electroNegativity: " 2.28",
    atomicRadius: "209"
 },
//42 = Darmstadtium
 {
    name: "Darmstadtium",
    atomicMass: "282.166",
    electroNegativity: " N/A",
    atomicRadius: "N/A"
 },
//43 = Copper
 {
    name: "Copper",
    atomicMass: "63.55",
    electroNegativity: " 1.9",
    atomicRadius: "140"
 },
//44 = Silver
 {
    name: "Silver",
    atomicMass: "107.868",
    electroNegativity: " 1.93",
    atomicRadius: "172"
 },
//45 = Gold
 {
    name: "Gold",
    atomicMass: "196.96657",
    electroNegativity: " 2.54",
    atomicRadius: "166"
 },
//46 = Roentgenium
 {
    name: "Roentgenium",
    atomicMass: "282.169",
    electroNegativity: " N/A",
    atomicRadius: "N/A"
 },
//47 = Zinc
 {
    name: "Zinc",
    atomicMass: "65.4",
    electroNegativity: " 1.65",
    atomicRadius: "139"
 },
//48 = Cadmium
 {
    name: "Cadmium",
    atomicMass: "112.41",
    electroNegativity: " 1.69",
    atomicRadius: "158"
 },
//49 = Mercury
 {
    name: "Mercury",
    atomicMass: "200.59",
    electroNegativity: " 2",
    atomicRadius: "209"
 },
//50 = Copernicium 
 {
    name: "Copernicium",
    atomicMass: "286.179",
    electroNegativity: " N/A",
    atomicRadius: "N/A"
 },
//51 = Boron
 {
    name: "Boron",
    atomicMass: "10.81",
    electroNegativity: " 2.04",
    atomicRadius: "192"
 },
//52 = Aluminum
 {
    name: "Aluminum",
    atomicMass: "26.981538",
    electroNegativity: " 1.61",
    atomicRadius: "184"
 },
//53 = Gallium
 {
    name: "Gallium",
    atomicMass: "69.723",
    electroNegativity: " 1.81",
    atomicRadius: "187"
 },
//54 = Indium
 {
    name: "Indium",
    atomicMass: "114.818",
    electroNegativity: " 1.78",
    atomicRadius: "193"
 },
//55 = Thallium
 {
    name: "Thallium",
    atomicMass: "204.383",
    electroNegativity: " 1.62",
    atomicRadius: "196"
 },
//56 = Nihonium 
 {
    name: "Nihonium",
    atomicMass: "286.182",
    electroNegativity: " N/A",
    atomicRadius: "N/A"
 },
//57 = Carbon
 {
    name: "Carbon",
    atomicMass: "12.011",
    electroNegativity: " 2.55",
    atomicRadius: "170"
 },
//58 = Silicon
 {
    name: "Silicon",
    atomicMass: "28.085",
    electroNegativity: " 1.9",
    atomicRadius: "210"
 },
//59 = Germanium
 {
    name: "Germanium",
    atomicMass: "72.63",
    electroNegativity: " 2.01",
    atomicRadius: "211"
 },
//60 = Tin
 {
    name: "Tin",
    atomicMass: "118.71",
    electroNegativity: " 1.96",
    atomicRadius: "217"
 },
// 61 = Lead
 {
    name: "Lead",
    atomicMass: "207",
    electroNegativity: " 2.33",
    atomicRadius: "202"
 },
//62 = Flerovium
 {
    name: "Flerovium",
    atomicMass: "290.192",
    electroNegativity: " N/A",
    atomicRadius: "N/A"
 },
//63 = Nitrogen
 {
    name: "Nitrogen",
    atomicMass: "14.007",
    electroNegativity: " 3.04",
    atomicRadius: "155"
 },
//64 = Phosphorus
 {
    name: "Phosphorus",
    atomicMass: "30.973762",
    electroNegativity: " 2.19",
    atomicRadius: "180"
 },
//65 = Arsenic
 {
    name: "Arsenic",
    atomicMass: "74.92159",
    electroNegativity: " 2.18",
    atomicRadius: "185"
 },
//66 = Antimony
 {
    name: "Antimony",
    atomicMass: "121.760",
    electroNegativity: " 2.05",
    atomicRadius: "206"
 },
//67 = Bismuth
 {
    name: "Bismuth",
    atomicMass: "208.98040",
    electroNegativity: " 2.02",
    atomicRadius: "207"
 },
//68 = Moscovium
 {
    name: "Moscovium",
    atomicMass: "290.296",
    electroNegativity: " N/A",
    atomicRadius: "N/A"
 },
//69 = Oxygen
 {
    name: "Oxygen",
    atomicMass: "15.999",
    electroNegativity: " 3.44",
    atomicRadius: "159"
 },
//70 = Sulfur
 {
    name: "Sulfur",
    atomicMass: "32.07",
    electroNegativity: " 2.58",
    atomicRadius: "180"
 },
// 71 = Selenium
 {
    name: "Selenium",
    atomicMass: "78.97",
    electroNegativity: " 2.55",
    atomicRadius: "190"
 },
//72 = Tellerium
 {
    name: "Tellerium",
    atomicMass: "127.6",
    electroNegativity: " 2.1",
    atomicRadius: "206"
 },
//73 = Polonium
 {
    name: "Polonium",
    atomicMass: "208.98243",
    electroNegativity: " 2",
    atomicRadius: "197"
 },
//74 = Livermorium
 {
    name: "Livermorium",
    atomicMass: "293.205",
    electroNegativity: " N/A",
    atomicRadius: "N/A"
 },
//75 = Flourine
 {
    name: "Flourine",
    atomicMass: "18.9984",
    electroNegativity: " 3.98",
    atomicRadius: "135"
 },
//76 = Chlorine
 {
    name: "Chlorine",
    atomicMass: "35.45",
    electroNegativity: " 3.16",
    atomicRadius: "175"
 },
//77 = Bromine
 {
    name: "Bromine",
    atomicMass: "79.90",
    electroNegativity: " 2.96",
    atomicRadius: "183"
 },
//78 = Iodine
 {
    name: "Iodine",
    atomicMass: "126.9045",
    electroNegativity: " 2.66",
    atomicRadius: "198"
 },
//79 = Astatine
 {
    name: "Astatine",
    atomicMass: "209.98715",
    electroNegativity: " 2.2",
    atomicRadius: "202"
 },
//80 = Tennessine
 {
    name: "Tennessine",
    atomicMass: "294.211",
    electroNegativity: " N/A",
    atomicRadius: "N/A"
 },
//81 = Helium
 {
    name: "Helium",
    atomicMass: "4.0026",
    electroNegativity: " N/A",
    atomicRadius: "140"
 },
//82 = Neon
 {
    name: "Neon",
    atomicMass: "20.180",
    electroNegativity: " N/A",
    atomicRadius: "154"
 },
//83 = Argon
 {
    name: "Argon",
    atomicMass: "39.9",
    electroNegativity: " N/A",
    atomicRadius: "188"
 },
//84 = Krypton
 {
    name: "Krypton",
    atomicMass: "83.80",
    electroNegativity: " 3",
    atomicRadius: "202"
 },
//85 = Xenon
 {
    name: "Xenon",
    atomicMass: "131.29",
    electroNegativity: " 2.6",
    atomicRadius: "216"
 },
//86 = Radon
 {
    name: "Radon",
    atomicMass: "222.01758",
    electroNegativity: " N/A",
    atomicRadius: "220"
 },
//87 = Oganesson
 {
    name: "Oganesson",
    atomicMass: "295.216",
    electroNegativity: " N/A",
    atomicRadius: "N/A"
 },
//88 = Lanthanum
 {
    name: "Lanthanum",
    atomicMass: "138.9055",
    electroNegativity: " 1.1",
    atomicRadius: "240"
 },
//89 = Actinium
 {
    name: "Actinium",
    atomicMass: "227.02775",
    electroNegativity: " 1.1",
    atomicRadius: "260"
 },
//90 = Cerium
 {
    name: "Cerium",
    atomicMass: "140.116",
    electroNegativity: " 1.12",
    atomicRadius: "235"
 },
//91 = Thorium
 {
    name: "Thorium",
    atomicMass: "232.038",
    electroNegativity: " 1.3",
    atomicRadius: "237"
 },
//92 = Praseodymium
 {
    name: "Praseodymium",
    atomicMass: "140.90766",
    electroNegativity: " 1.13",
    atomicRadius: "239"
 },
//93 = Protactinium
 {
    name: "Protactinium",
    atomicMass: "231.03588",
    electroNegativity: " 1.5",
    atomicRadius: "243"
 },
//94 = Neodymium
  {
    name: "Neodymium",
    atomicMass: "144.24",
    electroNegativity: " 1.14",
    atomicRadius: "229"
 },
//95 = Uranium
  {
    name: "Uranium",
    atomicMass: "238.0289",
    electroNegativity: " 1.38",
    atomicRadius: "240"
 },
//96 = Promethium
  {
    name: "Promethium",
    atomicMass: "144.91276",
    electroNegativity: " N/A",
    atomicRadius: "236"
 },
//97 = Neptunium
  {
    name: "Neptunium",
    atomicMass: "237.048172",
    electroNegativity: " 1.36",
    atomicRadius: "221"
 },
//98 = Samarium
  {
    name: "Samarium",
    atomicMass: "150.4",
    electroNegativity: " 1.17",
    atomicRadius: "229"
 },
//99 = Plutonium
  {
    name: "Plutonium",
    atomicMass: "244.06420",
    electroNegativity: " 1.28",
    atomicRadius: "243"
 },
//100 = Europium
  {
    name: "Europium",
    atomicMass: "151.964",
    electroNegativity: " N/A",
    atomicRadius: "233"
 },
//101 = Americium
  {
    name: "Americium",
    atomicMass: "243.061380",
    electroNegativity: " 1.3",
    atomicRadius: "244"
 },
//102 = Gadolinium
  {
    name: "Gadolinium",
    atomicMass: "157.2",
    electroNegativity: " 1.2",
    atomicRadius: "237"
 },
//103 = Curium
  {
    name: "Curium",
    atomicMass: "247.07035",
    electroNegativity: " 1.3",
    atomicRadius: "245"
 },
//104 = Terbium
  {
    name: "Terbium",
    atomicMass: "158.92535",
    electroNegativity: " N/A",
    atomicRadius: "221"
 },
//105 = Berkelium 
  {
    name: "Berkelium",
    atomicMass: "247.07031",
    electroNegativity: " 1.3",
    atomicRadius: "244"
 },
//106 = Dysprosium
  {
    name: "Dysprosium",
    atomicMass: "162.500",
    electroNegativity: " 1.22",
    atomicRadius: "229"
 },
//107 = Californium
  {
    name: "Californium",
    atomicMass: "251.07959",
    electroNegativity: " 1.3",
    atomicRadius: "245"
 },
//108 = Holmium
  {
    name: "Holmium",
    atomicMass: "164.93033",
    electroNegativity: " 1.23",
    atomicRadius: "216"
 },
//109 = Einsteinium
  {
    name: "Einsteinium",
    atomicMass: "252.0830",
    electroNegativity: " 1.3",
    atomicRadius: "245"
 },
//110 = Erbium
  {
    name: "Erbium",
    atomicMass: "167.26",
    electroNegativity: " 1.24",
    atomicRadius: "235"
 },
//111 = Fermium
  {
    name: "Fermium",
    atomicMass: "257.09511",
    electroNegativity: " 1.3",
    atomicRadius: "N/A"
 },
//112 = Thulium
  {
    name: "Thulium",
    atomicMass: "168.93422",
    electroNegativity: " 1.25",
    atomicRadius: "227"
 },
//113 = Mendelevium
  {
    name: "Mendelevium",
    atomicMass: "258.09843",
    electroNegativity: " 1.3",
    atomicRadius: "N/A"
 },
//114 = Ytterbium
  {
    name: "Ytterbium",
    atomicMass: "173.05",
    electroNegativity: " N/A",
    atomicRadius: "242"
 },
//115 = Nobelium
  {
    name: "Nobelium",
    atomicMass: "259.101",
    electroNegativity: " 1.3",
    atomicRadius: "N/A"
 },
//116 = Lutetiem
  {
    name: "Lutetium",
    atomicMass: "174.9668",
    electroNegativity: " 1.27",
    atomicRadius: "221"
 },
//117 = Lawrencium 
  {
    name: "Lawrencium",
    atomicMass: "266.120",
    electroNegativity: " 1.3",
    atomicRadius: "N/A"
 },
    ];
//Function to call specific element
var showElement = function(elementInfo){
    fill(255, 255, 255);
    rect(0,300,500,200);
    fill(0, 0, 0);
    textSize(13);
    text("Name: " + elementInfo.name, 58,320);
    text("Atomic Mass: " + elementInfo.atomicMass + " g", 75,360);
    text(" Electronegativity: " + elementInfo.electroNegativity, 360,320);
    text(" Atomic Radius: " + elementInfo.atomicRadius + "pm", 362,360);
    
    
};
//Button Class
var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.currentColor = config.currentColor;
    this.onClick = config.onClick || function() {};
};
//Draw Method for Button Class
Button.prototype.draw = function() {
    fill(this.currentColor);
    rect(this.x, this.y, 22, 22, 5);
    fill(0, 0, 0);
    textSize(12);
    textAlign(CENTER, TOP);
    text(this.label, this.x+10, this.y+this.height/4);
};
Button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};
//Mouse click 
Button.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};
var Button2 = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.currentColor = config.currentColor;
    this.onClick = config.onClick || function() {};
};
//Draw Method for Button Class
Button2.prototype.draw = function() {
    fill(this.currentColor);
    rect(this.x, this.y, 147, 47, 5);
    fill(0, 0, 0);
    textSize(47);
    textAlign(CENTER, TOP);
    text(this.label, this.x+68, this.y+this.height/40 -5);
};
Button2.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};
//Mouse click 
Button2.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};
//Periodic Table Page
var drawScene1 = function(){
currentScene = 1;
};
//Hydrogen
var btn1 = new Button({
    x: 1,
    y: 10,
    height: 22,
    width: 22,
    label: "H",
    currentColor: color(245, 245, 76),
    onClick: function() { 
        showElement(elementInfo[0]);
    }

});
//Lithium
var btn2 = new Button({
    x: 1,
    y: 35,
    height: 22,
    width: 22,
    label: "Li",
    currentColor: color(230, 78, 121),
    onClick: function() { 
    showElement(elementInfo[1]);
    }

});
//Sodium
var btn3 = new Button({
    x: 1,
    y: 60,
    height: 25,
    width: 25,
    label: "Na",
    currentColor: color(230, 78, 121),
    onClick: function() {
        showElement(elementInfo[2]);
        
    }

});
//Potassium
var btn4 = new Button({
    x: 1,
    y: 85,
    height: 25,
    width: 25,
    label: "K",
    currentColor: color(230, 78, 121),
    onClick: function() {
        showElement(elementInfo[3]);
        }

});
// Rubidium
var btn5 = new Button({
    x: 1,
    y: 110,
    height: 25,
    width: 25,
    label: "Rb",
    currentColor: color(230, 78, 121),
    onClick: function() { 
        showElement(elementInfo[4]);
    }

});
//Cesium
var btn6 = new Button({
    x: 1,
    y: 135,
    height: 25,
    width: 25,
    label: "Cs",
    currentColor: color(230, 78, 121),
    onClick: function() { 
        showElement(elementInfo[5]);
    }

});
//Francium
var btn7 = new Button({
    x: 1,
    y: 160,
    height: 25,
    width: 25,
    label: "Fr",
    currentColor: color(230, 78, 121),
    onClick: function() { 
        showElement(elementInfo[6]);
        
    }

});
//Lanthanum
var btn8 = new Button({
    x: 25,
    y: 229,
    height: 25,
    width: 25,
    label: "La",
    currentColor: color(116, 209, 219),
    onClick: function() {
        showElement(elementInfo[88]);
        
    }

});
//Actinum
var btn9 = new Button({
    x: 25,
    y: 254,
    height: 25,
    width: 25,
    label: "Ac",
    currentColor: color(78, 185, 230),
    onClick: function() { 
        showElement(elementInfo[89]);
    
    }

});
//Thorium
var btn10 = new Button({
    x: 50,
    y: 254,
    height: 25,
    width: 25,
    label: "Th",
    currentColor: color(78, 185, 230),
    onClick: function() {
        showElement(elementInfo[91]);
        
    }

});
//Protactinum
var btn11 = new Button({
    x: 75,
    y: 254,
    height: 25,
    width: 25,
    label: "Pa",
    currentColor: color(78, 185, 230),
    onClick: function() {
        showElement(elementInfo[93]);
        
    }

});
//Uranium
var btn12 = new Button({
    x: 100,
    y: 254,
    height: 25,
    width: 25,
    label: "U",
    currentColor: color(78, 185, 230),
    onClick: function() { 
        showElement(elementInfo[95]);
        
    }

});
//Neptunium
var btn13 = new Button({
    x: 125,
    y: 254,
    height: 25,
    width: 25,
    label: "Np",
    currentColor: color(78, 185, 230),
    onClick: function() {
        showElement(elementInfo[97]);
        
    }

});
//Plutonium
var btn14 = new Button({
    x: 150,
    y: 254,
    height: 25,
    width: 25,
    label: "Pu",
    currentColor: color(78, 185, 230),
    onClick: function() {
        showElement(elementInfo[99]);
        
    }

});
//Americum
var btn15 = new Button({
    x: 175,
    y: 254,
    height: 25,
    width: 25,
    label: "Am",
    currentColor: color(78, 185, 230),
    onClick: function() {
        showElement(elementInfo[101]);
        
    }

});
//Curium
var btn16 = new Button({
    x: 200,
    y: 254,
    height: 25,
    width: 25,
    label: "Cm",
    currentColor: color(78, 185, 230),
    onClick: function() { 
        showElement(elementInfo[103]);
    }

});
//Berkelium
var btn17 = new Button({
    x: 225,
    y: 254,
    height: 25,
    width: 25,
    label: "Bk",
    currentColor: color(78, 185, 230),
    onClick: function() { 
        showElement(elementInfo[105]);
    }

});
//Californium
var btn18 = new Button({
    x: 250,
    y: 254,
    height: 25,
    width: 25,
    label: "Cf",
    currentColor: color(78, 185, 230),
    onClick: function() { 
        showElement(elementInfo[107]);
    }

});
//Einsteinium
var btn19 = new Button({
    x: 275,
    y: 254,
    height: 25,
    width: 25,
    label: "Es",
    currentColor: color(78, 185, 230),
    onClick: function() { 
        showElement(elementInfo[109]);
    }

});
//Fermium
var btn20 = new Button({
    x: 300,
    y: 254,
    height: 25,
    width: 25,
    label: "Fm",
    currentColor: color(78, 185, 230),
    onClick: function() { 
        showElement(elementInfo[111]);
    }

});
//Mendelevium
var btn21 = new Button({
    x: 325,
    y: 254,
    height: 25,
    width: 25,
    label: "Md",
    currentColor: color(78, 185, 230),
    onClick: function() { 
        showElement(elementInfo[113]);
    }

});
//Nobelium
var btn22 = new Button({
    x: 350,
    y: 254,
    height: 25,
    width: 25,
    label: "No",
    currentColor: color(78, 185, 230),
    onClick: function() {
        showElement(elementInfo[115]);}

});
//Lawrencium
var btn23 = new Button({
    x: 375,
    y: 254,
    height: 25,
    width: 25,
    label: "Lr",
    currentColor: color(78, 185, 230),
    onClick: function() { 
        showElement(elementInfo[117]);
    }

});
//Cerium
var btn24 = new Button({
    x: 50,
    y: 229,
    height: 25,
    width: 25,
    label: "Ce",
    currentColor: color(116, 209, 219),
    onClick: function() { 
        showElement(elementInfo[90]);
    }

});
//Praseodymium
var btn25 = new Button({
    x: 75,
    y: 229,
    height: 25,
    width: 25,
    label: "Pr",
    currentColor: color(116, 209, 219),
    onClick: function() { showElement(elementInfo[92]);}

});
//Neodymium
var btn26 = new Button({
    x: 100,
    y: 229,
    height: 25,
    width: 25,
    label: "Nd",
    currentColor: color(116, 209, 219),
    onClick: function() { 
        showElement(elementInfo[94]);
    }

});
//Promethium
var btn27 = new Button({
    x: 125,
    y: 229,
    height: 25,
    width: 25,
    label: "Pm",
    currentColor: color(116, 209, 219),
    onClick: function() { 
        showElement(elementInfo[96]);
    }

});
//Samarium
var btn28 = new Button({
    x: 150,
    y: 229,
    height: 25,
    width: 25,
    label: "Sm",
    currentColor: color(116, 209, 219),
    onClick: function() { 
        showElement(elementInfo[98]);
    }

});
//Europium
var btn29 = new Button({
    x: 175,
    y: 229,
    height: 25,
    width: 25,
    label: "Eu",
    currentColor: color(116, 209, 219),
    onClick: function() { 
        showElement(elementInfo[100]);
    }

});
//Gadolinium
var btn30 = new Button({
    x: 200,
    y: 229,
    height: 25,
    width: 25,
    label: "Gd",
    currentColor: color(116, 209, 219),
    onClick: function() { 
        showElement(elementInfo[102]);
    }

});
//Terbium
var btn31 = new Button({
    x: 225,
    y: 229,
    height: 25,
    width: 25,
    label: "Tb",
    currentColor: color(116, 209, 219),
    onClick: function() { 
        showElement(elementInfo[104]);
    }

});
//Dysprosium
var btn32 = new Button({
    x: 250,
    y: 229,
    height: 25,
    width: 25,
    label: "Dy",
    currentColor: color(116, 209, 219),
    onClick: function() { 
        showElement(elementInfo[106]);
    }

});
//Holmium
var btn33 = new Button({
    x: 275,
    y: 229,
    height: 25,
    width: 25,
    label: "Ho",
    currentColor: color(116, 209, 219),
    onClick: function() { 
        showElement(elementInfo[108]);
    }

});
//Erbium
var btn34 = new Button({
    x: 300,
    y: 229,
    height: 25,
    width: 25,
    label: "Er",
    currentColor: color(116, 209, 219),
    onClick: function() { 
        showElement(elementInfo[110]);
    }

});
//Thulium
var btn35 = new Button({
    x: 325,
    y: 229,
    height: 25,
    width: 25,
    label: "Tm",
    currentColor: color(116, 209, 219),
    onClick: function() { 
        showElement(elementInfo[112]);
    }

});
//Ytterbium
var btn36 = new Button({
    x: 350,
    y: 229,
    height: 25,
    width: 25,
    label: "Yb",
    currentColor: color(116, 209, 219),
    onClick: function() { 
        showElement(elementInfo[114]);
    }

});
//Lutetium
var btn37 = new Button({
    x: 375,
    y: 229,
    height: 25,
    width: 25,
    label: "Lu",
    currentColor: color(116, 209, 219),
    onClick: function() { 
        showElement(elementInfo[116]);
    }

});
//Beryllium
var btn38 = new Button({
    x: 25,
    y: 35,
    height: 22,
    width: 22,
    label: "Be",
    currentColor: color(195, 46, 232),
    onClick: function() { 
        showElement(elementInfo[7]);
    }

});
//Magnesium
var btn39 = new Button({
    x: 25,
    y: 60,
    height: 22,
    width: 22,
    label: "Mg",
    currentColor: color(195, 46, 232),
    onClick: function() { 
        showElement(elementInfo[8]);
    
    }

});
//Calcium
var btn40 = new Button({
    x: 25,
    y: 85,
    height: 22,
    width: 22,
    label: "Ca",
    currentColor: color(195, 46, 232),
    onClick: function() { 
        showElement(elementInfo[9]);
    }

});
//Strontium
var btn41 = new Button({
    x: 25,
    y: 110,
    height: 22,
    width: 22,
    label: "Sr",
    currentColor: color(195, 46, 232),
    onClick: function() { 
        showElement(elementInfo[10]);
    }

});
//Barium
var btn42 = new Button({
    x: 25,
    y: 135,
    height: 22,
    width: 22,
    label: "Ba",
    currentColor: color(195, 46, 232),
    onClick: function() { 
        showElement(elementInfo[11]);
    }

});
//Radium
var btn43 = new Button({
    x: 25,
    y: 160,
    height: 22,
    width: 22,
    label: "Ra",
    currentColor: color(195, 46, 232),
    onClick: function() { 
        showElement(elementInfo[12]);
    }

});
//Scandium
var btn44 = new Button({
    x: 49,
    y: 85,
    height: 22,
    width: 22,
    label: "Sc",
    currentColor: color(98, 81, 212),
    onClick: function() { 
        showElement(elementInfo[13]);
    }

});
//Yttrium
var btn45 = new Button({
    x: 49,
    y: 110,
    height: 22,
    width: 22,
    label: "Y",
    currentColor: color(98,81,212),
    onClick: function() { 
        showElement(elementInfo[14]);
    }

});
//Titanium
var btn46 = new Button({
    x: 75,
    y: 85,
    height: 22,
    width: 22,
    label: "Ti",
    currentColor: color(98, 81, 212),
    onClick: function() { 
        showElement(elementInfo[15]);
    }

});
//Vanadium
var btn47 = new Button({
    x: 100,
    y: 85,
    height: 22,
    width: 22,
    label: "V",
    currentColor: color(98, 81, 212),
    onClick: function() { 
        showElement(elementInfo[19]);
    }

});
//Chromium
var btn48 = new Button({
    x: 125,
    y: 85,
    height: 22,
    width: 22,
    label: "Cr",
    currentColor: color(98, 81, 212),
    onClick: function() { 
        showElement(elementInfo[23]);
    }

});
//Manganese
var btn49 = new Button({
    x: 150,
    y: 85,
    height: 22,
    width: 22,
    label: "Mn",
    currentColor: color(98, 81, 212),
    onClick: function() { 
        showElement(elementInfo[27]);
    }

});
//Iron
var btn50 = new Button({
    x: 175,
    y: 85,
    height: 22,
    width: 22,
    label: "Fe",
    currentColor: color(98, 81, 212),
    onClick: function() { 
        showElement(elementInfo[31]);
    }

});
//Cobalt
var btn51 = new Button({
    x: 200,
    y: 85,
    height: 22,
    width: 22,
    label: "Co",
    currentColor: color(98, 81, 212),
    onClick: function() { 
        showElement(elementInfo[35]);
    }

});
//Nickel
var btn52 = new Button({
    x: 225,
    y: 85,
    height: 22,
    width: 22,
    label: "Ni",
    currentColor: color(98, 81, 212),
    onClick: function() { 
        showElement(elementInfo[39]);
    }

});
//Copper
var btn53 = new Button({
    x: 250,
    y: 85,
    height: 22,
    width: 22,
    label: "Cu",
    currentColor: color(98, 81, 212),
    onClick: function() { 
        showElement(elementInfo[43]);
    }

});
//Zinc
var btn54 = new Button({
    x: 275,
    y: 85,
    height: 22,
    width: 22,
    label: "Zn",
    currentColor: color(98, 81, 212),
    onClick: function() { 
        showElement(elementInfo[47]);
    }

});
//Gallium
var btn55 = new Button({
    x: 300,
    y: 85,
    height: 22,
    width: 22,
    label: "Ga",
    currentColor: color(22, 222, 82),
    onClick: function() { 
        showElement(elementInfo[53]);
    }

});
//Germanium
var btn56 = new Button({
    x: 325,
    y: 85,
    height: 22,
    width: 22,
    label: "Ge",
    currentColor: color(138, 107, 78),
    onClick: function() { 
        showElement(elementInfo[59]);
    }

});
//Arsenic
var btn57 = new Button({
    x: 350,
    y: 85,
    height: 22,
    width: 22,
    label: "As",
    currentColor: color(138,107,78),
    onClick: function() { 
        showElement(elementInfo[65]);
    }

});
//selenium
var btn58 = new Button({
    x: 375,
    y: 85,
    height: 22,
    width: 22,
    label: "Se",
    currentColor: color(237, 240, 34),
    onClick: function() { 
        showElement(elementInfo[71]);
    }

});
//Bromine
var btn59 = new Button({
    x: 400,
    y: 85,
    height: 22,
    width: 22,
    label: "Br",
    currentColor: color(237, 240, 34),
    onClick: function() { 
        showElement(elementInfo[77]);
    }

});
// Final Coloumn
//krypton
var btn60 = new Button({
    x: 425,
    y: 85,
    height: 22,
    width: 22,
    label: "Kr",
    currentColor: color(245, 189, 137),
    onClick: function() { 
        showElement(elementInfo[84]);
    }

});
//Helium
var btn61 = new Button({
    x: 425,
    y: 10,
    height: 22,
    width: 22,
    label: "He",
    currentColor: color(245, 189, 137),
    onClick: function() { 
        showElement(elementInfo[81]);
    }

});
//Neon
var btn62 = new Button({
    x: 425,
    y: 35,
    height: 22,
    width: 22,
    label: "Ne",
    currentColor: color(245, 189, 137),
    onClick: function() { 
        showElement(elementInfo[82]);
    }

});
//Argon
var btn63 = new Button({
    x: 425,
    y: 60,
    height: 22,
    width: 22,
    label: "Ar",
    currentColor: color(245, 189, 137),
    onClick: function() { 
        showElement(elementInfo[83]);
    }

});
//Xenon
var btn64 = new Button({
    x: 425,
    y: 110,
    height: 22,
    width: 22,
    label: "Xe",
    currentColor: color(245, 189, 137),
    onClick: function() { 
        showElement(elementInfo[85]);
    }

});
//Radon
var btn65 = new Button({
    x: 425,
    y: 135,
    height: 22,
    width: 22,
    label: "Rn",
    currentColor: color(245, 189, 137),
    onClick: function() { 
        showElement(elementInfo[86]);
    }

});
//Oganesson
var btn66 = new Button({
    x: 425,
    y: 160,
    height: 22,
    width: 22,
    label: "Og",
    currentColor: color(245, 189, 137),
    onClick: function() { 
        showElement(elementInfo[87]);
    }

});
//Fluorine
var btn67 = new Button({
    x: 400,
    y: 35,
    height: 22,
    width: 22,
    label: "F",
    currentColor: color(237, 240, 34),
    onClick: function() { 
        showElement(elementInfo[75]);
        
    }

});
//Chlorine
var btn68 = new Button({
    x: 400,
    y: 60,
    height: 22,
    width: 22,
    label: "Cl",
    currentColor: color(237, 240, 34),
    onClick: function() { 
        showElement(elementInfo[76]);
    }

});
//Iodine
var btn69 = new Button({
    x: 400,
    y: 110,
    height: 22,
    width: 22,
    label: "I",
    currentColor: color(237, 240, 34),
    onClick: function() { 
        showElement(elementInfo[78]);
    }

});
//Astatine
var btn70 = new Button({
    x: 400,
    y: 135,
    height: 22,
    width: 22,
    label: "At",
    currentColor: color(237, 240, 34),
    onClick: function() { 
        showElement(elementInfo[79]);
    }

});
//Tennessine
var btn71 = new Button({
    x: 400,
    y: 160,
    height: 22,
    width: 22,
    label: "Ts",
    currentColor: color(237, 240, 34),
    onClick: function() { 
        showElement(elementInfo[80]);
    }

});
//Oxygen
var btn72 = new Button({
    x: 375,
    y: 35,
    height: 22,
    width: 22,
    label: "O",
    currentColor: color(237, 240, 34),
    onClick: function() { 
        showElement(elementInfo[69]);
    }

});
//Sulfur
var btn73 = new Button({
    x: 375,
    y: 60,
    height: 22,
    width: 22,
    label: "S",
    currentColor: color(237, 240, 34),
    onClick: function() { 
        showElement(elementInfo[70]);
    }

});
//Tellurium
var btn74 = new Button({
    x: 375,
    y: 110,
    height: 22,
    width: 22,
    label: "Te",
    currentColor: color(138,107,78),
    onClick: function() { 
        showElement(elementInfo[72]);
    }

});
//Polonium
var btn75 = new Button({
    x: 375,
    y: 135,
    height: 22,
    width: 22,
    label: "Po",
    currentColor: color(138,107,78),
    onClick: function() { 
        showElement(elementInfo[73]);
    }

});
//Livermorium
var btn76 = new Button({
    x: 375,
    y: 160,
    height: 22,
    width: 22,
    label: "Lv",
    currentColor: color(22, 222, 82),
    onClick: function() { 
        showElement(elementInfo[74]);
    }

});
//Nitrogen
var btn77 = new Button({
    x: 350,
    y: 35,
    height: 22,
    width: 22,
    label: "N",
    currentColor: color(237, 240, 34),
    onClick: function() { 
        showElement(elementInfo[63]);
    }

});
//phosphorus
var btn78 = new Button({
    x: 350,
    y: 60,
    height: 22,
    width: 22,
    label: "P",
    currentColor: color(237, 240, 34),
    onClick: function() { 
        showElement(elementInfo[64]);
    }

});
//Antimony
var btn79 = new Button({
    x: 350,
    y: 110,
    height: 22,
    width: 22,
    label: "Sb",
    currentColor: color(138,107,78),
    onClick: function() { 
        showElement(elementInfo[66]);
    }

});
//Bismuth
var btn80 = new Button({
    x: 350,
    y: 135,
    height: 22,
    width: 22,
    label: "Bi",
    currentColor: color(22, 222, 82),
    onClick: function() { 
        showElement(elementInfo[67]);
    }

});
//Moscovium
var btn81 = new Button({
    x: 350,
    y: 160,
    height: 22,
    width: 22,
    label: "Mc",
    currentColor: color(22, 222, 82),
    onClick: function() { 
        showElement(elementInfo[68]);
    }

});
//Carbon
var btn82 = new Button({
    x: 325,
    y: 35,
    height: 22,
    width: 22,
    label: "C",
    currentColor: color(237, 240, 34),
    onClick: function() { 
        showElement(elementInfo[57]);
    }

});
//Silicon
var btn83 = new Button({
    x: 325,
    y: 60,
    height: 22,
    width: 22,
    label: "Si",
    currentColor: color(138, 107, 78),
    onClick: function() { 
        showElement(elementInfo[58]);
    }

});
//Tin
var btn84 = new Button({
    x: 325,
    y: 110,
    height: 22,
    width: 22,
    label: "Sn",
    currentColor: color(22, 222, 82),
    onClick: function() { 
        showElement(elementInfo[60]);
    }

});
//Lead
var btn85 = new Button({
    x: 325,
    y: 135,
    height: 22,
    width: 22,
    label: "Pb",
    currentColor: color(22, 222, 82),
    onClick: function() { 
        showElement(elementInfo[61]);
    }

});
//Flerovium
var btn86 = new Button({
    x: 325,
    y: 160,
    height: 22,
    width: 22,
    label: "Fl",
    currentColor: color(22, 222, 82),
    onClick: function() { 
        showElement(elementInfo[62]);
    }

});
//Boron
var btn87 = new Button({
    x: 300,
    y: 35,
    height: 22,
    width: 22,
    label: "B",
    currentColor: color(138, 107, 78),
    onClick: function() { 
        showElement(elementInfo[51]);
    }

});
//Aluminum
var btn88 = new Button({
    x: 300,
    y: 60,
    height: 22,
    width: 22,
    label: "Al",
    currentColor: color(22, 222, 82),
    onClick: function() { 
        showElement(elementInfo[52]);
    }

});
//Indium
var btn89 = new Button({
    x: 300,
    y: 110,
    height: 22,
    width: 22,
    label: "In",
    currentColor: color(22, 222, 82),
    onClick: function() { 
        showElement(elementInfo[54]);
    }

});
//Thallium
var btn90 = new Button({
    x: 300,
    y: 135,
    height: 22,
    width: 22,
    label: "Tl",
    currentColor: color(22, 222, 82),
    onClick: function() { 
        showElement(elementInfo[55]);
    }

});
//Nihonium
var btn91 = new Button({
    x: 300,
    y: 160,
    height: 22,
    width: 22,
    label: "Nh",
    currentColor: color(22, 222, 82),
    onClick: function() { 
        showElement(elementInfo[56]);
    }

});
//Cadmium
var btn92 = new Button({
    x: 275,
    y: 110,
    height: 22,
    width: 22,
    label: "Cd",
    currentColor: color(98, 81, 212),
    onClick: function() { 
        showElement(elementInfo[48]);
    }

});
//Mercury
var btn93 = new Button({
    x: 275,
    y: 135,
    height: 22,
    width: 22,
    label: "Hg",
    currentColor: color(98, 81, 212),
    onClick: function() { 
        showElement(elementInfo[49]);
    }

});
//Copernicium
var btn94 = new Button({
    x: 275,
    y: 160,
    height: 22,
    width: 22,
    label: "Cn",
    currentColor: color(98, 81, 212),
    onClick: function() { 
        showElement(elementInfo[50]);
    }

});
//Silver
var btn95 = new Button({
    x: 250,
    y: 110,
    height: 22,
    width: 22,
    label: "Ag",
    currentColor: color(98, 81, 212),
    onClick: function() { 
        showElement(elementInfo[44]);
    }

});
//Gold
var btn96 = new Button({
    x: 250,
    y: 135,
    height: 22,
    width: 22,
    label: "Au",
    currentColor: color(98, 81, 212),
    onClick: function() { 
        showElement(elementInfo[45]);
    }

});
//Roentgenium
var btn97 = new Button({
    x: 250,
    y: 160,
    height: 22,
    width: 22,
    label: "Rg",
    currentColor: color(98, 81, 212),
    onClick: function() { 
        showElement(elementInfo[46]);
    }

});
//Palladium
var btn98 = new Button({
    x: 225,
    y: 110,
    height: 22,
    width: 22,
    label: "Pd",
    currentColor: color(98, 81, 212),
    onClick: function() { 
        showElement(elementInfo[40]);
    }

});
//Platinum
var btn99 = new Button({
    x: 225,
    y: 135,
    height: 22,
    width: 22,
    label: "Pt",
    currentColor: color(98, 81, 212),
    onClick: function() { 
        showElement(elementInfo[41]);
    }

});
//Darmstadtium
var btn100 = new Button({
    x: 225,
    y: 160,
    height: 22,
    width: 22,
    label: "Ds",
    currentColor: color(98, 81, 212),
    onClick: function() { 
        showElement(elementInfo[42]);
    }

});
//Rhodium
var btn101 = new Button({
    x: 200,
    y: 110,
    height: 22,
    width: 22,
    label: "Rh",
    currentColor: color(98, 81, 212),
    onClick: function() { 
        showElement(elementInfo[36]);
    }

});
//Iridium
var btn102 = new Button({
    x: 200,
    y: 135,
    height: 22,
    width: 22,
    label: "Ir",
    currentColor: color(98, 81, 212),
    onClick: function() { 
        showElement(elementInfo[37]);
    }

});
//Meitnerium
var btn103 = new Button({
    x: 200,
    y: 160,
    height: 22,
    width: 22,
    label: "Mt",
    currentColor: color(98, 81, 212),
    onClick: function() { 
        showElement(elementInfo[38]);
    }

});
//Ruthenium
var btn104 = new Button({
    x: 175,
    y: 110,
    height: 22,
    width: 22,
    label: "Ru",
    currentColor: color(98, 81, 212),
    onClick: function() { 
        showElement(elementInfo[32]);
    }

});
//Osmium
var btn105 = new Button({
    x: 175,
    y: 135,
    height: 22,
    width: 22,
    label: "Os",
    currentColor: color(98, 81, 212),
    onClick: function() { 
        showElement(elementInfo[33]);
    }

});
//Hassium
var btn106 = new Button({
    x: 175,
    y: 160,
    height: 22,
    width: 22,
    label: "Hs",
    currentColor: color(98, 81, 212),
    onClick: function() { 
        showElement(elementInfo[34]);
    }

});
//Technetium
var btn107 = new Button({
    x: 150,
    y: 110,
    height: 22,
    width: 22,
    label: "Tc",
    currentColor: color(98, 81, 212),
    onClick: function() { 
        showElement(elementInfo[28]);
    }

});
//Rhenium
var btn108 = new Button({
    x: 150,
    y: 135,
    height: 22,
    width: 22,
    label: "Re",
    currentColor: color(98, 81, 212),
    onClick: function() { 
        showElement(elementInfo[29]);
    }

});
//Bohrium
var btn109 = new Button({
    x: 150,
    y: 160,
    height: 22,
    width: 22,
    label: "Bh",
    currentColor: color(98, 81, 212),
    onClick: function() { 
        showElement(elementInfo[30]);
    }

});
//Molybdenum
var btn110 = new Button({
    x: 125,
    y: 110,
    height: 22,
    width: 22,
    label: "Mo",
    currentColor: color(98, 81, 212),
    onClick: function() { 
        showElement(elementInfo[24]);
    }

});
//Tungsten
var btn111 = new Button({
    x: 125,
    y: 135,
    height: 22,
    width: 22,
    label: "W",
    currentColor: color(98, 81, 212),
    onClick: function() { 
        showElement(elementInfo[25]);
    }

});
//Seaborgium
var btn112 = new Button({
    x: 125,
    y: 160,
    height: 22,
    width: 22,
    label: "Sg",
    currentColor: color(98, 81, 212),
    onClick: function() { 
        showElement(elementInfo[26]);
    }

});
//Niobium
var btn113 = new Button({
    x: 100,
    y: 110,
    height: 22,
    width: 22,
    label: "Nb",
    currentColor: color(98, 81, 212),
    onClick: function() { 
        showElement(elementInfo[20]);
    }

});
//Tantalum
var btn114 = new Button({
    x: 100,
    y: 135,
    height: 22,
    width: 22,
    label: "Ta",
    currentColor: color(98, 81, 212),
    onClick: function() { 
        showElement(elementInfo[21]);
    }

});
//Dubnium
var btn115 = new Button({
    x: 100,
    y: 160,
    height: 22,
    width: 22,
    label: "Db",
    currentColor: color(98, 81, 212),
    onClick: function() { 
        showElement(elementInfo[22]);
    }

});
//Zirconium
var btn116 = new Button({
    x: 75,
    y: 110,
    height: 22,
    width: 22,
    label: "Zr",
    currentColor: color(98, 81, 212),
    onClick: function() { 
        showElement(elementInfo[16]);
    }

});
//Hafnium
var btn117 = new Button({
    x: 75,
    y: 135,
    height: 22,
    width: 22,
    label: "Hf",
    currentColor: color(98, 81, 212),
    onClick: function() { 
        showElement(elementInfo[17]);
    }

});
//Rutherfordium
var btn118 = new Button({
    x: 75,
    y: 160,
    height: 22,
    width: 22,
    label: "Rf",
    currentColor: color(98, 81, 212),
    onClick: function() { 
        showElement(elementInfo[18]);
    }

});
//Exit Button
var btnReturn = new Button({
    x: 478,
    y: 305,
    height: 25,
    width: 35,
    label: "Exit",
    currentColor: color(29, 133, 5),
    onClick: function() {
        drawScene1();
        newSpeak = floor(random() * bitmojiSpeak.length);
        
    }

});
//Start Button
var btnStart = new Button2({
    x: 180,
    y: 321,
    height: 58,
    width: 150,
    label: "Start",
    currentColor: color(255, 255, 255),
    onClick: function() {
        currentScene = 1;
        drawScene1();
        
    }

});
//Home Page
var drawScene0 = function(){
   drawBitmoji(206,142,94);
   btnStart.draw();
   textSize(25);
   text("Interactive Periodic Table!",256,83);
   textSize(15);
   text("Press start and then click an element to see important information!",252,395);
};
//Button Action
var showElement = function(elementInfo){
    fill(255, 255, 255);
    rect(0,300,500,200);
    fill(0, 0, 0);
    textSize(13);
    text("Name: " + elementInfo.name, 58,320);
    text("Atomic Mass: " + elementInfo.atomicMass + " g", 101,360);
    text(" Electronegativity: " + elementInfo.electroNegativity, 360,320);
    text(" Atomic Radius: " + elementInfo.atomicRadius + "pm", 362,360);
    btnReturn.draw();
    drawBitmoji(50,400,60);
    stroke(5);
    line(85,446,137,438);
    fill(255, 252, 255);
    ellipse(163,441,80,30);
    textSize(10);
    fill(0, 0, 0);
    text(bitmojiSpeak[newSpeak],155,436);
    
};
//Draw the buttons
var drawScene1 = function(){
    currentScene = 1;
    background(194, 186, 186);
    btn1.draw();
    btn2.draw();
    btn3.draw();
    btn4.draw();
    btn5.draw();
    btn6.draw();
    btn7.draw();
    btn8.draw();
    btn9.draw();
    btn10.draw();
    btn11.draw();
    btn12.draw();
    btn13.draw();
    btn14.draw();
    btn15.draw();
    btn16.draw();
    btn17.draw();
    btn18.draw();
    btn19.draw();
    btn20.draw();
    btn21.draw();
    btn22.draw();
    btn23.draw();
    btn24.draw();
    btn25.draw();
    btn26.draw();
    btn27.draw();
    btn28.draw();
    btn29.draw();
    btn30.draw();
    btn31.draw();
    btn32.draw();
    btn33.draw();
    btn34.draw();
    btn35.draw();
    btn36.draw();
    btn37.draw();
    btn38.draw();
    btn39.draw();
    btn40.draw();
    btn41.draw();
    btn42.draw();
    btn43.draw();
    btn44.draw();
    btn45.draw();
    btn46.draw();
    btn47.draw();
    btn48.draw();
    btn49.draw();
    btn50.draw();
    btn51.draw();
    btn52.draw();
    btn53.draw();
    btn54.draw();
    btn55.draw();
    btn56.draw();
    btn57.draw();
    btn58.draw();
    btn59.draw();
    btn60.draw();
    btn61.draw();
    btn62.draw();
    btn63.draw();
    btn64.draw();
    btn65.draw();
    btn66.draw();
    btn67.draw();
    btn68.draw();
    btn69.draw();
    btn70.draw();
    btn71.draw();
    btn72.draw();
    btn73.draw();
    btn74.draw();
    btn75.draw();
    btn76.draw();
    btn77.draw();
    btn78.draw();
    btn79.draw();
    btn80.draw();
    btn81.draw();
    btn82.draw();
    btn83.draw();
    btn84.draw();
    btn85.draw();
    btn86.draw();
    btn87.draw();
    btn88.draw();
    btn89.draw();
    btn90.draw();
    btn91.draw();
    btn92.draw();
    btn93.draw();
    btn94.draw();
    btn95.draw();
    btn96.draw();
    btn97.draw();
    btn98.draw();
    btn99.draw();
    btn100.draw();
    btn101.draw();
    btn102.draw();
    btn103.draw();
    btn104.draw();
    btn105.draw();
    btn106.draw();
    btn107.draw();
    btn108.draw();
    btn109.draw();
    btn110.draw();
    btn111.draw();
    btn112.draw();
    btn113.draw();
    btn114.draw();
    btn115.draw();
    btn116.draw();
    btn117.draw();
    btn118.draw();
    
};
//Perform action when clicked
mouseClicked = function() {
    btn1.handleMouseClick();
    btn2.handleMouseClick();
    btn3.handleMouseClick();
    btn4.handleMouseClick();
    btn5.handleMouseClick();
    btn6.handleMouseClick();
    btn7.handleMouseClick();
    btn8.handleMouseClick();
    btn9.handleMouseClick();
    btn10.handleMouseClick();
    btn11.handleMouseClick();
    btn12.handleMouseClick();
    btn13.handleMouseClick();
    btn14.handleMouseClick();
    btn15.handleMouseClick();
    btn16.handleMouseClick();
    btn17.handleMouseClick();
    btn18.handleMouseClick();
    btn19.handleMouseClick();
    btn20.handleMouseClick();
    btn21.handleMouseClick();
    btn22.handleMouseClick();
    btn23.handleMouseClick();
    btn24.handleMouseClick();
    btn25.handleMouseClick();
    btn26.handleMouseClick();
    btn27.handleMouseClick();
    btn28.handleMouseClick();
    btn29.handleMouseClick();
    btn30.handleMouseClick();
    btn31.handleMouseClick();
    btn32.handleMouseClick();
    btn33.handleMouseClick();
    btn34.handleMouseClick();
    btn35.handleMouseClick();
    btn36.handleMouseClick();
    btn37.handleMouseClick();
    btn38.handleMouseClick();
    btn39.handleMouseClick();
    btn40.handleMouseClick();
    btn41.handleMouseClick();
    btn42.handleMouseClick();
    btn43.handleMouseClick();
    btn44.handleMouseClick();
    btn45.handleMouseClick();
    btn46.handleMouseClick();
    btn47.handleMouseClick();
    btn48.handleMouseClick();
    btn49.handleMouseClick();
    btn50.handleMouseClick();
    btn51.handleMouseClick();
    btn52.handleMouseClick();
    btn53.handleMouseClick();
    btn54.handleMouseClick();
    btn55.handleMouseClick();
    btn56.handleMouseClick();
    btn57.handleMouseClick();
    btn58.handleMouseClick();
    btn59.handleMouseClick();
    btn60.handleMouseClick();
    btn61.handleMouseClick();
    btn62.handleMouseClick();
    btn63.handleMouseClick();
    btn64.handleMouseClick();
    btn65.handleMouseClick();
    btn66.handleMouseClick();
    btn67.handleMouseClick();
    btn68.handleMouseClick();
    btn69.handleMouseClick();
    btn70.handleMouseClick();
    btn71.handleMouseClick();
    btn72.handleMouseClick();
    btn73.handleMouseClick();
    btn74.handleMouseClick();
    btn75.handleMouseClick();
    btn76.handleMouseClick();
    btn77.handleMouseClick();
    btn78.handleMouseClick();
    btn79.handleMouseClick();
    btn80.handleMouseClick();
    btn81.handleMouseClick();
    btn82.handleMouseClick();
    btn83.handleMouseClick();
    btn84.handleMouseClick();
    btn85.handleMouseClick();
    btn86.handleMouseClick();
    btn87.handleMouseClick();
    btn88.handleMouseClick();
    btn89.handleMouseClick();
    btn90.handleMouseClick();
    btn91.handleMouseClick();
    btn92.handleMouseClick();
    btn93.handleMouseClick();
    btn94.handleMouseClick();
    btn95.handleMouseClick();
    btn96.handleMouseClick();
    btn97.handleMouseClick();
    btn98.handleMouseClick();
    btn99.handleMouseClick();
    btn100.handleMouseClick();
    btn101.handleMouseClick();
    btn102.handleMouseClick();
    btn103.handleMouseClick();
    btn104.handleMouseClick();
    btn105.handleMouseClick();
    btn106.handleMouseClick();
    btn107.handleMouseClick();
    btn108.handleMouseClick();
    btn109.handleMouseClick();
    btn110.handleMouseClick();
    btn111.handleMouseClick();
    btn112.handleMouseClick();
    btn113.handleMouseClick();
    btn114.handleMouseClick();
    btn115.handleMouseClick();
    btn116.handleMouseClick();
    btn117.handleMouseClick();
    btn118.handleMouseClick();
    btnReturn.handleMouseClick();
    btnStart.handleMouseClick();
};

drawScene0();

