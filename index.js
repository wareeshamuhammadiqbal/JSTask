function reverseArray(arr) {
    return arr.reverse();
}


const smallArray = [1, 2, 3, 4, 5];
const reversedSmallArray = reverseArray(smallArray.slice());
console.log("Original array:", smallArray);
console.log("Reversed array:", reversedSmallArray);

const largeArray = Array.from({length: 20}, (_, i) => i + 1); // Array with numbers from 1 to 20
const reversedLargeArray = reverseArray(largeArray.slice());
console.log("Original array:", largeArray);
console.log("Reversed array:", reversedLargeArray);


// question5;

function isInRange(num1, num2) {
    const isNum1InRange = num1 >= 50 && num1 <= 99;
    const isNum2InRange = num2 >= 50 && num2 <= 99;
    return isNum1InRange || isNum2InRange;
}


console.log(isInRange(45, 55)); // true
console.log(isInRange(100, 150)); // false
console.log(isInRange(50, 99)); // true
console.log(isInRange(49, 50)); // true
console.log(isInRange(99, 100)); // true

// question2;

function filterNegativeNumbers(arr) {
    return arr.filter(num => num >= 0);
}

const testArray = [-10, 5, -3, 2, -1, 0, 4, -6];
const filteredArray = filterNegativeNumbers(testArray);
console.log("Original array:", testArray);
console.log("Filtered array:", filteredArray);


const anotherTestArray = [12, -45, 0, 23, -56, 78, -99];
const anotherFilteredArray = filterNegativeNumbers(anotherTestArray);
console.log("Original array:", anotherTestArray);
console.log("Filtered array:", anotherFilteredArray);

const noNegativeArray = [1, 2, 3, 4, 5];
const filteredNoNegativeArray = filterNegativeNumbers(noNegativeArray);
console.log("Original array:", noNegativeArray);
console.log("Filtered array:", filteredNoNegativeArray);


const allNegativeArray = [-1, -2, -3, -4, -5];
const filteredAllNegativeArray = filterNegativeNumbers(allNegativeArray);
console.log("Original array:", allNegativeArray);
console.log("Filtered array:", filteredAllNegativeArray);


// queston3;
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}

// Testing the function
console.log(countVowels("Hello World")); // 3
console.log(countVowels("JavaScript is fun")); // 5
console.log(countVowels("AEIOU aeiou")); // 10
console.log(countVowels("bcdfghjklmnpqrstvwxyz")); // 0
console.log(countVowels("The quick brown fox jumps over the lazy dog")); // 11

// question4;
function isPalindrome(str) {
   
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  
    const reversedStr = cleanedStr.split('').reverse().join('');
   
    return cleanedStr === reversedStr;
}


console.log(isPalindrome("kayak")); // true
console.log(isPalindrome("mom")); // true
console.log(isPalindrome("radar")); // true
console.log(isPalindrome("refer")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("No 'x' in Nixon")); // true
console.log(isPalindrome("Was it a car or a cat I saw")); // true
console.log(isPalindrome("12321")); // true
console.log(isPalindrome("12345")); // false