"use strict";
// Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would 
//you invite? Make a list that includes at least three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: Just like with transportation, you can use an array to manage a list of guests.
// Loop through the list to send each one a personal invitation.
let Guest_List = ["Jame clear", "Buddha", "Aristotle", "Shakespare"];
Guest_List.forEach(Guest_List => {
    console.log("Dear", `${[Guest_List]}`, " We would be honored if you could join us for dinner at our home on [Date] at [Time]");
});
