// const score1 = document.querySelector('#playerOne');
// const score2 = document.querySelector('#playerTwo');
// const img = document.querySelector('img');
// const button = document.querySelectorAll('.button');

// const player1 = document.querySelector('#playerOneScored');
// const player2 = document.querySelector('#playerTwoScored');
// const reset = document.querySelector('#reset');

// one = 1;
// two = 1;



// player1.addEventListener('click', () => {
//     const plays = document.querySelector('select').value;
//     score1.textContent = `Player 1: ${one++}`;
//     if (one > plays && one > two) {
//         img.src = 'https://global-uploads.webflow.com/6007f8b630f7e5727bc2e10d/606ce701979e45338161a02e_606ce48e6ddcbf7d844b251b_Image%25204.png';
//         score1.style.color = 'green';
//         score1.style.fontWeight = 'bold';
//         player1.setAttribute('id', 'greyOut');
//         player2.setAttribute('id', 'greyOut');

//     }

// })

// player2.addEventListener('click', () => {
//     const plays = document.querySelector('select').value;
//     score2.textContent = `Player 2: ${two++}`;
//     if (two > plays && two > one) {
//         img.src = 'https://global-uploads.webflow.com/6007f8b630f7e5727bc2e10d/606ce701610ab1c24dd6cf48_606ce4851216c08883fdcfd2_Image%25203.png';
//         score2.style.color = 'green';
//         score2.style.fontWeight = 'bold';
//         player1.setAttribute('id', 'greyOut');
//         player2.setAttribute('id', 'greyOut');


//     }

// })

// reset.addEventListener('click', () => {
//     one = two = 1;
//     img.src = 'https://www.pngkey.com/png/detail/147-1477601_ping-pong-png-file-table-tennis-game-png.png';
//     score1.textContent = 'Player 1: 0';
//     score2.textContent = 'Player 2: 0';
//     score1.style.color = score2.style.color = 'black';
//     score1.style.fontWeight = score2.style.fontWeight = 'normal';
//     player1.removeAttribute('id', 'greyOut');
//     player2.removeAttribute('id', 'greyOut');
//     player1.setAttribute('id', 'playerOneScored');
//     player2.setAttribute('id', 'playerTwoScored');
// })

// my way above

// *******************************************************************************


// *******************************************************************************

// colts way below




// const p1Button = document.querySelector('#p1Button');
// const p2Button = document.querySelector('#p2Button');
// const resetButton = document.querySelector('#reset');
// const p1Display = document.querySelector('#p1Display');
// const p2Display = document.querySelector('#p2Display');
// const winningScoreSelect = document.querySelector('#playto');

// let p1Score = 0;
// let p2Score = 0;
// let winningScore = 3;
// let isGameOver = false;

// p1Button.addEventListener('click', () => {
//     if (!isGameOver) {
//         p1Score += 1;
//         if (p1Score === winningScore) {
//             isGameOver = true;
//             p1Display.classList.add('has-text-success');
//             p2Display.classList.add('has-text-danger');
//             p1Button.disabled = true;
//             p2Button.disabled = true;
//         }
//         p1Display.textContent = p1Score;

//     }
// })

// p2Button.addEventListener('click', () => {
//     if (!isGameOver) {
//         p2Score += 1;
//         if (p2Score === winningScore) {
//             isGameOver = true;
//             p1Display.classList.add('has-text-danger');
//             p2Display.classList.add('has-text-success');
//             p1Button.disabled = true;
//             p2Button.disabled = true;
//         }
//         p2Display.textContent = p2Score;

//     }
// })

// winningScoreSelect.addEventListener('change', function () {
//     winningScore = parseInt(this.value);
//     reset();
// })


// resetButton.addEventListener('click', reset)

// function reset() {
//     isGameOver = false;
//     p1Score = p2Score = 0;
//     p1Display.textContent = p2Display.textContent = 0;
//     p1Display.classList.remove('has-text-success', 'has-text-danger');
//     p2Display.classList.remove('has-text-success', 'has-text-danger');
//     p1Button.disabled = false;
//     p2Button.disabled = false;
// }





// const p1 = {
//     score: 0,
//     button: document.querySelector('#p1Button'),
//     display: document.querySelector('#p1Display')
// }

// const p2 = {
//     score: 0,
//     button: document.querySelector('#p2Button'),
//     display: document.querySelector('#p2Display')
// }


// const resetButton = document.querySelector('#reset');
// const winningScoreSelect = document.querySelector('#playto');
// let winningScore = 3;
// let isGameOver = false;

// function updateScores(player, opponent) {
//     if (!isGameOver) {
//         player.score += 1;
//         if (player.score === winningScore) {
//             isGameOver = true;
//             player.display.classList.add('has-text-success');
//             opponent.display.classList.add('has-text-danger');
//             player.button.disabled = true;
//             opponent.button.disabled = true;
//         }
//         player.display.textContent = player.score;

//     }

// }


// p1.button.addEventListener('click', () => {
//     updateScores(p1, p2);
// })

// p2.button.addEventListener('click', () => {
//     updateScores(p2, p1);
// })


// winningScoreSelect.addEventListener('change', function () {
//     winningScore = parseInt(this.value);
//     reset();
// })


// resetButton.addEventListener('click', reset)

// function reset() {
//     isGameOver = false;
//     for (let p of [p1, p2]) {
//         p.score = 0;
//         p.display.textContent = 0;
//         p.display.classList.remove('has-text-success', 'has-text-danger');
//         p.button.disabled = false;

//     }
// }












const p1 = {
    score: 0,
    display: document.querySelector('#p1Display'),
    button: document.querySelector('#p1Button')
}

const p2 = {
    score: 0,
    display: document.querySelector('#p2Display'),
    button: document.querySelector('#p2Button')
}

const resetButton = document.querySelector('#reset');
const winningScore = document.querySelector('#playto');
isGameOver = false;


function fight(player, opponent) {
    if (!isGameOver) {
        player.score++;
        if (player.score === parseInt(winningScore.value)) {
            isGameOver = true;
            player.display.classList.add('has-text-success',);
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = opponent.button.disabled = true;
        }
        player.display.innerText = player.score;
    }
}

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.innerText = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}

resetButton.addEventListener('click', reset);

winningScore.addEventListener('change', () => {
    reset();
})

p1.button.addEventListener('click', () => {
    fight(p1, p2);
})

p2.button.addEventListener('click', () => {
    fight(p2, p1);
})
