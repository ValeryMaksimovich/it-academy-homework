// Задача 1
function rollDice() {
    let choice1 = Math.floor(Math.random() * 6) + 1;
    let choice2 = Math.floor(Math.random() * 6) + 1;
    let choice3 = Math.floor(Math.random() * 6) + 1;
    let choice4 = Math.floor(Math.random() * 6) + 1;
    let choice5 = Math.floor(Math.random() * 6) + 1;
    let choice6 = Math.floor(Math.random() * 6) + 1;
    let finalchoise=whoWin(choice1, choice2, choice3, choice4, choice5, choice6);
}
rollDice();
function whoWin(choice1, choice2, choice3, choice4, choice5, choice6) {
    let player1 = choice1 + choice3 + choice5;
    let player2 = choice2 + choice4 + choice6;
    let result=winner(player1, player2);
}

function winner(player1, player2) {
    if (player1 === player2) {
        console.log("Ничья");
    } else if (player1 < player2) {
        console.log("Выйграл 2-ой игрок");
    } else {
        console.log("Выйграл 1-ый игрок")
    }
}

// Задача 2
function Friday13 () {
    const currentDate = new Date();
    let count = 0;

    for (let d1 = new Date(2000, 0, 13); d1 <= currentDate; d1.setMonth(d1.getMonth()+1)){
        if (d1.getDay() === 5){
            count++
        }
    }
    return count;
}
console.log (Friday13())



// Задача 3
const integer = 15;
const iterations = 3;
const numbers = [];
let remainder = integer;

for (let i = 1; i <= iterations; i++) {
    if (i === iterations) {
        numbers.push(remainder);

        break;

    }
    const number = Math.round(Math.random() * remainder);
    numbers.push(number)
    remainder -= number;
}

const total = totalNumbers(numbers);

function totalNumbers(numbers) {
    return numbers.reduce((sum, value) => sum + value, 0);
}
console.log(numbers)

// Задача 3.1
const integer1 = 15;
const iterations1 = 3;
const numbers1 = [];
let remainder1 = integer1;

for (let i = 1; i <= iterations1; i++) {
    if (i === iterations1) {
        numbers1.push(Number(remainder1.toFixed(2)));

        break;

    }
    const number = Number((Math.random() * remainder1).toFixed(2));
    numbers1.push(number)
    remainder1 -= number;
}

const total = totalNumbers(numbers1);

function totalNumbers(numbers1) {
    return numbers1.reduce((sum, value) => sum + value, 0);
}
console.log(numbers1)