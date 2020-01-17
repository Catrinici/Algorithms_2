/*
 Write a solution that only iterates over the string once and uses O(1) additional memory, since this is what you would be asked to do during a real interview.

Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.
*/

function firstNotRepeatingCharacter(s) {

    var arr = s.split("");

    for (var i = 0; i < arr.length; i++) {
        var chr = arr[i];
        if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) {
            return arr[i]
        }

    }

    return "_"
}