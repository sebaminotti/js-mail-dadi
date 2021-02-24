alert ("GIOCO DEI DADI: SEI PRONTO ?? BUONA FORTUNA!")

var umano = Math.floor((Math.random() * 6) + 1);
alert ("UMANO TI E' USCITO IL NUMERO: "+ umano);

var terminator = Math.floor((Math.random() * 6) + 1);
alert (" TERMINATOR TI E' USCITO IL NUMERO: "+ terminator);

if (umano < terminator) {
alert (" TERMINATOR HA VINTO LA RAZZA UMANA PERIRA'");
} else if ( umano > terminator) {
alert ("TERMINATOR SEI STATO TERMINATO , DIVENTERAI UNA PENTOLA");
}  if (umano == terminator) {
 alert ("PARITA' !! RITIRATE I DADI ")
 
}



