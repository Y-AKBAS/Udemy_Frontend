const player1 = {
    button: document.querySelector('#p1Button'),
    scoreDisplay: document.querySelector('#p1Score'),
    score: 0
}

const player2 = {
    button: document.querySelector('#p2Button'),
    scoreDisplay: document.querySelector('#p2Score'),
    score: 0
}

let isGameOver = false;
const resetButton = document.querySelector('#reset');
const winningScoreOption = document.querySelector('#winningScore');
let winningScore = parseInt(winningScoreOption.value);

function reset() {
    isGameOver = false;
    for (let player of [player1, player2]) {
        player.score = 0;
        player.scoreDisplay.textContent = '0';
        player.button.disabled = false;
        player.scoreDisplay.classList.remove('has-text-success', 'has-text-danger');
    }
}

function updateGame(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        player.scoreDisplay.textContent = player.score.toString();
        if (player.score === winningScore) {
            player.scoreDisplay.classList.add('has-text-success');
            opponent.scoreDisplay.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
            isGameOver = true;
        }
    }
}

winningScoreOption.addEventListener('change', () => {
    winningScore = parseInt(winningScoreOption.value);
    reset();
});

player1.button.addEventListener('click', () => {
    updateGame(player1, player2);
});

player2.button.addEventListener('click', () => {
    updateGame(player2, player1);
});

resetButton.addEventListener('click', reset);
