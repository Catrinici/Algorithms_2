//1.implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive). Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).

function sigma(n) {
    if (n < 1) {
        return n;
    }
    return n + sigma(n);
}

sigma(3); //return 6
sigma(10); //return 55




//2.Using recursion, write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive). For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).

function factorial(n) {
    if (n < 2) {
        return n;
    }
    return n * factorial(n - 1);
}

//3. Create a function to generate Fibonacci numbers. In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1. Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).

// Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8). Do this without using recursion first. If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.

function fib(n) {
    if (n < 2) {
        return n;
    }
    return fib(n - 2) + fib(n - 1);
}

//4.This function borrows ideas from the Fibonacci series, but the calculated results appear to zig and zag, hence the name. A so-called 'Zibonacci' series would be defined by the following rules:

// 1) Zib(0) == 1;

// 2) Zib(1) == 1;

// 3) Zib(2) == 2;

// 4) Zib(2n+1) == Zib(n) + Zib(n-1)+1, if n>0 (i.e. odd values 3 and higher)

// 5) Zib(2n) == Zib(n) + Zib(n+1)+1, if n>1 (i.e. even values 4 and higher).

// Create the Zibonacci(num) function.

function Zibonacci(num) {
    if (num < 2) {
        return 1;
    }
    if (num == 2) {
        return 2;
    }
    // num = 2n + 1;
    // num-1 = 2n;
    // n=(num-1)/2
    if (num % 2 == 1) {
        return Zibonacci((num - 1) / 2) + Zibonacci((num - 1) / 2 - 1) + 1;
    } else {
        return Zibonacci((num - 1) / 2) + Zibonacci((num - 1) / 2 + 1) + 1;
    }

}

// Zibonacci(0) to return 1
// Zibonacci(1) to return 1
// Zibonacci(2) to return 2
// Zibonacci(3) to return 3
// Zibonacci(4) to return 6
// Zibonacci(5) to return 4
// Zibonacci(6) to return 10
// Zibonacci(10) to return 15
// Zibonacci(11) to return 11

//5.Given a string, use recursion to return array where each element is a string representing a different anagram (a different sequence of the letters in that string). For example, if given "lim", return ["ilm", "iml", "lim", "lmi", "mil", "mli"].