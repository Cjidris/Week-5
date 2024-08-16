function calculateHypotenuse(a, b) {
    // Ensure the inputs are positive numbers
    if (a <= 0 || b <= 0) {
        console.error('Both sides must be positive numbers.');
        return null;
    }

    // Apply the Pythagorean theorem formula
    const hypotenuse = Math.sqrt(a * a + b * b);

    return hypotenuse;
}

// Example usage:
const sideA = 3;
const sideB = 4;

const hypotenuse = calculateHypotenuse(sideA, sideB);

if (hypotenuse !== null) {
    console.log(`The length of the hypotenuse is ${hypotenuse}`);
}
