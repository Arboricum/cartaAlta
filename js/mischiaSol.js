var addiz;
var lista = [];
var lista1 = [];
var cont1 = 0;

//calcola primo numero casuale
function calcolo1() {

var randomPre = Math.floor(Math.random()*10)
addiz = 0;

switch (randomPre) {
  case 0:
  case 6:
addiz = 0;
calcolo2(); 
      break; 
  case 5:
  case 3:
addiz = 10;
calcolo2(); 
     break;
  case 4:
  case 2:
addiz = 20;
calcolo2(); 
     break;
  case 1:
  case 7:
addiz = 30;
calcolo2(); 
     break;
  default: 
calcolo1();
} 

//calcola secondo numero casuale e lo abbina alle carte, quindi genera il mazzo
function calcolo2() {

var carta = [];
var carta1 = "";
var randomPost = Math.floor(Math.random()*10) + 1 + addiz;

  switch(randomPost) {
  case 1:
  carta = [1,"Ori","carte/AssoQ.png",1];
  carta1 = "AssoQ";
  break;

  case 2:
  carta = [2,"Ori","carte/2Q.png",2];
  carta1 = "2Q";
  break;

  case 3:
  carta = [3,"Ori","carte/3Q.png",3];
  carta1 = "3Q";
  break;

  case 4:
  carta = [4,"Ori","carte/4Q.png",4];
  carta1 = "4Q";
  break;

  case 5:
  carta = [5,"Ori","carte/5Q.png",5];
  carta1 = "5Q";
  break;

  case 6:
  carta = [6,"Ori","carte/6Q.png",6];
  carta1 = "6Q";
  break;

  case 7:
  carta = [7,"Ori","carte/7Q.png",7];
  carta1 = "7Q";
  break;

  case 8:
  carta = [8,"Ori","carte/FanteQ.png",8];
  carta1 = "8Q";
  break;

  case 9:
  carta = [9,"Ori","carte/CavalloQ.png",9];
  carta1 = "9Q";
  break;

  case 10:
  carta = [10,"Ori","carte/ReQ.png",10];
  carta1 = "10Q";
  break;

  case 11:
  carta = [1,"Coppe","carte/AssoC.png",11];
  carta1 = "AssoC";
  break;

  case 12:
  carta = [2,"Coppe","carte/2C.png",12];
  carta1 = "2C";
  break;
  
  case 13:
  carta = [3,"Coppe","carte/3C.png",13];
  carta1 = "3C";
  break;

  case 14:
  carta = [4,"Coppe","carte/4C.png",14];
  carta1 = "4C";
  break;

  case 15:
  carta = [5,"Coppe","carte/5C.png",15];
  carta1 = "5C";
  break;

  case 16:
  carta = [6,"Coppe","carte/6C.png",16];
  carta1 = "6C";
  break;

  case 17:
  carta = [7,"Coppe","carte/7C.png",17];
  carta1 = "7C";
  break;

  case 18:
  carta = [8,"Coppe","carte/FanteC.png",18];
  carta1 = "8C";
  break;
 
  case 19:
  carta = [9,"Coppe","carte/CavalloC.png",19];
  carta1 = "9C";
  break;
 
  case 20:
  carta = [10,"Coppe","carte/ReC.png",20];
  carta1 = "10C";
  break;

  case 21:
  carta = [1,"Spade","carte/AssoS.png",21];
  carta1 = "AssoS";
  break;

  case 22:
  carta = [2,"Spade","carte/2S.png",22];
  carta1 = "2S";
  break;

  case 23:
  carta = [3,"Spade","carte/3S.png",23];
  carta1 = "3S";
  break;

  case 24:
  carta = [4,"Spade","carte/4S.png",24];
  carta1 = "4S";
  break;

  case 25:
  carta = [5,"Spade","carte/5S.png",25];
  carta1 = "5S";
  break;

  case 26:
  carta = [6,"Spade","carte/6S.png",26];
  carta1 = "6S";
  break;

  case 27:
  carta = [7,"Spade","carte/7S.png",27];
  carta1 = "7S";
  break;

  case 28:
  carta = [8,"Spade","carte/FanteS.png",28];
  carta1 = "8S";
  break;

  case 29:
  carta = [9,"Spade","carte/CavalloS.png",29];
  carta1 = "9S";
  break;

  case 30:
  carta = [10,"Spade","carte/ReS.png",30];
  carta1 = "10S";
  break;

  case 31:
  carta = [1,"Bastoni","carte/AssoB.png",31];
  carta1 = "AssoB";
  break;

  case 32:
  carta = [2,"Bastoni","carte/2B.png",32];
  carta1 = "2B";
  break;

  case 33:
  carta = [3,"Bastoni","carte/3B.png",33];
  carta1 = "3B";
  break;

  case 34:
  carta = [4,"Bastoni","carte/4B.png",34];
  carta1 = "4B";
  break;

  case 35:
  carta = [5,"Bastoni","carte/5B.png",35];
  carta1 = "5B";
  break;

  case 36:
  carta = [6,"Bastoni","carte/6B.png",36];
  carta1 = "6B";
  break;

  case 37:
  carta = [7,"Bastoni","carte/7B.png",37];
  carta1 = "7B";
  break;

  case 38:
  carta = [8,"Bastoni","carte/FanteB.png",38];
  carta1 = "8B";
  break;

  case 39:
  carta = [9,"Bastoni","carte/CavalloB.png",39];
  carta1 = "9B";
  break;

  case 40:
  carta = [10,"Bastoni","carte/ReB.png",40];
  carta1 = "10B";
  break;
  }

//generazione del mazzo
  switch(cont1) {
  case cont1:
  var pos = lista1.indexOf(carta1);
    if (pos == -1) {
    lista[cont1] = carta;
    lista1[cont1] = carta1;
    cont1 += 1;
    }
    while (cont1 < 40) {
    calcolo1();
    } 
  }
}
}
