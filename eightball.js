let userName = ''
let name = userName

userName ?
    console.log(`Hello, ${name}!`) :
    console.log('Hello!');

let userQuestion = 'Am I admired?'
let question = userQuestion

console.log(question);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = ''

if (randomNumber === 0) {
    let eightBall = 'It is certain';
    console.log(eightBall);
} else if (randomNumber === 1) {
    let eightBall = 'It is decidely so';
    console.log(eightBall);
} else if (randomNumber === 2) {
    let eightBall = 'Reply hazy try again';
    console.log(eightBall);
} else if (randomNumber === 3) {
    let eightBall = 'Cannot predict now';
    console.log(eightBall);
} else if (randomNumber === 4) {
    let eightBall = 'Do not count on it';
    console.log(eightBall);
} else if (randomNumber === 5) {
    let eightBall = 'My sources say no';
    console.log(eightBall);
} else if (randomNumber === 6) {
    let eightBall = 'Outlook not so good';
    console.log(eightBall);
} else if (randomNumber === 7) {
    let eightBall = 'Signs point to yes';
    console.log(eightBall);
} else {
    let eightBall = 'You\re a bum...';
    console.log(eightBall);
}

/*
switch (randomNumber) {
    case 0:
        eightBall = 'It is certain'
        console.log(eightBall);
        break;
    case 1:
        eightBall = 'It is decidely so'
        console.log(eightBall);
        break;
    case 2:
        eightBall = 'Reply hazy try again'
        console.log(eightBall);
        break;
    case 3:
        eightBall = 'Cannot predict now'
        console.log(eightBall);
        break;
    case 4:
        eightBall = 'Do not count on it'
        console.log(eightBall);
        break;
    case 5:
        eightBall = 'My sources say no'
        console.log(eightBall);
        break;
    case 6:
        eightBall = 'Outlook not so good'
        console.log(eightBall);
        break;
    case 7:
        eightBall = 'Signs point to yes'
        console.log(eightBall);
        break;
    case 8:
        eightBall = 'You\re a bum...'
        console.log(eightBall);
}
*/