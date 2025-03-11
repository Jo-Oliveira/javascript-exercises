const palindromes = function (someText) {
    debugger;
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const cleanedText = someText.toLowerCase()
    .split("")
    .filter((character) => alphanumerical.includes(character))
    .join("");

    const reversedText = cleanedText.split("").reverse().join("");
    
    return cleanedText === reversedText;

};

// Do not edit below this line
module.exports = palindromes;
