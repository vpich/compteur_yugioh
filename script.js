//
//Ci-dessous se trouvent toutes les fonctions relatives à l'audio
//

const dropLpSound = new Audio("./sounds/drop_lp.mp3");
dropLpSound.loop = true;

function playAudio(audioPath) {
    let audioTitle = new Audio(audioPath);
    audioTitle.play();
};

//
//Ci-dessous se trouve le code relatifs à l'activation/désactivation des boutons de calculs
//

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

//
//Ci-dessous se trouve le code pour la saisie des noms des joueurs
//

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

//
//Ci-dessous, le bloc pour le calcul des life-points du joueur 1
//

let player1_LifePoints = document.querySelector('#article_player1 h2');
let player1_inputCalculator = document.querySelector('#article_player1 .calculateur input');
let player1_newInputCalculator;

const player1_historiqueCalcul = document.getElementById("player1_historiqueCalcul");

player1_inputCalculator.addEventListener('input', function(e) {
    if (isNaN(e.target.value) || e.target.value == 0) {
        alert("Veuillez saisir un nombre entier.");
        return e.target.value = "";
    } else {
    player1_newInputCalculator = e.target.value;
    }
});

/*
function newInputCalculatorValue(inputCalculator, newInputCalculator) {
    inputCalculator.addEventListener('input', function(e) {
        if (isNaN(e.target.value) || e.target.value == 0) {
            alert("Veuillez saisir un nombre entier.");
            return e.target.value = "";
        } else {
        newInputCalculator = e.target.value;
        }
    });
};

newInputCalculatorValue(player1_inputCalculator, player1_newInputCalculator);

function plusCalcul(buttonPlus, lifePoints, inputCalculator, historiqueCalcul, newInputCalculator) {
    buttonPlus.addEventListener("click", function() {
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

                if(lifePoints.innerText == lifePointsModifier) {
                    clearInterval(counter);
                    activateButtons(allCalculatorButtons);
                    dropLpSound.pause();
                    dropLpSound.currentTime = 0;
                    playAudio("./sounds/lp_drop_end.mp3");
                };
            }, 10);
        };
        newInputCalculator = null;
        inputCalculator.value = "";
    });
};

plusCalcul(player1_BtnPlus, player1_LifePoints, player1_inputCalculator, player1_historiqueCalcul, player1_newInputCalculator);
*/

player1_BtnPlus.addEventListener("click", function() {
    let player1_actualLifePoints = player1_LifePoints.textContent;
    let player1_LifePointsModifier = parseFloat(player1_actualLifePoints) + parseFloat(player1_newInputCalculator);

    player1_historiqueCalcul.innerHTML += `${player1_actualLifePoints} + ${player1_newInputCalculator} = ${player1_LifePointsModifier}\r`;

    if (player1_newInputCalculator == null) {
        alert("Veuillez remplir le champ avant de valider.");
    } else {
        dropLpSound.play();
        let counter = setInterval(function() {
          player1_LifePoints.innerText++;
          deactivateButtons(player1_allCalculatorButtons);

          if (player1_LifePoints.innerText == player1_LifePointsModifier) {
                clearInterval(counter);
                activateButtons(player1_allCalculatorButtons);
                dropLpSound.pause();
                dropLpSound.currentTime = 0;
                playAudio("./sounds/lp_drop_end.mp3");
          }
        }, 10);

    }


player1_newInputCalculator = null;
player1_inputCalculator.value = "";

});


player1_BtnMoins.addEventListener("click", function() {
    let player1_actualLifePoints = player1_LifePoints.textContent;
    let player1_LifePointsModifier = parseFloat(player1_actualLifePoints) - parseFloat(player1_newInputCalculator);

    player1_historiqueCalcul.innerHTML += `${player1_actualLifePoints} - ${player1_newInputCalculator} = ${player1_LifePointsModifier}\r`;

    if (player1_newInputCalculator == null) {
        alert("Veuillez remplir le champ avant de valider.");
    } else {
        dropLpSound.play();
        let counter = setInterval(function() {
          player1_LifePoints.innerText--;
          player1_BtnMoins.disabled = true;

          if (player1_LifePoints.innerText == player1_LifePointsModifier || player1_LifePoints.innerText <= 0) {
                if (player1_LifePoints.innerText <= 0) {
                    clearInterval(counter);
                    player1_BtnMoins.disabled = false;
                    dropLpSound.pause();
                    dropLpSound.currentTime = 0;
                    playAudio("./sounds/lp_to_0.mp3");
                } else {
                        clearInterval(counter);
                        player1_BtnMoins.disabled = false;
                        dropLpSound.pause();
                        dropLpSound.currentTime = 0;
                        playAudio("./sounds/lp_drop_end.mp3");
                    }

          }

        }, 10);
    }

player1_newInputCalculator = null;
player1_inputCalculator.value = "";

});


player1_BtnDivide.addEventListener("click", function() {
    let player1_actualLifePoints = player1_LifePoints.textContent;
    let player1_LifePointsModifier = parseFloat(player1_actualLifePoints) / parseFloat(player1_newInputCalculator);

    player1_historiqueCalcul.innerHTML += `${player1_actualLifePoints} / ${player1_newInputCalculator} = ${player1_LifePointsModifier}\r`;

    if (player1_newInputCalculator == null) {
        alert("Veuillez remplir le champ avant de valider.");
    } else {
        dropLpSound.play();
        let counter = setInterval(function() {
          player1_LifePoints.innerText--;
          player1_BtnDivide.disabled = true;

          if (player1_LifePoints.innerText == player1_LifePointsModifier) {
                clearInterval(counter);
                player1_BtnDivide.disabled = false;
                dropLpSound.pause();
                dropLpSound.currentTime = 0;
                playAudio("./sounds/lp_drop_end.mp3");
          }

        }, 10);
    }

player1_newInputCalculator = null;
player1_inputCalculator.value = "";

});


//
// Ci-dessous se trouvent les calculateurs pour le joueur 2
//

let player2_LifePoints = document.querySelector('#article_player2 h2');
let player2_inputCalculator = document.querySelector('#article_player2 .calculator input');
let player2_newInputCalculator;

player2_inputCalculator.addEventListener('input', function(e) {
    if (isNaN(e.target.value) || e.target.value == 0) {
        alert("Veuillez saisir un nombre entier.")
        return e.target.value = "";
    } else {
    player2_newInputCalculator = e.target.value;
    }
});

const player2_historiqueCalcul = document.getElementById("player2_historiqueCalcul");


player2_BtnPlus.addEventListener("click", function() {
    let player2_actualLifePoints = player2_LifePoints.textContent;
    let player2_LifePointsModifier = parseFloat(player2_actualLifePoints) + parseFloat(player2_newInputCalculator);

    player2_historiqueCalcul.innerHTML += `${player2_actualLifePoints} + ${player2_newInputCalculator} = ${player2_LifePointsModifier}\r`;

    if (player2_newInputCalculator == null) {
        alert("Veuillez remplir le champ avant de valider.");
    } else {
        dropLpSound.play();
        let counter = setInterval(function() {
          player2_LifePoints.innerText++;
          player2_BtnPlus.disabled = true;

          if (player2_LifePoints.innerText == player2_LifePointsModifier) {
                clearInterval(counter);
                player2_BtnPlus.disabled = false;
                dropLpSound.pause();
                dropLpSound.currentTime = 0;
                playAudio("./sounds/lp_drop_end.mp3");
          }
        }, 10);

    }


player2_newInputCalculator = null;
player2_inputCalculator.value = "";

});


player2_BtnMoins.addEventListener("click", function() {
    let player2_actualLifePoints = player2_LifePoints.textContent;
    let player2_LifePointsModifier = parseFloat(player2_actualLifePoints) - parseFloat(player2_newInputCalculator);

    player2_historiqueCalcul.innerHTML += `${player2_actualLifePoints} - ${player2_newInputCalculator} = ${player2_LifePointsModifier}\r`;

    if (player2_newInputCalculator == null) {
        alert("Veuillez remplir le champ avant de valider.");
    } else {
        dropLpSound.play();
        let counter = setInterval(function() {
          player2_LifePoints.innerText--;
          player2_BtnMoins.disabled = true;

          if (player2_LifePoints.innerText == player2_LifePointsModifier || player2_LifePoints.innerText <= 0) {
                if (player2_LifePoints.innerText <= 0) {
                    clearInterval(counter);
                    player2_BtnMoins.disabled = false;
                    dropLpSound.pause();
                    dropLpSound.currentTime = 0;
                    playAudio("./sounds/lp_to_0.mp3");
                } else {
                        clearInterval(counter);
                        player2_BtnMoins.disabled = false;
                        dropLpSound.pause();
                        dropLpSound.currentTime = 0;
                        playAudio("./sounds/lp_drop_end.mp3");
                    }

          }

        }, 10);
    }

player2_newInputCalculator = null;
player2_inputCalculator.value = "";

});


player2_BtnDivide.addEventListener("click", function() {
    let player2_actualLifePoints = player2_LifePoints.textContent;
    let player2_LifePointsModifier = parseFloat(player2_actualLifePoints) / parseFloat(player2_newInputCalculator);

    player2_historiqueCalcul.innerHTML += `${player2_actualLifePoints} / ${player2_newInputCalculator} = ${player2_LifePointsModifier}\r`;

    if (player2_newInputCalculator == null) {
        alert("Veuillez remplir le champ avant de valider.");
    } else {
        dropLpSound.play();
        let counter = setInterval(function() {
          player2_LifePoints.innerText--;
          player2_BtnDivide.disabled = true;

          if (player2_LifePoints.innerText == player2_LifePointsModifier) {
                clearInterval(counter);
                player2_BtnDivide.disabled = false;
                dropLpSound.pause();
                dropLpSound.currentTime = 0;
                playAudio("./sounds/lp_drop_end.mp3");
          }

        }, 10);
    }

player2_newInputCalculator = null;
player2_inputCalculator.value = "";

});

//
//Footer
//

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