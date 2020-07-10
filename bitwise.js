'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}
function getMaxLessThanK(n, k) {
    let maxAAndb = 0;
    for (let b = n; b > 0; b--) { //n being number of entries in S
        for (let a = b-1; a > 0; a--) { //we know a < b so a is the internal for loop
            if ((a & b) < k && (a & b) > maxAAndb){ // this is the bitwise &
                maxAAndb = (a&b);
            }
        }
    }
    return maxAAndb;
    // n = # of zeros or ones in binary num
    // 01010, 00001; a&b = 0;
    // k > a&b
    // 00111&10011 = 00011 = 2+1 = 3;
}

function main() {
    const q = +(readLine());
    
    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);
        
        console.log(getMaxLessThanK(n, k));
    }
}