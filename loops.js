/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
let s = "javascript";
function vowelsAndConsonants(s) {
    let vowels = 'aeiou';
    let consonants = '';
    for (let i = 0; i < s.length; i++){
        if (vowels.includes(s[i])) {
            console.log(s[i]);
        } else consonants += s[i] + '\n'
    }
    console.log(consonants.trim())
}