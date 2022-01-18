console.log('Hello World!');

function isDivisibleBy(a, b) {
    return a % b === 0;
}

for( let i = 1; i <= 300; i++) {
    let result = [];
    
    if(isDivisibleBy(i,3)) {
        result.push("Fizz");
    }
    if(isDivisibleBy(i,5)) {
        result.push("Buzz");
    }
    if(isDivisibleBy(i,7)) {
        result.push("Bang");
    }

    if(isDivisibleBy(i,11)) {
        result = ["Bong"];
    }

    if(isDivisibleBy(i,13)) {
        const indexB = result.findIndex(item => item[0] === "B");
        result.splice(indexB, 0, "Fezz");

    }

    if(isDivisibleBy(i, 17)) {
        result.reverse();

    }

    if(result.length === 0) {
        result.push(i.toString());
    }

    console.log(result.join(""));
}


// let exampleArr = ["Fizz", "Buzz", "Bong"];
// const indexB = exampleArr.findIndex(item => item[0] === "B");
// exampleArr.splice(indexB, 0, "Fezz");
// console.log(exampleArr);




