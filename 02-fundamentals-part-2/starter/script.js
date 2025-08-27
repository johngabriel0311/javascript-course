// console.log("Part 2 is now working");

// // Functions - Declarations
// console.log('=== FUNCTIONS ===');

// function logger() {
//     console.log('My name is Gab');
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// console.log(fruitProcessor(5, 0));

// const juice1 = fruitProcessor(5, 0);
// const juice2 = fruitProcessor(2, 4);
// const juice3 = fruitProcessor(3, 2);
// console.log(juice1);

// //Function Expressions
// const calcAge = function (birthYear) {
//     return 2025 - birthYear;
// }

// console.log(calcAge (2005));
// console.log(calcAge (1977));

// function introduce(firstName, lastName, age) {
//     const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old`;
//     return introduction;
// }

// console.log(introduce('John Gabriel', 'Abonita', '20'));

// function yearsUntilRetirement(birthYear, firstName){
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         return `${firstName} retires in ${retirement} years`
//     } else {
//         return `${firstName} had already retired`;
//     }
// }

// console.log(yearsUntilRetirement(2005, 'Gab'));

// //Global Scope
// const globalVar = 'I am global';

// function testScope() {
//     const localVar = 'I am local';
//     console.log(globalVar);
//     console.log(localVar);
// }

// testScope();
// console.log(localVar);

// //////////////////////////////////
// Coding Challenge #1

// Function to calculate average of 3 scores
// function calcAverage(score1, score2, score3) {
//   const score = score1 + score2 + score3;
//   const average = score / 3;
//   return average;
// }

// // Function to check winner
// const avgDolphins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);

// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         return `Dolphin wins (${avgDolphins} against ${avgKoalas})`;
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         return `Koalas wins (${avgKoalas} against ${avgDolphins})`;
//     } else {
//         return `No team wins! Koalas: ${avgKoalas}, Dolphins: ${avgDolphins}`;
//     }
// }

// // Test Data
// console.log(checkWinner(avgDolphins, avgKoalas));

// const student1Grade = 85;
// const student2Grade = 92;
// const student3Grade = 78;

// const grades = [85, 92, 78, 96, 88];
// console.log(grades);

// const friends = ['Lhee', 'Yhuna', 'Kyle'];
// console.log(friends);

// const mixed = ['Jang', 27, true, friends];
// console.log(mixed);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// //Array starts counting at 0
// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);

// //Change the value per index
// friends[1] = 'Gab';
// console.log(friends);

// const firstName = 'Gabriel';
// const gabriel = [firstName, 'Abonita', 2025-2005];
// console.log(gabriel);

// const calcAge = function (birthYear){
//     return 2025 - birthYear;
// }

// const ages = [calcAge(2005), calcAge(2003), calcAge(1991)];
// console.log(ages);

// //Array Methods - Adding Elements
// //Add item at the end of the list
// const newLength = friends.push("Yhuna");
// console.log(friends);
// console.log(newLength);
// const newLength2 = friends.push("Yuan");
// console.log(friends);

// //Add first item in the list 
// friends.unshift('Gaille');
// console.log(friends);

// //Removing elements
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);

// //Find an elements
// //IndexOf
// console.log(friends.indexOf('Lhee'));
// console.log(friends.indexOf('Yuan'));

// //Includes()
// console.log(friends.includes('Lhee'));
// console.log(friends.includes('Yuan'));

// //Array Iterations - Loops
// for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i]);
// }

// friends.forEach(
//     function(friend, index) {
//         console.log(`Friend ${index + 1}: ${friend}`);
//     }
// )

// // forEach method
// friends.forEach(function (friend, index) {
//   console.log(`${index}: ${friend}`);
// });

// // Arrow function version
// friends.forEach((friend, index) => {
//   console.log(`Friend ${index + 1}: ${friend}`);
// });

// const grades2 = [85, 92, 78, 60, 88, 74];
// let total = 0;

// for (let i = 0; i < grades2.length; i++) {
//     total += grades2[i];
// }

// const average = total / grades2.length;
// console.log(`Average grade: ${average.toFixed(2)}`)

// let passedCount = 0;
// grades2.forEach(
//     grade => {
//         if (grade >= 70) passedCount++;
//     }
// )
// console.log(`${passedCount} out of ${grades2.length} students passed`);

////////////////////////////////////
// Coding Challenge #2 - Student Grade Manager

const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// Function to calculate average
function calculateAverage(grades) {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    return sum / grades.length;
}

// Function to find highest grade
function findHighestGrade(grades) {
    let highest = grades[0];
    for (let i = 1; i < grades.length; i++) {
        if (grades[i] > highest) {
            highest = grades[i];
        }
    }
    return highest;
}

// Function to find lowest grade
function findLowestGrade(grades) {
    let lowest = grades[0];
    for (let i = 1; i < grades.length; i++) {
        if (grades[i] < lowest) {
            lowest = grades[i];
        }
    }
    return lowest;
}

// Function to count passing students
function countPassing(grades, passingGrade) {
    let count = 0;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= passingGrade) {
            count++;
        }
    }
    return count;
}

// Generate complete report
const average = calculateAverage(grades);
const highest = findHighestGrade(grades);
const lowest = findLowestGrade(grades);
const passing = countPassing(grades, 70);

console.log("=== GRADE REPORT ===");
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);
console.log(`Passing students: ${passing} out of ${grades.length}`);


