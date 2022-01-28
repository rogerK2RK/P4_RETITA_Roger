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
let isValid = true;

//Verifi le prenom
let prenomUser = document.getElementById("first");
prenomUser.addEventListener("input", function(e){
  let prenomMessage = document.getElementById("prenom-validation");
  if(prenomUser.value.length < 4){
    prenomMessage.innerText = "Nom invalide; Doit faire plus de 3 caractère";
    isValid = false;
  }else{
    prenomMessage.innerText = ""; 
  }
});

//Verifie le nom
let nomUser  = document.getElementById("last");
nomUser.addEventListener("input", function(e){
  let nomMessage = document.getElementById("nom-validation");
  if(nomUser.value.length < 4){
    nomMessage.innerText = "Nom invalide; Doit faire plus de 3 caractère";
    isValid = false;
  }else{
    nomMessage.innerText = "";
  }
});

//verifie le email
let emailUser = document.getElementById("email");
emailUser.addEventListener("input", function(e){
  let emailMessage = document.getElementById("email-validation");
  if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailUser.value)){
    emailMessage.innerText = "Valider";
  }else{
    emailMessage.innerText = "veuiller saisir un mail";
    isValid = false;
  }
});

//verification de la date de naissance
let jeuneUser = "28-01-2010";
let deadUser = "28-01-1922";
let birthdateUser = document.getElementById("birthdate");
birthdateUser.addEventListener("input", function(e){
  let birthdateMessage = document.getElementById("birthdate-valitaion");
  if(birthdateUser.value < jeuneUser){
    birthdateMessage.innerText = "Vous êtes trops jeune !";
    isValid = false;
  }else{
    birthdateMessage.innerText = " Vous avez l'âge pour participer !";
  }
})


//on récupère l'élément sur lequel on veut vérifier "exemple compter le nombre de lettre"
/*compteUtilisateur.nom = document.getElementById('last');
compteUtilisateur.prenom = document.getElementById('first');
compteUtilisateur.email = document.getElementById('email');
compteUtilisateur.dateNaissance = document.getElementById('birthdate');*/

