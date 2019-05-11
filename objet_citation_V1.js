
const citation = {

  citationa: ["Au Festival des Vieilles Charrues ", "Au Hellfest à Clisson ", "Un jour à Garorock "],
  citationb: ["ils ont mis du temps ", "il y a toujours des gars qui tiennent ", "les programmateurs nous ont incité "],
  citationc: ["à trouver un distributeur d'eau.", "à montrer leur fesses.", "à aller voir Rammstein."],

  
  genererCitationUne(){
    return this.citationa[Math.floor(Math.random() * this.citationa.length)];
  },
  genererCitationDeux(){
    return this.citationb[Math.floor(Math.random() * this.citationb.length)];
  },
  genererCitationTrois(){
    return this.citationc[Math.floor(Math.random() * this.citationc.length)];
  }
};

for(let i = 0; i < 3; i++){
  console.log("La citation est : " + citation.genererCitationUne() + citation.genererCitationDeux() + citation.genererCitationTrois());
}
