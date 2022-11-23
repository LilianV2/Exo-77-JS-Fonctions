/* Voici un exemple de fonction retournant du texte, inspirez vous de cet exemple pour réaliser l'exercice */

function txtReturn() {
    return "J'aime le Javascript";
}

function backgroundSet(){
    return "magenta";
}

/* Ne modifiez pas le code suivant */

document.getElementById('container').innerHTML = txtReturn();
document.getElementById('container').style.background = backgroundSet();




