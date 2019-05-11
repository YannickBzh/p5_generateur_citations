
class Citations {
    constructor(citationa, citationb, citationc) {
        this.citationa = citationa;
        this.citationb = citationb;
        this.citationc = citationc;
    }

    genererCitation() {
        return this.citationa[Math.floor(Math.random() * this.citationa.length)]
            + this.citationb[Math.floor(Math.random() * this.citationb.length)]
            + this.citationc[Math.floor(Math.random() * this.citationc.length)]
    }
}

const generateur = new Citations(["Au Festival des Vieilles Charrues ", "Au Hellfest à Clisson ", "Un jour à Garorock "], ["ils ont mis du temps ", "il y a toujours des gars qui tiennent ", "les programmateurs nous ont incité "], ["à trouver un distributeur d'eau.", "à montrer leur fesses.", "à aller voir Rammstein."])

const citations = generateur.genererCitation()

console.log(citations)