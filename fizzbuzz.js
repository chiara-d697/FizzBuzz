console.log('Hello World!');

function isDivisibleBy(a, b) {
    return a % b === 0;
}

for( let i = 1; i <= 100; i++) {
    let result = "";
    
    if(isDivisibleBy(i,3)) {
        result += "Buzz";
    }
    if(isDivisibleBy(i,5)) {
        result += "Fizz";
    }
    if(isDivisibleBy(i,7)) {
        result += "Bang";
    }

    if(isDivisibleBy(i,11)) {
        result = "Bong";
    }

    if(result === "") {
        result = i;
    }


    
    console.log(result);
}

