var Età = prompt ("quanti anni hai?");
var Distanza = prompt ("benissimo, ora dimmi quanti km hai percorso");
var Prezzo = 0.21;
var ScontoMinorenni = (Prezzo*20) / 100;
var ScontoAnziani = (Prezzo*40) / 100;


if (Età <= 18){
  Prezzo = Prezzo - ScontoMinorenni;
  document.write ("Il costo del biglietto è di euro "+ Prezzo * Distanza );
}

if (Età >= 65){
  Prezzo = Prezzo - ScontoAnziani;
  document.write ("Il costo del biglietto è di euro "+ Prezzo * Distanza );
}

else if (Età >18){
  Prezzo = Prezzo;
  document.write ("Il costo del biglietto è di euro "+ Prezzo * Distanza );
}
