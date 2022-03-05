// 1) Do the below programs in anonymous function & IIFE
// (a)Print odd numbers in an array

//          Anonymous                  

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let odd = function (array) {
    let oddNum = [];
    for (let i in array) {
        if (array[i] % 2 !== 0) {
            oddNum.push(array[i]);
        }
    }
    return oddNum;
}
console.log(odd(num));
// Output: [1, 3, 5, 7, 9]

//          IIFE

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
(function (array) {
    let oddNum = [];
    for (let i in array) {
        if (array[i] % 2 !== 0) {
            oddNum.push(array[i]);
        }
    }
    console.log(oddNum);
})(num)
// Output: [1, 3, 5, 7, 9]


// (b)Convert all the strings to title caps in a string array

//          Anonymous

let titleCase = function (str) {
    str = str.toLowerCase();
    str = str.split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
console.log(titleCase("The purpose of our lives is to be happy"));
// Output: The Purpose Of Our Lives Is To Be Happy

//          IIFE

(function (str) {
    str = str.toLowerCase();
    str = str.split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    console.log(str.join(' '));
})("The purpose of our lives is to be happy")
// Output: The Purpose Of Our Lives Is To Be Happy


// (c)Sum of all numbers in an array

//          Anonymous

var num = [1, 2, 3, 4, 5, 6, 7, 8];
var sum = function (arr) {
    var ans = 0;
    for (let i in arr) {
        ans += arr[i];
    }
    return ans;
}
console.log(sum(num));
// Output: 36

//          IIFE

var num = [1, 2, 3, 4, 5, 6, 7, 8];
(function (arr) {
    var ans = 0;
    for (let i in arr) {
        ans += arr[i];
    }
    console.log(ans);
})(num)
// Output: 36


// (d)Return all the prime numbers in an array

//          Anonymous

var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
let isPrime = function (num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return num > 1;
}
console.log(numArray.filter(isPrime));
// Output: [2, 3, 5, 7, 11, 13]

//          IIFE

var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
var output = numArray.filter(function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return num > 1;
})
console.log(output);
// Output: [2, 3, 5, 7, 11, 13]


// (e)Return all the palindromes in an array

//          Anonymous

var array = ['civic', 'kayak', 'ever', 'level', 'not', 'rotor']
let checkPolindromes = function (arr) {
    let palindrome = [];
    for (let i in arr) {
        let str = arr[i];
        let strReverse = arr[i].split("").reverse().join("");
        if (str === strReverse) {
            palindrome.push(str);
        }
    }
    return palindrome;
}
console.log(checkPolindromes(array));
// Output: ['civic', 'kayak', 'level', 'rotor']

//          IIFE

var array = ['civic', 'kayak', 'ever', 'level', 'not', 'rotor'];
(function (arr) {
    let palindrome = [];
    for (let i in arr) {
        let str = arr[i];
        let strReverse = arr[i].split("").reverse().join("");
        if (str === strReverse) {
            palindrome.push(str);
        }
    }
    console.log(palindrome);
})(array)
// Output: ['civic', 'kayak', 'level', 'rotor']


// (f)Return median of two sorted arrays of same size

//          Anonymous

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [1, 2, 3, 4, 5];
let median = function (arr1, arr2) {
    let medianArray = [];
    for (let i = 0; i < arr1.length; i++) {
        let median = (arr1[i] + arr2[i]) / 2;
        medianArray.push(median);
    }
    return medianArray;
}
console.log(median(arr1, arr2));
// Output: [1, 2, 3, 4, 5]

//          IIFE

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [1, 2, 3, 4, 5];
(function (arr1, arr2) {
    let medianArray = [];
    for (let i = 0; i < arr1.length; i++) {
        let median = (arr1[i] + arr2[i]) / 2;
        medianArray.push(median);
    }
    console.log(medianArray);
})(arr1, arr2)
// Output: [1, 2, 3, 4, 5]


// (g)Remove duplicates from an array

//          Anonymous

var arr = ['a', 'b', 'c', 'a', 'd', 'e', 'e'];
let remoDupl = function (data) {
    return [...new Set(data)]
}
console.log(remoDupl(arr))
// Output: ['a', 'b', 'c', 'd', 'e']

//          IIFE

var arr = ['a', 'b', 'c', 'a', 'd', 'e', 'e'];
(function (data) {
    console.log([...new Set(data)]);
})(arr)
// Output: ['a', 'b', 'c', 'd', 'e']


// (h) Rotate an array by k times

//          Anonymous

var rotate = function (arr, numberOfShifts) {
    let tmp = 0;
    const leng = arr.length;
    numberOfShifts = numberOfShifts % leng;
    for (let i = 0; i < numberOfShifts; i++) {
        tmp = arr.pop();
        arr.unshift(tmp);
    }
    return arr;
};
console.log(rotate([1, 2, 3, 4, 5], 2));
// Output: [4, 5, 1, 2, 3]

//          IIFE

(function (arr, numberOfShifts) {
    let tmp = 0;
    const leng = arr.length;
    numberOfShifts = numberOfShifts % leng;
    for (let i = 0; i < numberOfShifts; i++) {
        tmp = arr.pop();
        arr.unshift(tmp);
    }
    console.log(arr);
})([1, 2, 3, 4, 5], 2)
// Output: [4, 5, 1, 2, 3]


// 3. Do the below programs in arrow functions.
// (a) Print odd numbers in an array

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let odd2 = array => {
    let oddNum = [];
    for (let i in array) {
        if (array[i] % 2 !== 0) {
            oddNum.push(array[i]);
        }
    }
    return oddNum;
}
console.log(odd2(num));
// Output: [1, 3, 5, 7, 9]


// (b) Convert all the strings to title caps in a string array

let titleCase2 = (str) => {
    str = str.toLowerCase();
    str = str.split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
console.log(titleCase2("The purpose of our lives is to be happy"))
// Output: The Purpose Of Our Lives Is To Be Happy


// (c) Sum of all numbers in an array

var num = [1, 2, 3, 4, 5, 6, 7, 8];
var sum = arr => {
    var ans = 0;
    for (let i in arr) {
        ans += arr[i];
    }
    return ans;
}
console.log(sum(num))
// Output: 36


// (d) Return all the prime numbers in an array

var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
let isPrime2 = num => {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return num > 1;
}
console.log(numArray.filter(isPrime2));
// Output: [2, 3, 5, 7, 11, 13]


// (e) Return all the palindromes in an array

var array = ['civic', 'kayak', 'ever', 'level', 'not', 'rotor']
let checkPolindromes2 = arr => {
    let palindrome = [];
    for (let i in arr) {
        let str = arr[i];
        let strReverse = arr[i].split("").reverse().join("");
        if (str === strReverse) {
            palindrome.push(str);
        }
    }
    return palindrome;
}
console.log(checkPolindromes2(array))
// Output: ['civic', 'kayak', 'level', 'rotor']
