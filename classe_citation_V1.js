
class Citations {
  constructor(citationa, citationb, citationc) {
    this.citationa = citationa;
    this.citationb = citationb;
    this.citationc = citationc;
  }
  
genererCitationUne(){
  return this.citationa[Math.floor(Math.random() * this.citationa.length)];
}
genererCitationDeux(){
  return this.citationb[Math.floor(Math.random() * this.citationb.length)];
}
genererCitationTrois(){
  return this.citationc[Math.floor(Math.random() * this.citationc.length)];
}  
}
 
const generateur = new Citations(["Au Festival des Vieilles Charrues ", "Au Hellfest à Clisson ", "Un jour à Garorock "], ["ils ont mis du temps ", "il y a toujours des gars qui tiennent ", "les programmateurs nous ont incité "], ["à trouver un distributeur d'eau.", "à montrer leur fesses.", "à aller voir Rammstein."])

for(let i = 0; i < 3; i++){
console.log(console.log("La citation est : " + generateur.genererCitationUne() + generateur.genererCitationDeux() + generateur.genererCitationTrois()));
}