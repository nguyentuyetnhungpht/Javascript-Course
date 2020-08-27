/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, roundScore, activePlayer, isGameRunning;
init();

document.querySelector('.btn-roll').addEventListener('click', function(){
    if (isGameRunning){
        //1. Random number
        var dice_1 = Math.floor((Math.random() * 6) + 1);
        var dice_2 = Math.floor((Math.random() * 6) + 1);
        //2.Display result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice_1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice_2 + '.png';
        //3.Update roundScore IF roll not a 1
        if (dice_1 != 1 && dice_2 != 1){
            //update score
            roundScore = roundScore + dice_1 + dice_2;
            document.getElementById('current-'+activePlayer).textContent = roundScore;
        }
        else{
            //next player
            nextPlayer();
        }
    }
})

document.querySelector('.btn-hold').addEventListener('click', function(){
    if (isGameRunning){
        // Add CURRENT score to GLOBAL score
        score[activePlayer] += roundScore;
        //Update the UI
        document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];

        var winningScore;
        var input = document.querySelector('.final-score').value;
        if (input && input > 0){
            winningScore = input;
        } else {
            winningScore = 100;
            document.querySelector('.final-score').value = '100';
        }
        //Check if player won
        if (score[activePlayer] >= winningScore){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!'
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            isGameRunning = false;
        }
        else {
            //Next player
            nextPlayer();
        }
    }
})

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = roundScore;
    document.getElementById('current-1').textContent = roundScore;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click',  init)

function init(){
    score = [0,0];
    roundScore= 0;
    activePlayer = 0;
    isGameRunning = true;

    document.querySelector('.final-score').value = 100;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}