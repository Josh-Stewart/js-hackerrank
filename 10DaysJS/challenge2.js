//'use strict';

//const fs = require('fs');

//process.stdin.resume();
//process.stdin.setEncoding('utf-8');

let inputString = `3
11 2 4
4 5 6
10 8 -12`;
let currentLine = 0;

//process.stdin.on('data', inputStdin => {
//    inputString += inputStdin;
//});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the diagonalDifference function below.
 */
function diagonalDifference(a, n) {

    let diag1 = 0
    let diag2 = 0

    for (let i = 0; i < n; i++) {
        diag1 += a[i][i]
        diag2 += a[i][(n-1)-i]
    }

    return Math.abs(diag1 - diag2)
}

function main() {

    const n = parseInt(readLine(), 10);
    let a = Array(n);

    for (let aRowItr = 0; aRowItr < n; aRowItr++) {
        a[aRowItr] = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));
    }

    result = diagonalDifference(a, n);

    console.log(result)
}

inputString = inputString.trim().split('\n').map(str => str.trim());
main()