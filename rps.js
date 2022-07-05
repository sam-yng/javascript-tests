//
function vsComputer() {

    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        value = 'scissors';
    } else if (computerChoice === 1) {
        value = 'paper';
    } else if (computerChoice === 2) {
        value = 'rock';
    }

    let mePlay = prompt('rock, paper or scissors?')

    while (outcome === 'undecided' || 'tie' || 'loss') {

        if ((mePlay === 'rock') && (value === 'rock')) {
            outcome = 'tie';
            alert('Computer chose rock - try again');
        }
        else if ((mePlay === 'rock') && (value === 'paper')) {
            outcome = 'loss';
            alert('Computer chose paper - you lose');
        }
        else if ((mePlay === 'rock') && (value === 'scissors')) {
            outcome = 'win';
            alert('Computer chose scissors - you win');
        }
        else if ((mePlay === 'paper') && (value === 'rock')) {
            outcome = 'win';
            alert('Computer chose rock - you win');
        }
        else if ((mePlay === 'paper') && (value === 'paper')) {
            outcome = 'tie';
            alert('Computer chose paper - try again');
        }
        else if ((mePlay === 'paper') && (value === 'scissors')) {
            outcome = 'loss';
            alert('Computer chose scissors - you lose');
        }
        else if ((mePlay === 'scissors') && (value === 'rock')) {
            outcome = 'loss';
            alert('Computer chose rock - you lose');
        }
        else if ((mePlay === 'scissors') && (value === 'paper')) {
            outcome = 'win';
            alert('Computer chose paper - you win');
        }
        else if ((mePlay === 'scissors') && (value === 'scissors')) {
            outcome = 'tie';
            alert('Computer chose scissors - try again');
        }
        else {
            outcome = 'undecided'
            alert('incorrect input');
        }

    }
}