"use strict";
// 🚀 Day 5 Challenge: Start Coding! 🚀
Object.defineProperty(exports, "__esModule", { value: true });
// Question 13: Your Own Array: Think of your favorite mode of transportation, 
// such as a motorcycle or a car, and make a list that stores several examples. 
// Use your list to print a series of statements about these items, 
// such as “I would like to own a Honda motorcycle.”
// Explain & TIP: Arrays help you group related items, like types of transportation. 
// This way, you can talk about each one using a loop.
let mode_of_tranportation = ["streetcars", "Ship", "Bicycle", "Motorbike", "Car"];
mode_of_tranportation.forEach(mode_of_tranportation => {
    console.log("I want to own", `${mode_of_tranportation}.`);
});
