// Task #1 (понял, сам сделал)
function multiply(a, b, c) {
    return a * b * c;
}
console.log(multiply(1, 2, 3));



//  Task #2 (код спер, не понимаю)
function reverseString(str) {
    let newstr = "";
    for(let i = str.length; i--; ){
        newstr += str[i];
    }return newstr;
}
console.log(reverseString("test"));



// Task #3 (код спер, не понимаю)
let str = "hello";
let str2 = "104 101 108 108 111";
function getCodeStringFromText(str) {
    let newStr = "";
    if (!isNaN(parseInt(str))){
        let arr = str.split(" ");
        for (let j = 0; j < arr.length; j++) {
            let arr2 = parseInt(arr[j]);
            newStr += String.fromCharCode(arr2);
        }
    } else {
        for (let i = 0; i < str.length; i++) {
            newStr += str.charCodeAt(i) + " ";
        }
    }
    return newStr;
}
console.log(getCodeStringFromText(str));



// Task #4 (понял, сам сделал)
// value = Math.floor(Math.random() * 10 + 1);

const arr = ['You lose', 'You lose', 'You lose', 'You lose', 'You lose', 'You lose', 'You win', 'You lose', 'You lose', 'You lose', 'You lose'];
value = Math.floor(Math.random() * arr.length);
console.log(value, arr[value]);


// Task #5
let N = 10; 
Array.apply(null, {length: N}).map(Number.call, Number)

console.log(N);