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
  if(prenomUser.value.length < 2){
    prenomMessage.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    return false
  }else{
    prenomMessage.innerText = ""; 
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
  if(nomUser.value.length < 2){
    nomMessage.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    return false;
  }else{
    nomMessage.innerText = "";
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
  if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailUser.value)){
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


// check si une checkbox est checkée 
function checkingArray(){
  let checkbox = document.querySelectorAll('.tab:checked'); 
  let checkboxConditionMessage = document.getElementById("checkBoxCondOption");
  if(checkbox.length === 0){   
    checkboxConditionMessage.innerText = "* Vous devez choisir une option.";
    console.log("vide")
    return false; 

  }else{   
    checkboxConditionMessage.innerText = "";
    console.log("pas vide")

  }
}

      // checkbox condition generale
const checkboxConditionUser = document.getElementById("checkbox1");

// Verifie si le checkbox est check
function checkboxConditionUtilisateur(){
  let checkboxConditionMessage = document.getElementById("checkBoxCondUtilisateur");
  if(checkboxConditionUser.checked){
    checkboxConditionMessage.innerText = "";
  } else{
    checkboxConditionMessage.innerText = "* Vous devez vérifier que vous acceptez les termes et conditions.";
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

  // check checkBox condition utilisateur
  let testCheckboxCondUti = checkboxConditionUtilisateur();
  if(testCheckboxCondUti == false){
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

// fermez avec le bouton fermer
let botomClose = document.getElementById("boutonFermer");
botomClose.addEventListener("click", function(e){
  affichageValider.style.display = "none";
});

// fermez les onglets avec la croix le formulaire
let closeIcone = document.getElementById("closeForm");
closeIcone.addEventListener("click", function(e){
  modalbg.style.display = "none";
});
// fermez les onglets avec la croix le message d'inscription
let closeIcone2 = document.getElementById("closeAffichage");
closeIcone2.addEventListener("click", function(e){
  affichageValider.style.display = "none";
});
