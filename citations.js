
// Aux festival des vieilles charrues, ils ont mis du temps, à trouver un distributeur d'eau.
// Au Hellfest à Clisson, il y a toujours des gars qui tiennent, à montrer leurs fesses.
// Un jour à Garorock, les programmateurs nous ont inciter, à aller voir Rammstein.

let citationDebut = ["Au Festival des Vieilles Charrues ", "Au Hellfest à Clisson ", "Un jour à Garorock "]
let citationMilieu = ["ils ont mis du temps ", "il y a toujours des gars qui tiennent ", "les programmateurs nous ont incité "]
let citationFin = ["à trouver un distributeur d'eau.", "à montrer leur fesses.", "à aller voir Rammstein."]

function genererCitationUne() {
  return citationDebut[Math.floor(Math.random() * citationDebut.length)];
}
function genererCitationDeux(){
  return citationMilieu[Math.floor(Math.random() * citationMilieu.length)];
}
function genererCitationTrois(){
  return citationFin[Math.floor(Math.random() * citationFin.length)];
}

    for(let i = 0; i < 3; i++){
	console.log("La citation est : " + genererCitationUne() + genererCitationDeux() + genererCitationTrois());
    }