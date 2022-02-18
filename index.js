let choice;
let values = getRecords().split (`,`);
let gemRecords= [];
let flag = 0;
let found = 0;
let gemColor = [];
let gemAdd = [];

for (let i=5; i<values.length; i=i+5){
gemObject ={
  id:  values[i],
  name: values[i+1],
  color: values[i+2],
  cut: values[i+3],
  date: values[i+4]
};

gemRecords.push(gemObject);

}
while (choice !=5){


console.log ("1. Add a Gem");
console.log ("2. Search Gem list by ID");
console.log ("3. Search Gem list by color");
console.log ("4. Print Gem list");
console.log ("5. Quit");
choice = prompt ("Input Choice>>>>");

switch(choice){
  case "1":
 console.log ("ID# >>>> " + (parseInt(gemRecords[gemRecords.length-1].id)+3)); 
  gemAdd = {
  id: parseInt(gemRecords[gemRecords.length-1].id)+3,
  name: prompt ("Name?>>>"),
  color: prompt ("Color?>>>"),
  cut: prompt ("Cut?>>>"),
  date: prompt ("Date?>>>"),
  }
  gemRecords.push(gemAdd);
  
break;


case "2":
let searchID = prompt ("ID to Search for?>>>");

for (let i=0; i < gemRecords.length; i++){
  
  if (gemRecords[i].id == searchID){
    flag = 1;
    console.table (gemRecords[i]);
    
  }
}
if (flag ==0) {
  console.log ("ID not found")

}
break;
case "3":
let searchColor = prompt ("Color to search for?>>>");
for (let i=0; i<gemRecords.length; i++){
  if (gemRecords[i].color == searchColor){
    found =1;
    gemColor.push(gemRecords[i])

  }
}
if (found ==0) {
  console.log ("Color not found");
} 
else{
console.table(gemColor);
}
break;
case "4":
console.table(gemRecords,["id","name"]);
break;
case "5":
console.log ("bye");
break;
}
}


//dont change anything below here*********************************************
function getRecords(){
  return "id,name,color,cut,date,6487,Holmquistite,indigo,Flower Cut,02-19-04,6488,Hibschite,green,Princess,03-15-98,6489,Analcime,violet,Ball,07-02-50,6490,Common Opal,violet,Fan,09-28-12,6491,Crown Glass,orange,Flower Cut,11-18-92,6492,Pectolite,indigo,Round,11-29-32,6493,Petalite,red,Asscher,08-04-46,6494,Glass,orange,NavetteNeedle BrilliantNetOctagon,08-21-82,6495,Cat's Eye Tourmaline,red,Hexagon Cabochon,01-17-12,6496,Carnelian,green,Oval Portuguese,07-11-82,6497,Strontianite,blue,Flower Cut,11-01-77,6498,Grandite,indigo,Triangle,02-04-16,6499,Bikolite,red,Recoupé-RoseRhomb,01-30-00,6500,Tugtupite,violet,Barrel-shapedBriolette,09-27-79,6501,Colemanite,red,AmericanAntique,07-18-38,6502,Petersite,red,Baguette Cabochon,07-14-68,6503,Tortoiseshell,yellow,Oval Portuguese,01-01-38,6504,Paraíba Tourmaline,green,Highlight BrilliantJubileeKingKite,10-14-04,6505,Afghanite,yellow,FrenchHalf-BrilliantHeart,09-18-95,6506,Epidote,blue,Barrel-shapedBriolette,04-18-57,6507,Larimar,indigo,Carre,03-20-78,6508,Lizardite,orange,Barrel-shapedBriolette,01-26-22,6509,Tremolite,violet,Sphere,04-03-30,6510,Bytownite,violet,Heart Cabochon,11-06-31,6511,Manganotantalite,green,Parallelogram,03-02-82,6512,Clinochlore,orange,Triangle,07-01-55,6513,Crystal Opal,indigo,Baguette,06-13-29,6514,Darwin Glass,yellow,CeylonCoat-of-ArmsConcave Cut,12-29-36,6515,Creedite,blue,Shield,10-13-22,6516,Verd Antique,red,Cushion Antique Brilliant,03-02-64,6517,Faustite,blue,Fan,03-29-40,6518,Ametrine,blue,Baguette,02-15-00,6519,Sapphire,red,Old SingleOliveOval,05-09-30,6520,Watermelon Tourmaline,blue,Trillion Cabochon,02-18-02,6521,Chrysoberyl,indigo,Round Cabochon,01-28-76,6522,Prehnite,green,SwissTable,11-05-95,6523,Merlinite,red,Cushion Cabochon,10-27-50,6524,Proustite,indigo,Parallelogram,07-02-19,6525,Boleite,violet,Highlight BrilliantJubileeKingKite,04-05-70,6526,Nepheline,blue,Double BrilliantDouble RoseDrop,05-19-16,6527,Aegirine,yellow,Old EuropeanOld Mine,09-06-07,6528,Chrome-Chalcedony,yellow,CeylonCoat-of-ArmsConcave Cut,06-03-88,6529,Verdite,indigo,Recoupé-RoseRhomb,09-18-29,6530,Londonite,green,SwissTable,11-08-27,6531,Spinel,green,Square Cabochon,06-19-19,6532,Siderite,violet,Shield,07-03-92,6533,Smokey Quartz,yellow,Carre,08-06-81,6534,Sphalerite,red,PendeloquePentagon,02-23-48,6535,Chrysocolla,indigo,Cushion Cabochon,12-09-30,6536,Spinel,yellow,Portuguese Trillion,08-26-00,6537,Greenlandite (Aventurine),indigo,Square Cabochon,03-14-94,6538,Spinel,indigo,Rhomb Cabochon,05-07-29,6539,Transvaal Jade,orange,FrenchHalf-BrilliantHeart,11-06-12,6540,Chiastolite,red,Pear Cabochon,02-26-25,6541,Tempest stone,yellow,Round Cabochon,04-25-26,6542,Azurmalachite,yellow,Fan,09-02-97,6543,Diallage,red,Octagon Cabochon,05-17-16,6544,Odontolite,green,Concave Round,03-17-63,6545,Lead Crystal,red,AmericanAntique,12-28-65,6546,Iron Pyrites,blue,Cushion Antique Brilliant,12-10-78,6547,Sard,orange,Round Cabochon,03-21-06,6548,Tanzanite,green,FrenchHalf-BrilliantHeart,06-23-41,6549,Sphalerite,indigo,FrenchHalf-BrilliantHeart,07-24-55,6550,Peridot,orange,Recoupé-RoseRhomb,03-24-32,6551,Pollucite,indigo,Oval Portuguese,07-21-20,6552,Diaspore,red,Octagon Cabochon,11-16-57,6553,Fordite,green,Trillion,03-07-58,6554,Sarcopside,green,Recoupé-RoseRhomb,03-19-60,6555,Rutilated Quartz,violet,Portuguese Trillion,09-19-05,6556,Serpentine,red,Flower Cut,04-18-73,6557,Apophyllite,red,PendeloquePentagon,01-27-04,6558,Chrysocolla Chalcedony,blue,Square Cabochon,10-30-45,6559,Cassiterite,red,Parallelogram,02-04-72,6560,Norbergite,indigo,Radiant Cut,12-13-02,6561,White Opal,orange,Flower Cut,07-18-84,6562,Phosphosiderite,yellow,Sphere,05-27-36,6563,Amber,blue,Cushion Cabochon,06-28-73,6564,Fuchsite,red,Fan,09-09-29,6565,Quartzite,orange,Oval Cabochon,01-16-03,6566,Coral,red,PendeloquePentagon,02-21-10,6567,Amazon Stone,indigo,Asscher,06-21-00,6568,Williamsite,violet,Square Cushion,12-05-41,6569,Humite,red,MagnaMarquise Cabochon,06-24-53,6570,Povondraite,red,Barrel-shapedBriolette,01-13-89,6571,Mahogany Obsidian,violet,Trapezoid,02-02-50,6572,Bonamite,yellow,Carved,04-11-06,6573,Prehnite,yellow,Oval Portuguese,03-28-20,6574,Analcime,blue,Triangle,04-13-15,6575,Mtorodite,indigo,Cushion,12-14-21,6576,Tanzanite,blue,Sphere,05-30-34,6577,Cubic Zirconia,blue,AmericanAntique,11-08-06,6578,Almandine-Pyrope Series,indigo,BudCabochon,03-12-95,6579,Chrome-Diopside,red,Shield,07-20-90,6580,Tektite,orange,Hexagon,12-11-67,6581,Liddicoatite,indigo,PeruzziPetalPoint,03-20-55,6582,Tugtupite,green,Oval Cabochon,07-11-91,6583,Axinite-(Mn),green,Round,04-10-24,6584,Iolite,blue,Portuguese Trillion,07-16-34,6585,Gem Chrysocolla,yellow,PeruzziPetalPoint,06-26-32,6586,Chambersite,blue,Parallelogram,08-04-68"}
