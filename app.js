// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// function printOdds(count) {
//     if (count < 0){
//         console.log("please provide a non-negative count.");
//         return;
//     }
//     for (let i = 1; i <= count; i++) {
//         if (i % 2 !== 0) {
//             console.log(i);
//         }
//     }
// }
// printOdds (10)

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

// function checkAge (userName, age) {
//     let aboveSixteen = `Congrats ${userName}, you can drive!`;
//     let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
//     if (age < 16) {
//         console.log(belowSixteen);
//     } else {
//         console.log(aboveSixteen)
// }
// }
// checkAge ("Christian", 14)

// Exercise 3
// function coordinates(x ,y){
//     if ( x === 0 && y === 0) {
//         console.log("This point lies on the origin (0, 0)");
//     } else if (x === 0) {
//         console.log("This point lies on the y-axis.");
//     } else if (y === 0) {
//         console.log("This point lies on the x-axis.");
//     } else if (x > 0 && y > 0) {
//         console.log("This point lies in quadrant 1.");
//     } else if (x < 0 && y > 0) {
//         console.log("This point lies in quadrant 2.");
//     } else if (x < 0 && y < 0) {
//         console.log("This point lies in quadrant 3.");
//     } else {
//         console.log("This point lies in quadrant 4.")
//     }
// }
// coordinates (0,0);
// coordinates (0, 4);
// coordinates (4, 0);
// coordinates (1, 2);
// coordinates (-1, 2);
// coordinates (-1, -2);
// coordinates (1, -2);

// Exercise 4
// function triangleType (side1, side2, side3) {
//     if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2){
//         return "invalid triangle";
// }
//     else if (side1 === side2 && side2 === side3) {
//         return "Equilateral Triangle";
// }
//     else if (side1 === side2 || side1 === side3 || side2 === side3) {
//         return "Isosceles Triangle";
// }
//     else {
//         return "Scalene triangle";
//     }
// }

// triangleType (5, 5, 5)

// Exercise 5

function cellData(planLimit, day, usage) {
    // days remaining is used to inform cx where they are in their data cycle
    let daysRemaining = 30 - day;
    // average usage per day is used to calculate if the cx is over/under data limit
    let averageUsagePerDay = usage / day;
    // remaining data is used to provide recommended average use per day remaining
    let remainingData = planLimit - usage;
    // provides the cx with a daily usage limit
    let averageUsagePerDayRemaining = remainingData / daysRemaining;

    console.log("YOUR PLAN DETAILS");
    console.log(`Days Used: ${day}`);
    console.log(`Days Remaining: ${daysRemaining}`);
    console.log(`Your Average daily use: ${averageUsagePerDay.toFixed(3)} GB/day`);

    if (averageUsagePerDay > averageUsagePerDayRemaining) {
        let excessUsagePerDay = averageUsagePerDay - averageUsagePerDayRemaining;
        let excessUsage = excessUsagePerDay * daysRemaining;
        
        console.log(`At this rate, you'll exceed your available data by ${excessUsage.toFixed(1)} GB.`);
        console.log(`To stay below your data limit (AND AVOID FEE'S), use no more than ${averageUsagePerDayRemaining.toFixed(2)} GB/day for the remainder of this cycle!`);
        console.log("Have a great rest of your day!");
    } else {
        console.log("Nice, you're within your data plan limits.")
        console.log("Have a great rest of your day!");
    }
}

// cellData(100, 15, 56);
cellData(500, 15, 56);