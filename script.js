/*let player1Name = document.getElementById('player1');
player1Name.innerHTML = "Nom rentré par l'utilisateur 1.";

let player2Name = document.getElementById('player2');
player2Name.innerHTML = "Nom rentré par l'utilisateur 2.";

let btn_reset = document.getElementById("reset");
btn_reset.addEventListener("click", function() {
    btn_reset.innerHTML = "C'est cliqué !";
});

const player1_name = document.createElement('div');
let input_player1 = document.getElementById("article_player1");
input_player1.removeChild(player1_name);

let changeBackground = document.getElementsByTagName('body');
//changeBackground.style.background = "autre background à mettre";

//Ci-dessous, le bloc pour le calcul des life-points du joueur 1
*/
let player1Name_BtnPlus = document.querySelector('#article_player1 button.btn.btn-success');
let player1_LifePoints = document.querySelector('#article_player1 h2');
let player1_inputCalculator = document.querySelector('#article_player1 .calculateur input');
let player1_newInputCalculator;

player1_inputCalculator.addEventListener('input', function(e) {
    /*if (Number.isNaN(e.target.value)) {
        return "coucou";
    } else { */
    player1_newInputCalculator = e.target.value;
    //}
});

player1Name_BtnPlus.addEventListener("click", function() {
    let player1_actualLifePoints = player1_LifePoints.textContent;
    let player1_LifePointsModifier = parseFloat(player1_actualLifePoints) + parseFloat(player1_newInputCalculator);
    player1_LifePoints.innerText = player1_LifePointsModifier;
    /*while (parseFloat(player1_actualLifePoints) < parseFloat(player1_LifePointsModifier)) {
        parseFloat(player1_actualLifePoints)++;
        player1_LifePoints.innerText = parseFloat(player1_actualLifePoints);
    }; */
});



let player2_name = document.createElement('div class="form-group" id="player2_name"');
let input_player2 = document.getElementById("article_player2");
input_player2.removeChild(player2_name);

