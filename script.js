//Fonctions relatives à l'audio

const dropLpSound = new Audio("./sounds/drop_lp.mp3");
dropLpSound.loop = true;

function playAudio(audioPath) {
    let audioTitle = new Audio(audioPath);
    audioTitle.play();
};


//Activation/désactivation des boutons de calculs

const player1_BtnPlus = document.querySelector('#article_player1 button.btn.btn-success');
const player1_BtnMoins = document.querySelector('#article_player1 button.btn.btn-danger');
const player1_BtnDivide = document.querySelector('#article_player1 button.btn.btn-warning');
const player1_allCalculatorButtons = [player1_BtnPlus, player1_BtnMoins, player1_BtnDivide];

const player2_BtnPlus = document.querySelector('#article_player2 button.btn.btn-success');
const player2_BtnMoins = document.querySelector('#article_player2 button.btn.btn-danger');
const player2_BtnDivide = document.querySelector('#article_player2 button.btn.btn-warning');
const player2_allCalculatorButtons = [player2_BtnPlus, player2_BtnMoins, player2_BtnDivide];

function deactivateButtons(buttons) {
    for (button of buttons) {
        button.disabled = true;
    }
};

function activateButtons(buttons) {
    for (button of buttons) {
        button.disabled = false;
    }
};


//Saisie des noms des joueurs

let player1Name = document.getElementById('player1');
let player1_inputName = document.querySelector("#player1_name input");
let player1_inputNameParent = document.getElementById("player1_name");

let player2Name = document.getElementById('player2');
let player2_inputName = document.querySelector("#player2_name input");
let player2_inputNameParent = document.getElementById("player2_name");

function displayPlayersName(inputName, name, inputNameParent) {
    inputName.addEventListener("change", function(event) {
        if (event.target.value != "") {
            name.innerHTML += ": <br><em>" + event.target.value + "</em>";
            inputNameParent.removeChild(inputName);
        };
    });
};

displayPlayersName(player1_inputName, player1Name, player1_inputNameParent);
displayPlayersName(player2_inputName, player2Name, player2_inputNameParent);


//Récupération des inputs des points de vie

let player1_LifePoints = document.querySelector('#article_player1 h2');
let player1_inputCalculator = document.querySelector('#article_player1 .calculateur input');
let player1_newInputCalculator;

let player2_LifePoints = document.querySelector('#article_player2 h2');
let player2_inputCalculator = document.querySelector('#article_player2 .calculator input');
let player2_newInputCalculator;

function inputValue(e) {
    if (isNaN(e.target.value) || e.target.value == 0) {
        alert("Veuillez saisir un nombre entier.");
        return e.target.value = "";
    } else {
        return e.target.value;
    }
};

player1_inputCalculator.addEventListener('input', function(e) {
    player1_newInputCalculator = inputValue(e);
});

player2_inputCalculator.addEventListener('input', function(e) {
    player2_newInputCalculator = inputValue(e);
});


// Fonction qui effectuent les calculs des points de vie et modifient le compteur

function lpDropEnd(allCalculatorButtons) {
    activateButtons(allCalculatorButtons);
    dropLpSound.pause();
    dropLpSound.currentTime = 0;
    playAudio("./sounds/lp_drop_end.mp3");
};

function plusButtonCalcul(lifePoints, newInputCalculator, historiqueCalcul, allCalculatorButtons) {
    let actualLifePoints = lifePoints.textContent;
    let lifePointsModifier = parseInt(actualLifePoints) + parseInt(newInputCalculator);
    historiqueCalcul.innerHTML += `${actualLifePoints} + ${newInputCalculator} = ${lifePointsModifier}\r`;

    if (newInputCalculator == null) {
        alert("Veuillez remplir le champ avant de valider.");
    } else {
        dropLpSound.play();
        let counter = setInterval(function() {
          lifePoints.innerText++;
          deactivateButtons(allCalculatorButtons);

          if (lifePoints.innerText == lifePointsModifier) {
                clearInterval(counter);
                lpDropEnd(allCalculatorButtons);
          }
        }, 10);
    }
};

function moinsButtonCalcul(lifePoints, newInputCalculator, historiqueCalcul, allCalculatorButtons) {
    let actualLifePoints = lifePoints.textContent;
    let lifePointsModifier = parseInt(actualLifePoints) - parseInt(newInputCalculator);
    historiqueCalcul.innerHTML += `${actualLifePoints} - ${newInputCalculator} = ${lifePointsModifier}\r`;

    if (newInputCalculator == null) {
        alert("Veuillez remplir le champ avant de valider.");
    } else {
        dropLpSound.play();
        let counter = setInterval(function() {
          lifePoints.innerText--;
          deactivateButtons(allCalculatorButtons);

          if (lifePoints.innerText == lifePointsModifier || lifePoints.innerText <= 0) {
                if (lifePoints.innerText <= 0) {
                    clearInterval(counter);
                    activateButtons(allCalculatorButtons);
                    dropLpSound.pause();
                    dropLpSound.currentTime = 0;
                    playAudio("./sounds/lp_to_0.mp3");
                } else {
                        clearInterval(counter);
                        lpDropEnd(allCalculatorButtons);
                    }
          }
        }, 10);
    }
};

function divideButtonCalcul(lifePoints, newInputCalculator, historiqueCalcul, allCalculatorButtons) {
    let actualLifePoints = lifePoints.textContent;
    let lifePointsModifier = parseInt(actualLifePoints) / parseInt(newInputCalculator);
    historiqueCalcul.innerHTML += `${actualLifePoints} / ${newInputCalculator} = ${lifePointsModifier}\r`;

    if (newInputCalculator == null) {
        alert("Veuillez remplir le champ avant de valider.");
    } else {
        dropLpSound.play();
        let counter = setInterval(function() {
          lifePoints.innerText--;
          deactivateButtons(allCalculatorButtons);

          if (lifePoints.innerText == lifePointsModifier) {
                clearInterval(counter);
                lpDropEnd(allCalculatorButtons);
          }
        }, 10);
    }
};


//Calculs pour le joueur 1

const player1_historiqueCalcul = document.getElementById("player1_historiqueCalcul");

player1_BtnPlus.addEventListener("click", function() {
    plusButtonCalcul(player1_LifePoints, player1_newInputCalculator, player1_historiqueCalcul, player1_allCalculatorButtons);
    player1_newInputCalculator = null;
    player1_inputCalculator.value = "";
});

player1_BtnMoins.addEventListener("click", function() {
    moinsButtonCalcul(player1_LifePoints, player1_newInputCalculator, player1_historiqueCalcul, player1_allCalculatorButtons);
    player1_newInputCalculator = null;
    player1_inputCalculator.value = "";
});

player1_BtnDivide.addEventListener("click", function() {
    divideButtonCalcul(player1_LifePoints, player1_newInputCalculator, player1_historiqueCalcul, player1_allCalculatorButtons);
    player1_newInputCalculator = null;
    player1_inputCalculator.value = "";
});


// Calculs pour le joueur 2

const player2_historiqueCalcul = document.getElementById("player2_historiqueCalcul");

player2_BtnPlus.addEventListener("click", function() {
    plusButtonCalcul(player2_LifePoints, player2_newInputCalculator, player2_historiqueCalcul, player2_allCalculatorButtons);
    player2_newInputCalculator = null;
    player2_inputCalculator.value = "";
});

player2_BtnMoins.addEventListener("click", function() {
    moinsButtonCalcul(player2_LifePoints, player2_newInputCalculator, player2_historiqueCalcul, player2_allCalculatorButtons);
    player2_newInputCalculator = null;
    player2_inputCalculator.value = "";
});

player2_BtnDivide.addEventListener("click", function() {
    divideButtonCalcul(player2_LifePoints, player2_newInputCalculator, player2_historiqueCalcul, player2_allCalculatorButtons);
    player2_newInputCalculator = null;
    player2_inputCalculator.value = "";
});


//Footer

let btn_reset = document.getElementById("reset");
btn_reset.addEventListener("click", function() {
    player1_historiqueCalcul.innerHTML = "";
    player1_LifePoints.innerText = 8000;

    player2_historiqueCalcul.innerHTML = "";
    player2_LifePoints.innerText = 8000;

    playAudio("./sounds/lets_duel.mp3");

});

const timeToDuelBtn = document.querySelector("img");

timeToDuelBtn.addEventListener("click", function() {
    playAudio("./sounds/cest-lheure-du-dudududuel.mp3");
});