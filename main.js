const calculateBMI = require('./bmi.js');

// Usage example
const weightInPounds = 150;
const heightInFeet = 5;
const heightInInches = 9;

const result = calculateBMI(weightInPounds, heightInFeet, heightInInches);
console.log("BMI:", result);
console.log("BMI:",    calculateBMI(-150, 5, 9))
