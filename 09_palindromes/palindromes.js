const palindromes = function (stringValue) {
    const newString = stringValue.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversedString = newString.split("").reverse().join("");
    return reversedString === newString;
};

// Do not edit below this line
module.exports = palindromes;
