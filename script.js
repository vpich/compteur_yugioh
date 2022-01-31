function playLetsDuel() {
  const letsDuelSound = new Audio("./sounds/lets_duel.mp3");
  letsDuelSound.play();
};

const dropLpSound = new Audio("./sounds/drop_lp.mp3");
dropLpSound.loop = true;

function playLpDropEnd() {
    const lpDropEndSound = new Audio("./sounds/lp_drop_end.mp3");
    lpDropEndSound.play();
};

function playLpToZero() {
    const lpToZero = new Audio("./sounds/lp_to_0.mp3");
    lpToZero.play();
};

//optionnel
function playTimeToDuel() {
    const timeToDuel = new Audio("./sounds/cest-lheure-du-dudududuel.mp3");
    timeToDuel.play();
}

let player1Name = document.getElementById('player1');
let player1_inputName = document.querySelector("#player1_name input");
let player1_inputNameParent = document.getElementById("player1_name");


player1_inputName.addEventListener("change", function(event) {
    if (event.target.value != "") {
        player1Name.innerHTML += ": <br>" + event.target.value;
        player1_inputNameParent.removeChild(player1_inputName);
    }
    //Rajouter de la mise en forme
});

let player2Name = document.getElementById('player2');
let player2_inputName = document.querySelector("#player2_name input");
let player2_inputNameParent = document.getElementById("player2_name");

player2_inputName.addEventListener("change", function(event) {
    if (event.target.value != "") {
        player2Name.innerHTML += ": <br>" + event.target.value;
        player2_inputNameParent.removeChild(player2_inputName);
    }
    //Rajouter de la mise en forme
});


//let changeBackground = document.getElementsByTagName('body');
//changeBackground.style.background = "autre background à mettre";


//Ci-dessous, le bloc pour le calcul des life-points du joueur 1


// Deplacer ce bout de code pour le reset à la fin
let btn_reset = document.getElementById("reset");
btn_reset.addEventListener("click", function() {
    //location.reload();
    player1_historiqueCalcul.innerHTML = "";
    player1_LifePoints.innerText = 8000;

    player2_historiqueCalcul.innerHTML = "";
    player2_LifePoints.innerText = 8000;

    playLetsDuel();

});

let player1_BtnPlus = document.querySelector('#article_player1 button.btn.btn-success');
let player1_LifePoints = document.querySelector('#article_player1 h2');
let player1_inputCalculator = document.querySelector('#article_player1 .calculateur input');
let player1_newInputCalculator;

player1_inputCalculator.addEventListener('input', function(e) {
    if (isNaN(e.target.value) || e.target.value == 0) {
        alert("Veuillez saisir un nombre entier.");
        return e.target.value = "";
    } else {
    player1_newInputCalculator = e.target.value;
    }
});

const player1_historiqueCalcul = document.getElementById("player1_historiqueCalcul");



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
          player1_BtnPlus.disabled = true;

          if (player1_LifePoints.innerText == player1_LifePointsModifier) {
                clearInterval(counter);
                player1_BtnPlus.disabled = false;
                dropLpSound.pause();
                dropLpSound.currentTime = 0;
                playLpDropEnd();
          }
        }, 10);

    }


player1_newInputCalculator = null;
player1_inputCalculator.value = "";

});

let player1_BtnMoins = document.querySelector('#article_player1 button.btn.btn-danger');

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
                    playLpToZero();
                } else {
                        clearInterval(counter);
                        player1_BtnMoins.disabled = false;
                        dropLpSound.pause();
                        dropLpSound.currentTime = 0;
                        playLpDropEnd();
                    }

          }

        }, 10);
    }

player1_newInputCalculator = null;
player1_inputCalculator.value = "";

});

let player1_BtnDivide = document.querySelector('#article_player1 button.btn.btn-warning');

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
                playLpDropEnd();
          }

        }, 10);
    }

player1_newInputCalculator = null;
player1_inputCalculator.value = "";

});




// Ci-dessous se trouvent les calculateurs pour le joueur 2

let player2_BtnPlus = document.querySelector('#article_player2 button.btn.btn-success');
let player2_LifePoints = document.querySelector('#article_player2 h2');
let player2_inputCalculator = document.querySelector('#article_player2 .calculateur input');
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
                playLpDropEnd();
          }
        }, 10);

    }


player2_newInputCalculator = null;
player2_inputCalculator.value = "";

});

let player2_BtnMoins = document.querySelector('#article_player2 button.btn.btn-danger');

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
                    playLpToZero();
                } else {
                        clearInterval(counter);
                        player2_BtnMoins.disabled = false;
                        dropLpSound.pause();
                        dropLpSound.currentTime = 0;
                        playLpDropEnd();
                    }

          }

        }, 10);
    }

player2_newInputCalculator = null;
player2_inputCalculator.value = "";

});

let player2_BtnDivide = document.querySelector('#article_player2 button.btn.btn-warning');

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
                playLpDropEnd();
          }

        }, 10);
    }

player2_newInputCalculator = null;
player2_inputCalculator.value = "";

});