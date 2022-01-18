// const readline = require('readline-sync');
const ps = require('prompt-sync');

const prompt = ps();

let userChoice = prompt("Please specify a maximum number:");
let userNumChoice = +userChoice;

let userRuleChoice = prompt("Please specify the numbers, separated by spaces, that you'd like us to implement rules for:");
const userRuleChoiceArr = userRuleChoice.split(" ");
console.log(userRuleChoiceArr);

function isDivisibleBy(a, b) {
    return a % b === 0;
}

function checkRuleChoice(numStr) {
    return userRuleChoiceArr.indexOf(numStr) >= 0;
}

for( let i = 1; i <= userNumChoice; i++) {
    let result = [];
    
    if(isDivisibleBy(i,3) && checkRuleChoice("3")) {
        result.push("Fizz");
    }
    if(isDivisibleBy(i,5) && checkRuleChoice("5")) {
        result.push("Buzz");
    }
    if(isDivisibleBy(i,7) && checkRuleChoice("7")) {
        result.push("Bang");
    }

    if(isDivisibleBy(i,11) && checkRuleChoice("11")) {
        result = ["Bong"];
    }

    if(isDivisibleBy(i,13) && checkRuleChoice("13")) {
        const indexB = result.findIndex(item => item[0] === "B");
        result.splice(indexB, 0, "Fezz");
    }

    if(isDivisibleBy(i,17) && checkRuleChoice("17")) {
        result.reverse();
    }

    if(result.length === 0) {
        result.push(i.toString());
    }

    console.log(result.join(""));
}








