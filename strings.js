// strings 
const myVariable = 'mathematics';
console.log(myVariable.length);
console.log('Every good boy does fine'.length);

// 2) to return character from index 
console.log(myVariable.charAt(0));
console.log(myVariable.charAt(6));

// 3) to return index from character
console.log(myVariable.indexOf("mat"));
console.log(myVariable.indexOf("Mat"));
console.log(myVariable.indexOf("at"));
console.log(myVariable.indexOf("ati"));

// 4) to returns last index
console.log(myVariable.lastIndexOf("at"));
console.log(myVariable.lastIndexOf("ath"));

// 5) to returns part of string using index
console.log(myVariable.slice(5,8));
console.log(myVariable.slice(5));
console.log(myVariable.slice(5,6));

// 6) capitalize String
console.log(myVariable.toUpperCase());

// 7) lower Case
console.log(myVariable.toLowerCase());

// 8)  to returns true if value is present otherwise false
console.log(myVariable.includes("mat"));
console.log(myVariable.includes("div"));

// 9)  to splits the string wherever the character is present and returns the strings in an array
console.log(myVariable.split("e"));
console.log(myVariable.split(""));
console.log("Joe,John,Dave".split(","));
console.log("Every good boy does fine".split(" "));







