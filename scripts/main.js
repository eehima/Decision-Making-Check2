//  Create a function that takes a year as input and determines whether it is a leap year or not. Leap years are divisible by 4, but not by 100 unless they are also divisible by 400.
//  For example, 2000 is a leap year, but 1900 is not.

function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
};

console.log(isLeapYear(2000));
console.log(isLeapYear(1900));

// Write a program that prompts the user to enter their age and then determines the price of a movie ticket based on the following criteria:
// Children (age <= 12): $10
// Teenagers (age 13-17): $15
// Adults (age >= 18): $20

const customerAge = (age) => {
    let childrenAge = `Your age is ${age}. You're to pay $10.`;
    let teenagersAge = `Your age is ${age}. you're to pay $15.`;
    let adultsAge = `Your age is ${age}. you're to pay $20.`;

    (age <= 12 ) ? alert(successMsg) : (age > 12 && age < 18) ? alert(teenagersAge) : alert(adultsAge);
};
customerAge(25);


// Implement a recursive function to generate the nth Fibonacci number. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding numbers (0, 1, 1, 2, 3, 5, 8, ...).

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
};

console.log(fibonacci(5));

// Write a recursive function to calculate the result of raising a number to a given power.

function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
};

console.log(power(2, 3));