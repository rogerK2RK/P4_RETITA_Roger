function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//declaration d'un booleen pour le test final
let istValid = true;

//objet pour chaque utilisateur
class compteUtilisateur {
  constructor(nom, prenom, email, dateNaissance){
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.dateNaissance = dateNaissance;
  }

}

//on récupère l'élément sur lequel on veut vérifier "exemple compter le nombre de lettre"
/*compteUtilisateur.nom = document.getElementById('last');
compteUtilisateur.prenom = document.getElementById('first');
compteUtilisateur.email = document.getElementById('email');
compteUtilisateur.dateNaissance = document.getElementById('birthdate');*/

let unUtilisateur = new compteUtilisateur("RETITA", "Roger", "roger.retita@gmail.com", "10 mai 1999");
console.log(unUtilisateur);

//compter le nombre de lettre
function getLetterCount(nom, nombreCaractere){
 let nombre = nom.value.length;
 nombreCaractere.innerHTML = nombre;
 /*let totalLetters = 0;
 for (let word of nom){
   totalLetters += word.length;
 }
 console.log("le nom fait " + totalLetters + "lettre"  );
 if(totalLetters < 3){
  istValid = false;
  console.log("Veullez faire une saisie plus de 3 lettre");
}else{
 console.log("Votre saisi est valable");
}*/
}
getLetterCount(this.nom);
