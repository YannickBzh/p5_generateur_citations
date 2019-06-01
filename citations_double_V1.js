//Création de la classe "Citations"
class Citations {
    constructor(citationa, citationb, citationc) {
      this.citationa = citationa
      this.citationb = citationb
      this.citationc = citationc
    }
  
    // Méthode qui permet de renvoyer de façon aléatoire les citations
    genererCitation() {
      return (
        this.citationa[Math.floor(Math.random() * this.citationa.length)] +
        this.citationb[Math.floor(Math.random() * this.citationb.length)] +
        this.citationc[Math.floor(Math.random() * this.citationc.length)]
      )
    }
  }
  
  // Création de l'objet "generateur1" (Instanciation)
  const generateur1 = new Citations(
    [
      "Au Festival des Vieilles Charrues ",
      "Au Hellfest à Clisson ",
      "Un jour à Garorock "
    ],
    [
      "ils ont mis du temps ",
      "il y a toujours des gars qui tiennent ",
      "les programmateurs nous ont incité "
    ],
    [
      "à trouver un distributeur d'eau.",
      "à montrer leur fesses.",
      "à aller voir Rammstein."
    ]
  )
  
  // Création de l'objet "generateur2" (Instanciation)
  const generateur2 = new Citations(
    ["A Las Vegas ", "Quand tu vas à Brest ", "En été à Bordeaux "],
    [
      "quand tu sors le soir ",
      "pas loin du centre ville ",
      "en passant sous un pont "
    ],
    [
      "il faut des lunettes de soleil.",
      "t'as vite fait de croiser un faux Elvis.",
      "tu peux entendre le chant des sirènes."
    ]
  )
  
  // Je demande le nom de l'utilisateur
  const nomUser = prompt("Bonjour ! Quel est votre prénom ?")
  
  // Je demande à l'utilisateur le type de citations à afficher
  let choixCitation = 0
  while (choixCitation !== 1 && choixCitation !== 2) {
    choixCitation = Number(
      prompt(
        `Enchanté ${nomUser}, quel type de citations voulez-vous ? Des citations sur les festivals, Tapez 1, des citations sur les villes, Tapez 2`
      )
    )
  }
  
  // Je demande à l'utilisateur le nombre de citations
  let nbCitationsUser = 0
  while (nbCitationsUser < 1 || nbCitationsUser > 3) {
    nbCitationsUser = Number(
      prompt("Saisissez un nombre de citations entre 1 et 3")
    )
  }
  // Si l'utilisateur choisi "1", les citations sont générées par l'objet "generateur1"
  if (choixCitation === 1) {
    for (let i = 0; i < nbCitationsUser; i++) {
      const citations = generateur1.genererCitation()
      console.log(citations)
    }
  // Si l'utilisateur choisi un autre chiffre, en l'occurence "2", les citations sont générées par l'objet "generateur2"
  } else {
    for (let i = 0; i < nbCitationsUser; i++) {
      const citations = generateur2.genererCitation()
      console.log(citations)
    }
  }