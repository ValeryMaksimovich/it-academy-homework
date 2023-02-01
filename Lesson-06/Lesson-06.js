//Задание 6

// 1
let arr = [1, 2, 3, 4, 5, 6];
let stroka1 = (1 + 2 + 3);
let stroka2 = (4 + 5 +6);
if(stroka1 == stroka2) {
    console.log("YES");
}else if(stroka1 != stroka2) {console.log("NO")
    }

// 2
let a = 1000;
let num = 0;
while (a > 50) {
    console.log(a)
    num++
    a /= 2
};
console.log("Num равно: " + num)

// 3
const arr21 = [12, 15, 20, 25, 59, 79];
const getAverage = (numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i += 1) {
        sum += numbers[i];
    }
    return sum / numbers.length;
};
console.log(getAverage(arr21));

// 4
let array = [1, 2, 3, 4, 5];
array.splice(3,0,'a', 'b', 'c');
console.log(array);

// 5

let array2 = [1, 2, 3, 4, 5];
array2.splice(1,0,'a', 'b');
array2.splice(6,0,'c');
array2.splice(8,0,'e');
console.log(array2);

// 6
let arr11 = [3, 4, 1, 2, 7];
console.log(arr11.sort((a, b) => a - b));
