const p1Button = document.querySelector('#p1Button');
const p1Score = document.querySelector('#p1Score');
const p2Button = document.querySelector('#p2Button');
const p2Score = document.querySelector('#p2Score');
const resetButton = document.querySelector('#reset');
const winningScoreOption = document.querySelector('#winningScore');

let p1Num = 0;
let p2Num = 0;
let winningScore = parseInt(winningScoreOption.value);
let isGameOver = false;

console.log(winningScore);
function reset() {
    p1Num = 0;
    p2Num = 0;
    isGameOver = false;
    p1Score.textContent = 0;
    p2Score.textContent = 0;
}

winningScoreOption.addEventListener('change', () => {
    winningScore = parseInt(this.value);
    reset();
});

p1Button.addEventListener('click', () => {
    if (!isGameOver) {
        p1Score.textContent = ++p1Num;
        console.log(winningScore);
        if (p1Num === winningScore) {
            isGameOver = true;
        }
    }
});

p2Button.addEventListener('click', () => {
    if (!isGameOver) {
        p2Score.textContent = ++p2Num;
        if (p2Num === winningScore) {
            isGameOver = true;
        }
    }
});

resetButton.addEventListener('click', reset);
