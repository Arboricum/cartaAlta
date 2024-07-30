
document.getElementById("mischia").addEventListener("click", start);
document.getElementById("mescola").addEventListener("ended", calcolo1);



MPl = 20;
MPc = 20;
CMani = 0;

cntG1 = 0;
cntG2 = 0;
document.getElementById("cG1").innerHTML = cntG1;
document.getElementById("cG2").innerHTML = cntG2;

//funzione paragone
var parag1 = [];
var parag2 = [];
var parag1bis = [];
var parag2bis = [];
var parag1tot = [];
var parag2tot = [];

function start() {
document.getElementById("mescola").play();
document.getElementById("mischia").removeEventListener("click", start);
document.getElementById("demo6").innerHTML = "<b>Mescolo il mazzo</b>";
}




function cartePL() {
document.getElementById("mischia").style.visibility = "hidden";
document.getElementById("demo6").innerHTML = "<b>Nuova Partita!</b>";
document.getElementById("bemo").src = "carte/dorsom.jpg";
document.getElementById("bemo3").src = "carte/dorsom.jpg";
document.getElementById("tabella").style.display = "block";
nuovamano();
}

function nuovamano() {
document.getElementById("mazzoPl").style.visibility = "visible";
document.getElementById("mazzoPc").style.visibility = "visible";

document.getElementById("mazzoPl").innerHTML = "Carte:" + " " + MPl;
document.getElementById("mazzoPc").innerHTML = "Carte:" + " " + MPc;
document.getElementById("mani").innerHTML = "Mani giocate:" + " " + CMani;

document.getElementById("cartaCPl1").style.cursor="pointer";
document.getElementById("bemo").addEventListener("click", anim1);
document.getElementById("bemo").addEventListener("animationend", gira1);
document.getElementById("cartaPl1").style.zIndex = "auto";

document.getElementById("bemo1").style.display = "none";
document.getElementById("bemo2").style.display = "none";
document.getElementById("bemo1").src = "carte/emptyCard.png";
document.getElementById("bemo2").src = "carte/emptyCard.png";
document.getElementById("bemo1").classList.remove("muovi4b");
document.getElementById("bemo2").classList.remove("muovi4a");


document.getElementById("mescola").removeEventListener("ended", calcolo1);
document.getElementById("girata3").removeEventListener("ended",nuovamano);
document.getElementById("bemo2").removeEventListener("animationend",girafine);
document.getElementById("bemo1").removeEventListener("animationend",girafine);
}

function anim1() {
document.getElementById("demo6").innerHTML = "";
document.getElementById("cartasost1").style.display = "block";
document.getElementById("bemo").classList.add("muovi1");
document.getElementById("cartaCPl1").style.cursor="auto";
document.getElementById("bemo").removeEventListener("click", anim1);
}

function gira1() {
document.getElementById("girata").play();
document.getElementById("bemo1").style.display = "block";
document.getElementById("bemo1").src = pl1[0][2];
document.getElementById("bemo").removeEventListener("animationend", gira1);
document.getElementById("bemo").classList.remove("muovi1");
setTimeout(anim2, 1000)
}

function anim2() {
document.getElementById("cartasost2").style.display = "block";
document.getElementById("bemo3").classList.add("muovi2");
document.getElementById("bemo3").addEventListener("animationend", gira2);
}

function gira2() {
document.getElementById("girata").play();
document.getElementById("bemo2").style.display = "block";
document.getElementById("bemo2").src = pl2[20][2];
document.getElementById("bemo3").removeEventListener("animationend", gira2);
document.getElementById("bemo3").classList.remove("muovi2");
//forse superflui
document.getElementById("cartasost1").style.display = "none";
document.getElementById("cartasost2").style.display = "none";
paragone();
}

function paragone() {
parag1 = pl1[0][0];
parag2 = pl2[20][0];
parag1bis = pl1[0][1];
parag2bis = pl2[20][1];
parag1tot = pl1[0];
parag2tot = pl2[20];
//parag1 < parag2
	if (parag1 < parag2) {
setTimeout(PCW, 500)
	} 
//parag1 > parag2
	else if (parag1 > parag2) {
setTimeout(PLW, 500)
	} 
//parag1 == parag2
	else if (parag1 == parag2) {
		if (parag1bis == "Coppe") {
		setTimeout(PLW, 500)
		
		} else if (parag1bis == "Spade") {
			if (parag2bis == "Coppe") {
			setTimeout(PCW, 500)
			} else if (parag2bis == "Ori") {
			setTimeout(PCW, 500)
			}
			else if (parag2bis == "Bastoni") {
			setTimeout(PLW, 500)
			}
		
		} else if (parag1bis == "Ori") {
			if (parag2bis == "Coppe") {
			setTimeout(PCW, 500)
			} else if (parag2bis == "Bastoni") {
			setTimeout(PLW, 500)
			} else if (parag2bis == "Spade") {
			setTimeout(PLW, 500)
			}
		
		} else if (parag1bis == "Bastoni") {
			setTimeout(PCW, 500)
			}
	}
}

function PLW() {

pl1.push(parag1tot);
pl1.push(parag2tot);
pl1.shift();
pl2.shift();
MPl += 1;
MPc -= 1;
CMani += 1;
	if (MPl < 40) {
	document.getElementById("bemo2").classList.add("muovi3a");
	document.getElementById("bemo2").addEventListener("animationend",PLW1);
		function PLW1() {
		document.getElementById("bemo1").src = "carte/emptyCard.png";
		document.getElementById("bemo2").classList.remove("muovi3a");
		document.getElementById("girata2").play();
		document.getElementById("bemo2").removeEventListener("animationend",PLW1);
		document.getElementById("bemo2").src = "carte/dorsom.jpg";
		document.getElementById("bemo2").classList.add("muovi4a");
		document.getElementById("bemo2").addEventListener("animationend",girafine);
		}
	}
	else if (MPl == 40) {
	prestart2Pl();
	}
}

function prestart2Pl() {
document.getElementById("demo7").innerHTML = "Il Giocatore ha vinto!";
document.getElementById("mischia").addEventListener("click", start2);
document.getElementById("mischia").style.visibility = "visible";
cntG1 += 1;
document.getElementById("cG1").innerHTML = cntG1;
document.getElementById("mazzoPl").innerHTML = "Carte" + " " + MPl;
document.getElementById("mazzoPc").innerHTML = "Carte" + " " + MPc;
document.getElementById("mani").innerHTML = "Mani giocate:" + " " + CMani;
}

function PCW() {

pl2.push(parag2tot);
pl2.push(parag1tot);
pl2.shift();
pl1.shift();
MPc += 1;
MPl -= 1;
CMani += 1;
	if (MPc < 40) {
	document.getElementById("cartaPl1").style.zIndex = "1";
	document.getElementById("bemo1").classList.add("muovi3b");
	document.getElementById("bemo1").addEventListener("animationend",PCW1);
	function PCW1() {
		document.getElementById("bemo2").src = "carte/emptyCard.png";
		document.getElementById("bemo1").classList.remove("muovi3b");
		document.getElementById("girata2").play();
		document.getElementById("bemo1").removeEventListener("animationend",PCW1);
		document.getElementById("bemo1").src = "carte/dorsom.jpg";
		document.getElementById("bemo1").classList.add("muovi4b");
		document.getElementById("bemo1").addEventListener("animationend",girafine);
		}
	}
	else if (MPc == 40) {
	prestart2Pc();
	}
}

function prestart2Pc() {
document.getElementById("demo7").innerHTML = "Il Computer ha vinto!";
document.getElementById("mischia").addEventListener("click", start2);
document.getElementById("mischia").style.visibility = "visible";
cntG2 += 1;
document.getElementById("cG2").innerHTML = cntG2;
document.getElementById("mazzoPl").innerHTML = "Carte:" + " " + MPl;
document.getElementById("mazzoPc").innerHTML = "Carte:" + " " + MPc;
document.getElementById("mani").innerHTML = "Mani giocate:" + " " + CMani;
}

function girafine() {
document.getElementById("girata3").addEventListener("ended", nuovamano);
document.getElementById("girata3").play();
}

function start2() {
document.getElementById("mischia").removeEventListener("click", start2);
document.getElementById("bemo").src = "carte/emptyCard.png";
document.getElementById("bemo1").src = "carte/emptyCard.png";
document.getElementById("bemo2").src = "carte/emptyCard.png";
document.getElementById("bemo3").src = "carte/emptyCard.png";
document.getElementById("demo7").innerHTML = "";
document.getElementById("mani").innerHTML = "";
CMani = 0;
MPl = 20;
MPc = 20;
lista = [];
lista1 = [];
cont1 = 0;
pl1=[];
pl2=[];
parag1 = [];
parag2 = [];
parag1bis = [];
parag2bis = [];
parag1tot = [];
parag2tot = [];
document.getElementById("mazzoPl").style.visibility = "hidden";
document.getElementById("mazzoPc").style.visibility = "hidden";
document.getElementById("demo7").innerHTML = "";
document.getElementById("mescola").play();
document.getElementById("demo6").innerHTML = "<b>Mescolo il mazzo</b>";
document.getElementById("mescola").addEventListener("ended", calcolo1);
}