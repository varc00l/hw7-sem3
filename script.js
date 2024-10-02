let numbers = [1, 2, 3];
numbers[1] = 10;
console.log(numbers);

let strings = ["один", "два", "три"];
strings.push("чотири");
console.log(strings);

let arr = [5, 10, 15];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log("Сума: " + sum); 

let array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

let words = ["яблуко", "банан", "автомобіль", "ліс", "комп'ютер"];
for (let i = 0; i < words.length; i++) {
    if (words[i].length > 5) {
        console.log(words[i]);
    }
}

let numArray = [5, 8, 3, 12, 15, 7, 1, 18, 2, 10];
let max = numArray[0];

for (let i = 1; i < numArray.length; i++) {
    if (numArray[i] > max) {
        max = numArray[i];
    }
}
console.log("Максимальне значення: " + max); 

let numArr = [5, 8, 3, 12, 15, 7, 1, 18, 2, 10];
for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 === 0) {
        console.log(numArr[i]);
    }
}
