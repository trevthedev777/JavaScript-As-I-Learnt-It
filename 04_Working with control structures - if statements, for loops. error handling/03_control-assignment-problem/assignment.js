const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

// ! My solution
// Task one
// for (let i = 0; i > 0.7; i++) {
//     randomNumber = randomNumber;
//     console.log(randomNumber);
// }
// alert('Number is greater than 0.7')

//  * Correct Solution
if (randomNumber >= 0.7) {
    alert('greater than 0.7');
} else {
    alert('not greater');
}
// =============================================================================
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ! Task Two: My solution
// * This loop was right
for (num in arr) {
    console.log(arr);
}
// * 2nd Loop Correct Solution
let counter = 0;
while (counter < arr.length){
    console.log(arr[counter]);
    counter++;
}

// ? for loop => Backwards

// Task Two: first step
// Task Three: reverse output
// ! My Solution
for (let i = arr.length; i > 0; i--) {
    console.log(arr.reverse())
}

// * Correct Solution
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

// ============================================================

const randomNumber2 = Math.random();

console.log(randomNumber);
console.log(randomNumber2);
// Create another random number (in a separate constant) and show an alert in two different scenarios: Both are greater 0.7 OR at least one of the two is NOT greater than 0.2.
// ! My solution
if (randomNumber && randomNumber2 > 0.7) {
    alert('Both are greater than 0.7')
}  else if (randomNumber < 0.2 && randomNumber2 > 0.2) {
    alert(`${randomNumber} and ${randomNumber2}`)
}

// * Correct Solution
if (
    randomNumber > 0.7 && randomNumber2 > 0.7 ||
    randomNumber <= 0.2 ||
    randomNumber2 <= 0.2
) {
    alert('Greater than 0.7 or smaller than 0.2')
}