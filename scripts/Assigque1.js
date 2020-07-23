'use strict'
var jeffMass = 60;
var ToddMass = 70;
var jeffHeight = 2;
var ToddHeight = 2;
bmiCalculator(jeffMass, jeffHeight, ToddMass, ToddHeight);
function bmiCalculator(jeffMass, jeffHeight, ToddMass, ToddHeight) {
    let bmiFlag = false;
    let jeffBMI = jeffMass / (jeffHeight * jeffHeight);
    let toddBMI = ToddMass / (ToddHeight * ToddHeight);
    if (jeffBMI > toddBMI) {
        bmiFlag = true;
    }

    if (bmiFlag) {
        console.log("Jeff BMI is greater than Todds");
        alert('Jeff BMI is greater than Todds');
    }
    else {
        console.log("Todds BMI is greater than Jeff");
        alert('Todds BMI is greater than Jeff');

    }
}