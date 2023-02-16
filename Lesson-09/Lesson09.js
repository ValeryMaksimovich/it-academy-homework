
// Урок 9

// Задача 1
function returnRandomNumber() {
    let result = Math.ceil(Math.random() * (5 - 1) + 1);
    console.log(result);
    return result;
}

    const promOne = new Promise((resolve, reject) => {
        const timeout = returnRandomNumber(1, 5);
        setTimeout(() => {
            resolve("First timeout")
        }, timeout * 1000)
    })

    const promTwo = new Promise((resolve, reject) => {
        const timeout = returnRandomNumber(1, 5);
        setTimeout(function () {
            resolve("Second timeout")
        }, timeout * 1000)
    })
    const promThree = new Promise((resolve, reject) => {
        const timeout = returnRandomNumber(1, 5);
        setTimeout(() => {
            resolve("Third timeout")
        }, timeout * 1000)
    })

    Promise.race([promOne, promTwo, promThree])
        .then((data) => {
        console.log(data)
    })

// Задача 2
function returnRandomNumber() {
    let result = Math.ceil(Math.random() * (5 - 1) + 1);
    console.log(result);
    return result;
}
async function returnNumberAfterTimeout(number, timeout = 300) {
    // setTimeout(() => {
        return number * number
    // }, timeout)
}
new Promise((resolve, reject) => {
    let num = returnRandomNumber(1, 5);
    console.log('1 - ', num)
    resolve(num);
})
    .then(async (number) => {
        let a = await returnNumberAfterTimeout(number)
        console.log('2 - ', a)
        return a;
})
    .then((numberOne) => {
        return returnNumberAfterTimeout(numberOne);
    })
    .then((numberTwo) =>{
        console.log('3 - ', numberTwo)
    })


// Задача 3

const promOne = getNumber1();
const promTwo = getNumber2();
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

    getRandomInRange(1, 5);
}
function getRandomInRange2(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

    getRandomInRange2(6, 10);
}

function getNumber1() {
    return new Promise(function(resolve){
        const result = getRandomInRange(1, 5)
        setTimeout(() => {
            resolve(result);
        }, 3000)
    });
}

function getNumber2() {
    return new Promise(function(resolve){
        const result = getRandomInRange2(6, 10);
        setTimeout(() => {
            resolve(result);
        }, 5000)
    });
}

async function showFunction() {
    const value1 = await promOne;
    const value2 = await promTwo
    console.log("Результат асинхронной операции:", value1 + value2);
}

showFunction()