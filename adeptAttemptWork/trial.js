const title = document.querySelector('.title');

const playerTurn = document.querySelector('.playerTurn');

function clickTitle() {
    alert('Youre a bum');
}

title.addEventListener('click', () => { clickTitle() });

let player = 'player1'

playerTurn.innerHTML = 'Player 1:';

const boxss = document.querySelectorAll('.cell').forEach(box => {
    box.addEventListener('click', function clickButton(event) {
        if (player === 'player1') {
            event.target.style.backgroundColor = 'turquoise';
            playerTurn.innerHTML = 'Player 2:';
            player = 'player2';
        } else if (player === 'player2') {
            event.target.style.backgroundColor = 'pink';
            playerTurn.innerHTML = 'Player 1:';
            player = 'player1';
        }
    });
});


/*
const box0 = document.querySelector('#box0');
const box1 = document.querySelector('#box1');
const box2 = document.querySelector('#box2');
const box3 = document.querySelector('#box3');
const box4 = document.querySelector('#box4');
const box5 = document.querySelector('#box5');
const box6 = document.querySelector('#box6');
const box7 = document.querySelector('#box7');
const box8 = document.querySelector('#box8');
*/