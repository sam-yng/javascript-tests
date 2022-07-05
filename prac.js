/* link html to java script
<script src="../JavaPractice/prac.js"></script>
*/

function indulgingPatrician() {

    let stepDeclaration = prompt('Are you in your end step')

    if (stepDeclaration === 'yes') {

        let lifeGained = prompt('How much life was gained this turn?');

        if (lifeGained >= 3) {
            alert('Each opponent loses 3 life');
        } else {
            alert('End of turn');
        }

    } else if (stepDeclaration === 'no') {
        alert('Hurry up then')
        alert('Also you/re  shit')
    } else {
        alert('Huh?')
    }
}

function samSaysHi(author, text) {
    author = 'Sam';
    text = "Fuck you";
    alert(author + ': ' + text)
}

// Odin part 3 tasks
function add7(a, b) {
    return a + b;
}

let result = add7(1, 7)

//arrow function version of^
let add = (a, b) => a + b;

console.log(add(1, 7));

//
function multiply(a, b) {
    return a * b
}

let result2 = multiply(2, 4);

//
function capitalize(comment) {
    const firstLetter = comment[0];
    const restOfThem = comment.substr(1);
    return firstLetter.toUpperCase() + restOfThem;
}

let comment = 'this is a string'

console.log(capitalize(comment));

// switch
let bum = 'Jackson';

switch (bum) {
    case 'Tom':
        console.log('Tom is a bum');
        break;
    case 'Jackson':
        console.log('Jackson is a bum');
        break;
    case 'Adam':
        console.log('Adam is a bum');
        break;
    default:
        console.log('We all bums');
}

/*
let answer = parseInt(prompt("Please enter a number: "));

if (answer === 3) {
    alert('fizz');
} else if (answer === 5) {
    alert('buzz')
} else {
    alert(answer);
}
*/

// FizzBuzz - problem solving - task
// step 1
let answer = parseInt(prompt("Please enter a number: "));

for (let i = 1; i <= answer; i++) {
    console.log(i);
}

// step 2
for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i);
    }
}

// step 3
for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// while loop
let condition = 0

while (condition < 5) {
    alert(condition);
    condition++;
}

// array
const friends = ['Adam', 'Jackson', 'Tom'];
//array that assigns values
const enemies = new Array('Jeff', 'Larry', 'Tim');

//access an array element
let friend = friends[0];