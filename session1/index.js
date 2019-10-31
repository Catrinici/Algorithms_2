// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
    // const strArr = str.split('');
    // strArr.reverse();
    // return strArr.join('');

    ///////////////////////////////////////////////////

    //     return str.split('').reverse().join('');

    ///////////////////////////////

    // let revString = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     revString = revString + str[i];
    // }
    // return revString;

    ////////////////////////////////

    // let revString = '';
    // for (let i = 0; i <= str.length - 1; i++) {
    //     revString = str[i] + revString;
    // }
    // return revString;

    /////////////////////////////////

    // let revString = '';
    // for (let char of str) {
    //     revString = char + revString;
    // }
    // return revString;

    /////////////////////////////////

    // let revString = '';
    // str.split('').forEach(char => revString = char + revString);

    // return revString;

    /////////////////////////////////

    return str.split('').reduce((revString, char) => char + revString, '');

}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
    const revString = str.split('').reverse().join('');
    return revString === str;

}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
    const revString = int.toString().split('').reverse().join('');

    return parseInt(revString) * Math.sign(int);
}

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'







// Call Function

// const output = reverseString('hello');
// const output = isPalindrome('hello');
// const output = reverseInt(12345);
const output = reverseInt(-12345);

console.log(output);