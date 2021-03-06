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

      // Prenom
const prenomUser = document.getElementById("first");

// Verifie le prenom passé dans le formulaire
function checkPrenom(){
  let prenomMessage = document.getElementById("prenom-validation");
  if(/^([a-z]{2,})$/.test(prenomUser.value)){
    prenomMessage.innerText = "";
  }else{
    prenomMessage.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du prénom."; 
    return false;
  }
}

// quand l'utilisateur écrit son prénom
prenomUser.addEventListener("input", function(e){
  checkPrenom();
});

     //  Nom
const nomUser  = document.getElementById("last");

// Verifie le nom passé dans le formulaire
function checkNom(){
  let nomMessage = document.getElementById("nom-validation");
  if(/^([a-z]{2,})$/.test(nomUser.value)){
    nomMessage.innerText = "";
  }else{
    nomMessage.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    return false;
  }
}

// quand l'utilisateur écrit son Nom
nomUser.addEventListener("input", function(e){
  checkNom();
});

      // email
const emailUser = document.getElementById("email");

// Verifie l'email passé dans le formulaire
function checkEmail(){
  let emailMessage = document.getElementById("email-validation");
  if(/^(([0-9a-z]{2,}))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailUser.value)){
    emailMessage.innerText = "";
  }else{
    emailMessage.innerText = "Veuiller saisir un mail "+'"'+" exemple : nom.prenom@gmail.com "+'" !';
    return false;
  }
}

// quand l'utilisateur écris son email
emailUser.addEventListener("input", function(e){
  checkEmail();
});

      // birthdate
const birthdateUser = document.getElementById("birthdate")

//verification de la date de naissance     
function checkBirthdate(){
  let birthdateMessage = document.getElementById("birthdate-valitaion");
  const date1 = new Date(); //date d'aujourd'hui
  const date2 = new Date(birthdateUser.value);
  
  if(date1 > date2){ //si la date est valide
    birthdateMessage.innerText = "";
  } else{ //si la date saisi est dans le future
    birthdateMessage.innerText = "Vous devez entrer votre date de naissance. Et ne doit pas être dans le futur.";
    return false;
  }
}
// quand l'utilisateur saisi ça date de naissance
birthdateUser.addEventListener("input", function(e){
  checkBirthdate();
});

//number of participation
let participationNumber = document.getElementById("quantity");

// chekc si il a mis un nombre de participation
function checkParticipation(){
  let messageParticipate = document.getElementById("participation-message");
  if(/^[0-9]*\d$/.test(participationNumber.value)){
    messageParticipate.innerText = "";
  }else{
    messageParticipate.innerText = "Vous devez ramplir se champ";
    return false;
  }
}
//
participationNumber.addEventListener("input", function(e){
  checkParticipation();
})
// check si une checkbox est checkée 
function checkingArray(){
  let radios = document.querySelectorAll('.tab:checked'); 
  let radioMessage = document.getElementById("radioList");
  if(radios.length === 0){   
    radioMessage.innerText = "* Vous devez choisir une option.";
    return false; 

  }else{   
    radioMessage.innerText = "";

  }
}

      // checkbox condition generale
// Verifie si le checkbox est check
function checkboxConditionUtilisateur(){
  let checkbox = document.getElementById("checkbox1");
  let chekboxMessage = document.getElementById("checkBoxCondUtilisateur")
  if(checkbox.checked){
    chekboxMessage.innerText = " "
  }else{
    chekboxMessage.innerText = "* Vous devez vérifier que vous acceptez les termes et conditions."
    return false;
  }

}

// DOM Elements
const affichageValider = document.getElementById("afficheInscriValider");

// Quand l'utilisateur submit le formulaire
function validate(){

  //declaration d'un booleen pour le test final
  let isValid = true;

  // check du prenom
  let testPrenom = checkPrenom();
  if(testPrenom == false){
    isValid = false;
  }

  // check du nom
  let testNom = checkNom();
  if(testNom == false){
    isValid = false;
  }

  // check du email
  let testEmail = checkEmail();
  if(testEmail == false){
    isValid = false;
  }

  // check du birthdate
  let testBirthdate = checkBirthdate();
  if(testBirthdate == false){
    isValid = false;
  }

  // check nombre de participation
  let testParticipation = checkParticipation();
  if(testParticipation == false){
    isValid = false;
  }

  // check checkBox condition utilisateur
  let testCheckbox = checkboxConditionUtilisateur();
  if(testCheckbox == false){
    isValid = false;
  }
  
  // contrôle qu'au moins une checkbox soit checkée
  let testCheckingArray = checkingArray();
  if(testCheckingArray == false){
    isValid = false;
  }

  // si mon formulaire est valide ...
  if(isValid){
    affichageValider.style.display = "block";
    modalbg.style.display = "none";
  }
  
  // pour éviter que le formulaire ne soit submit
  return false;

}


// function to close windows
function closeWindow(window){
window.style.display = "none";
}
// fermez avec le bouton fermer
let botomClose = document.getElementById("boutonFermer");
botomClose.addEventListener("click", function(e){
  closeWindow(affichageValider);
});

// fermez les onglets avec la croix le formulaire
let closeIcone = document.getElementById("closeForm");
closeIcone.addEventListener("click", function(e){
  closeWindow(modalbg);
});
// fermez les onglets avec la croix le message d'inscription
let closeIcone2 = document.getElementById("closeAffichage");
closeIcone2.addEventListener("click", function(e){
  closeWindow(affichageValider);
});