const title = document.querySelector('.title');

title.addEventListener('click', () => { clickTitle() })
const clickTitle = () => alert('Youre a bum');

const mainPage = document.querySelector('.mainPage');
const choosePlayer = document.querySelector('.choosePlayer');

window.onload = function hidePage() {
    if (mainPage.style.display === 'none') {
        mainPage.style.display = 'block';
    } else {
        mainPage.style.display = 'none';
    }
};

const bttnP = document.querySelector('.co1');

bttnP.addEventListener('click', () => { pChoice() })
const pChoice = () => choosePlayer.style.display = 'none';

bttnP.addEventListener('click', () => { pDone() })
const pDone = () => mainPage.style.display = 'block';

const bttnP2 = document.querySelector('.co2');

bttnP2.addEventListener('click', () => { pChoice2() })
const pChoice2 = () => choosePlayer.style.display = 'none';

bttnP2.addEventListener('click', () => { pDone2() })
const pDone2 = () => mainPage.style.display = 'block';

let player = 'player1'

const playerTurn = document.querySelector('.playerTurn');
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


