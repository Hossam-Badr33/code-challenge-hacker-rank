/*Pig Latin is a way of altering English Words. The rules are as follows:
- If a word begins with a consonant, take the first consonant or consonant cluster, 
move it to the end of the word, and add ay to it.
- If a word begins with a vowel, just add way at the end.

translatePigLatin("paragraphs") should return the string aragraphspay.
translatePigLatin("glove") should return the string oveglay.
translatePigLatin("algorithm") should return the string algorithmway.
translatePigLatin("eight") should return the string eightway.
Should handle words where the first vowel comes in the middle of the word. 
translatePigLatin("schwartz") should return the string artzschway.*/

function translatePigLatin(str) {
// Create variables to be used
    let vowel =  /[aoie]/gi;
    let piglatin = "";
// Check if the first character is a vowel
    if (str[0].match(vowel)) {
        piglatin = str + "ay"
        console.log(piglatin);
    }
// Check if the string contains only consonants
    else if (str.match(vowel) === null) {
        piglatin = str + "way"
        console.log(piglatin);
    }
// Find how many consonants before the first vowel.
    else {
        let vowel_index = str.indexOf(str.match(vowel)[0])
// Take the string from the first vowel to the last char
// then add the consonants that were previously omitted and add the ending.
        piglatin = str.substr(vowel_index) + str.substr(0, vowel_index) + "ay"
        console.log(piglatin);
    }
    return piglatin;
}
translatePigLatin("consonant");

  