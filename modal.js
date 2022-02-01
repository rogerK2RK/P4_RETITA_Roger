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
    prenomMessage.innerText = "Prénom doit faire plus de 3 caractère !";
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
    nomMessage.innerText = "Nom doit faire plus de 3 caractère !";
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
    isValid = false;
  }
});

//verification de la date de naissance 
const todayDate = new Date();
const oldDate = new Date("01,01,1922")
const birthdateUser = document.getElementById("birthdate");

birthdateUser.addEventListener("input", function(e){
  let birthdateMessage = document.getElementById("birthdate-valitaion");
  const date1 = todayDate;
  const date2 = new Date(birthdateUser.value);
  const date3 = oldDate;
  console.log(date2);
  if(date1 > date2 && date2 > date3){
    birthdateMessage.innerText = "";
  }else if(date1 < date2){
    birthdateMessage.innerText = "Impossiqle saisir une année qui est dans le futur";
    isValid = false;
  }else if( date2 < date3 ){
    birthdateMessage.innerText = "Vous êtes trop vieux !";
    isValid = false;
  }
});






/*function validation(valid){
if(){*/
