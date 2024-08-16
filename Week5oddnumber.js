 checkEvenOrOdd(number); {

    // Check if the number is even or odd
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Example usage
const num = 7;
console.log(checkEvenOrOdd(num));  // Output: "Odd"

const num2 = 10;
console.log(checkEvenOrOdd(num2)); // Output: "Even"