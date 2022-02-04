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

const prenomUser = document.getElementById("first");
// Verifie le prenom passé dans le formulaire
function checkPrenom(){

  let prenomMessage = document.getElementById("prenom-validation");

  if(prenomUser.value.length < 2){
    prenomMessage.innerText = "Le prénom doit faire plus de 2 caractères !";
    return false
  }else{
    prenomMessage.innerText = "oups"; 
  }

}

// quand l'utilisateur écrit son prénom
prenomUser.addEventListener("input", function(e){
  checkPrenom();
});

//Verifie le nom
/*let nomUser  = document.getElementById("last");
nomUser.addEventListener("input", function(e){
  let nomMessage = document.getElementById("nom-validation");
  if(nomUser.value.length < 2){
    nomMessage.innerText = "Nom doit faire au moins 2 caractères !";
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
    emailMessage.innerText = "";
  }else{
    emailMessage.innerText = "veuiller saisir un mail "+'"'+" exemple : nom.prenom@gmail.com "+'" !';
    isValid = !isValid;
  }
});

let birthdateUser = document.getElementById("birthdate")
//verification de la date de naissance         
birthdateUser.addEventListener("input", function(e){
  let birthdateMessage = document.getElementById("birthdate-valitaion");
  const date1 = new Date(); //date d'aujourd'hui
  const date2 = new Date(birthdateUser.value);
  const date3 = new Date("01,01,1922"); //pour vérifier si il a plus de 100 ans 

  if(date1 > date2 && date2 > date3){ //si la date est valide
    birthdateMessage.innerText = "";
  }else if(date1 < date2){ //si la date saisi est dans le future
    birthdateMessage.innerText = "Veuillez saisir une date qui n'est pas dans le futur";
    isValid = false;
  }else if( date2 < date3 ){ //si la date est trop vieux
    birthdateMessage.innerText = "Vous êtes trop vieux !";
    isValid = false;
  }
});*/

// DOM Elements
const affichageValider = document.getElementById("afficheInscriValider");
const boutonValider = document.getElementById("boutonInscription");


// Quand l'utilisateur submit le formulaire
function validate(){

  //declaration d'un booleen pour le test final
  let isValid = true;
  console.log("avant"+isValid);
  // check du prenom
  let testPrenom = checkPrenom();
  if(testPrenom == false){
    console.log(isValid);
    isValid = false;
  }
  console.log("après"+isValid);
  // contrôle qu'au moins une checkbox soit checkée
  // chercher sur Google comment faire pour savoir un si une checkbox est checkée parmi une liste de checkbox

  // si mon formulaire est valide ...
  if(isValid){
    affichageValider.style.display = "block";
    modalbg.style.display = "none";
  }else{
    console.log("pas bon")
  }
  
  // pour éviter que le formulaire ne soit submit
  return false;

}