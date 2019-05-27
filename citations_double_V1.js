class Citations {
    constructor(citationa, citationb, citationc) {
        this.citationa = citationa;
        this.citationb = citationb;
        this.citationc = citationc;
    }

    genererCitation1() {
        return this.citationa[Math.floor(Math.random() * this.citationa.length)]
            + this.citationb[Math.floor(Math.random() * this.citationb.length)]
            + this.citationc[Math.floor(Math.random() * this.citationc.length)]
    }
    genererCitation2() {
        return this.citationa[Math.floor(Math.random() * this.citationa.length)]
            + this.citationb[Math.floor(Math.random() * this.citationb.length)]
            + this.citationc[Math.floor(Math.random() * this.citationc.length)]
    }
}
const generateur1 = new Citations(["Au Festival des Vieilles Charrues ", "Au Hellfest à Clisson ", "Un jour à Garorock "], ["ils ont mis du temps ", "il y a toujours des gars qui tiennent ", "les programmateurs nous ont incité "], ["à trouver un distributeur d'eau.", "à montrer leur fesses.", "à aller voir Rammstein."])
const generateur2 = new Citations(["A Las Vegas ", "Quand tu vas à Brest ", "En été à Bordeaux "], ["quand tu sors le soir ", "pas loin du centre ville ", "en passant sous un pont "], ["il faut des lunettes de soleil.", "t'as vite fait de croiser un faux Elvis.", "tu peux entendre le chant des sirènes."])

let nomUser = prompt("Bonjour ! Quel est votre prénom ?")
let choixCitation = prompt(`Enchanté ${nomUser}, quel type de citation voulez-vous ? Des citations sur les festivals, Tapez 1, des citations sur les villes, Tapez 2`)
let nbCitationsUser = Number(prompt(`Saisissez un nombre de citations entre 1 et 3 `))


while (choixCitation < 1 || choixCitation > 2)  {
  choixCitationUser = Number(prompt("Ce nombre n'est pas dans les choix proposés :) Entrez 1 pour les festivals, 2 pour les villes"))
} while (nbCitationsUser < 1 || nbCitationsUser > 3) {
  nbCitationsUser = Number(prompt("Ce nombre n'est pas compris entre 1 et 3 :) Entrez un nombre entre 1 et 3"))
} if (choixCitation === 1 && nbCitationsUser >= 1 || nbCitationsUser <= 3) {
   for(let i = 0; i < nbCitationsUser; i++){
    const citations1 = generateur1.genererCitation1()
    console.log(generateur1.genererCitation1())
}
} else if (choixCitation === 2 && nbCitationsUser >= 1 || nbCitationsUser <= 3) {
  for(let i = 0; i < nbCitationsUser; i++){
    const citations2 = generateur2.genererCitation2()
    console.log(generateur2.genererCitation2())
  }
 }