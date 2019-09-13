const typeCitationsValue = document.getElementById("citationTypeSelect") // Choix du type de citation
const nbCitationsValue = document.getElementById("nombreCitations") // Choix du nombre de citations
const generateBtn = document.getElementById("generate") // Sélection du bouton générer
const zoneText = document.getElementById("FormControlTextarea1") // Sélection du textarea

//Création de la classe "Citations"
class Citations {
  constructor(citationa, citationb, citationc) {
    this.citationa = citationa
    this.citationb = citationb
    this.citationc = citationc
  }

  // Méthode qui permet de renvoyer de façon aléatoire les citations
  genererCitation() {
    const debut = this.citationa[Math.floor(Math.random() * this.citationa.length)];
    const milieu = this.citationb[Math.floor(Math.random() * this.citationb.length)];
    const fin = this.citationc[Math.floor(Math.random() * this.citationc.length)];

    const citationFull = debut + milieu + fin;
    return citationFull;
  }

  showCitations(citationFull) {
    zoneText.innerHTML = citationFull;
  }
}

// Création de l'objet "generateur1" (Instanciation)
const generateur1 = new Citations(
  [
    "Au Festival des Vieilles Charrues ",
    "Au Hellfest à Clisson ",
    "À Garorock ",
    "Aux Eurockéennes ",
    "À Rock en Seine "
  ],
  [
    "on a mis du temps ",
    "il y a toujours des gars qui tiennent ",
    "les programmateurs nous ont incité ",
    "les tartiflettes nous obligent ",
    "le climat n'aide pas "
  ],
  [
    "à trouver un distributeur d'eau.",
    "à baisser le son de la musique.",
    "à aller voir Rammstein.",
    "à trouver des toilettes.",
    "à trouver l'âme soeur."
  ]
)

// Création de l'objet "generateur2" (Instanciation)
const generateur2 = new Citations(
  [
    "À Las Vegas ",
    "Si tu vas à Brest ",
    "En été à Bordeaux ",
    "À Paris ",
    "Sur les hauteurs de Saint-Jean-de-Luz ",
  ],
  [
    "quand tu sors le soir ",
    "pas loin du centre ville ",
    "en passant sous un pont ",
    "sans le vouloir ",
    "en septembre "
  ],
  [
    "il faut des lunettes de soleil.",
    "t'as vite fait de croiser un faux Elvis.",
    "tu peux entendre le chant des sirènes.",
    "les touristes affluent en masse.",
    "tu peux acheter de la contrefaçon."
  ]
)

// Je crée une constante pour sélectionner le bloc du DOM ayant pour ID "generateur"
const clickButton = document.getElementById("generateur");

// Au clic sur le bouton je demande à remplacer la classe "d-none" par la classe "d-block" sur l'élément ayant pour ID "generateur"
document.getElementById("button").addEventListener("click", function () {
  clickButton.classList.replace("d-none", "d-block");
});

// Je crée une constante pour sélectionner le bloc du DOM ayant pour ID "textarea"
const clickGenerer = document.getElementById("textarea");

// Au clic sur le bouton Générer je demande à remplacer la classe "d-none" par la classe "d-block" sur l'élément ayant pour ID "generate"
document.getElementById("generate").addEventListener("click", function () {
  clickGenerer.classList.replace("d-none", "d-block");
  clickGenerer.classList.add("d-flex"); // J'ajoute la classe d-flex sur l'élément ayant pour ID "textarea"
});

nbCitationsValue.addEventListener('click', function (e) {
  nbCitation = e.target.value
})

let nbCitation = 1

// J'écoute le bouton Générer
generateBtn.addEventListener("click", function () {
  let generatedCitation = ""
  if (typeCitationsValue.value === "festival") {
    for (i = 1; i <= nbCitation; i++) {
      generatedCitation += generateur1.genererCitation() + "\n";
    }
    generateur1.showCitations(generatedCitation)
  } else {
    for (i = 1; i <= nbCitation; i++) {
      generatedCitation += generateur2.genererCitation() + "\n";
    }
    generateur2.showCitations(generatedCitation)
  }
});