let player1Name = document.getElementById('player1');
let player1_inputName = document.querySelector("#player1_name input");
let player1_inputNameParent = document.getElementById("player1_name")

player1_inputName.addEventListener("change", function(event) {
    if (event.target.value != "") {
        player1Name.innerHTML = "Player 1: <br>" + event.target.value;
        player1_inputNameParent.removeChild(player1_inputName);
    }
    //Rajouter de la mise en forme
});

/*
let player2Name = document.getElementById('player2');
player2Name.innerHTML = "Nom rentré par l'utilisateur 2.";



const player1_name = document.createElement('div');
let input_player1 = document.getElementById("article_player1");
input_player1.removeChild(player1_name);

let changeBackground = document.getElementsByTagName('body');
//changeBackground.style.background = "autre background à mettre";

//Ci-dessous, le bloc pour le calcul des life-points du joueur 1
*/

// Deplacer ce bout de code pour le reset à la fin
let btn_reset = document.getElementById("reset");
btn_reset.addEventListener("click", function() {
    location.reload();
});

let player1_BtnPlus = document.querySelector('#article_player1 button.btn.btn-success');
let player1_LifePoints = document.querySelector('#article_player1 h2');
let player1_inputCalculator = document.querySelector('#article_player1 .calculateur input');
let player1_newInputCalculator;

player1_inputCalculator.addEventListener('input', function(e) {
    if (isNaN(e.target.value) || e.target.value == 0) {
        alert("Veuillez saisir un nombre entier.")
        return e.target.value = "";
    } else {
    player1_newInputCalculator = e.target.value;
    }
});

const player1_historiqueCalcul = document.getElementById("player1_historiqueCalcul");

player1_BtnPlus.addEventListener("click", function() {
    let player1_actualLifePoints = player1_LifePoints.textContent;
    let player1_LifePointsModifier = parseFloat(player1_actualLifePoints) + parseFloat(player1_newInputCalculator);

    player1_historiqueCalcul.innerHTML += `${player1_newInputCalculator} + ${player1_actualLifePoints} = ${player1_LifePointsModifier}\r`;

    let counter = setInterval(function() {
      player1_LifePoints.innerText++;
      player1_BtnPlus.disabled = true;

      if (player1_LifePoints.innerText == player1_LifePointsModifier) {
            clearInterval(counter);
            player1_BtnPlus.disabled = false;
      }
    }, 10);


});
