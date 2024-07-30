
var pl1=[];
var pl2=[];

//distribuisce le carte a due giocatori, player e pc
function giocoPL() {
s=0;
for (s = 0; s < 20; s++) {
pl1[s] = lista[s];
}
giocoPC();
}

function giocoPC() {
t=20;
for (t = 20; t < 40; t++) {
pl2[t] = lista[t];
}
cartePL();
}