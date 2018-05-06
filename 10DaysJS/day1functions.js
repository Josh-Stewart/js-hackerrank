
let inputString = `3`;
let currentLine = 0;


function readLine() {
    return inputString[currentLine++];
}

function factorial(n){
    let factorial = n
    for(let i = n-1; i > 1; i--){
        factorial *= i
    }
    return factorial
}


function main() {
    const n = +(readLine());

    console.log(factorial(n));
}

inputString = inputString.trim().split('\n').map(str => str.trim());
main()