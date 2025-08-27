// // // // // // JavaScript Fundamentals - Part 1
// // // // // // We'll write our code here!

// // // // // let js = "amazing";
// // // // // console.log(40 + 8 + 23 - 10);
// // // // // console.log("GUMANA KA");

// // // // // console.log(" === VARIABLES === ");

// // // // // let fistName = "Jonas";
// // // // // console.log(fistName);

// // // // // let age = 30;
// // // // // console.log(age);
// // // // // age = 50;
// // // // // console.log(age);

// // // // // const birthYear = 2005;
// // // // // console.log(birthYear);

// // // // // const PI = 3.1415;
// // // // // console.log(PI);

// // // // // var job = "programmer";
// // // // // job = "teacher";
// // // // // console.log(job);

// // // // // age = 51;

// // // // // let lastName = "Doe";

// // // // // //do not do this

// // // // // console.log(" === DATA TYPES === ");

// // // // // // Number
// // // // // age = 24;
// // // // // console.log(age);
// // // // // console.log(typeof age);

// // // // // // String
// // // // // let username = "mark";
// // // // // console.log(username);
// // // // // console.log(typeof username);

// // // // // // Boolean
// // // // // let javaScriptIsFun = true;
// // // // // console.log(javaScriptIsFun);
// // // // // console.log(typeof javaScriptIsFun);

// // // // // let year;
// // // // // console.log(year);
// // // // // console.log(typeof year);

// // // // // // Dynamic Variable
// // // // // let dynamicVariable = 23;
// // // // // console.log(dynamicVariable, typeof dynamicVariable);

// // // // // dynamicVariable ="Now I'm a string";
// // // // // console.log(dynamicVariable, typeof dynamicVariable);

// // // // // dynamicVariable = true;
// // // // // console.log(dynamicVariable, typeof dynamicVariable);

// // // // // Basic Operators
// // // // console.log(" === MATH OPERATORS === ");

// // // // const now = 2037;
// // // // const ageJonas = now - 1991;
// // // // const ageSarah = now - 2018;
// // // // console.log(ageJonas, ageSarah);

// // // // console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// // // // console.log("Math Operations:");
// // // // console.log("Addition:", 10 + 5);
// // // // console.log("Subtraction:", 20 -8);
// // // // console.log("Multiplication:", 4 *7);
// // // // console.log("Division:", 15 / 3);
// // // // console.log("Exponentation:", 2 ** 3);

// // // // // Math with Strings
// // // // const firstName = "Jonas";
// // // // const lastName = "Doe";
// // // // console.log(firstName + " " + lastName);

// // // // console.log("Hello " + "World" + "!");
// // // // console.log("I am " + 25 + " years old");

// // // // console.log(" === ASSIGNMENT OPERATORS === ");

// // // // let x = 10 + 15;
// // // // console.log("x starts as:", x);

// // // // x += 10;
// // // // console.log("x starts as:", x);

// // // // x *= 4;
// // // // console.log("x starts as:", x);

// // // // x /= 2;
// // // // console.log("x starts as:", x);

// // // // x ++;
// // // // console.log("x starts as:", x);

// // // // x --;
// // // // console.log("x starts as:", x);

// // // // /////
// // // // console.log(" === COMPARISON OPERATOS === ");
// // // // console.log(ageJonas > ageSarah);
// // // // console.log(ageSarah >= 18);
// // // // console.log(ageJonas < 30);

// // // // console.log("Number Comparisons");
// // // // console.log(25 > 20);
// // // // console.log(15 < 10);
// // // // console.log(18 >= 18);
// // // // console.log(16 <= 15);

// // // // // Storing Comparison Result
// // // // const isFullAge = ageSarah >= 18;
// // // // console.log("Sarah is adult:", isFullAge);

// // // // console.log("Complex Comparison");
// // // // console.log(now - 1991 > now - 2018);

// // // // let z, y; 'Doe'
// // // // z = y = 25 - 10 - 5; 
// // // // console.log(z, y);

// // // // const averageAge = (ageJonas + ageSarah) / 2;
// // // // console.log(ageJonas, ageSarah, averageAge);

// // // // // Coding Challenge #1 - BMI Calculator

// // // // // Test Data 1
// // // // const massMark = 78;
// // // // const heightMark = 1.69;
// // // // const massJohn = 92;
// // // // const heightJohn = 1.95;

// // // // // Your code here:
// // // // // 1. Calculate BMIs
// // // // const markBMI = massMark / heightMark ** 2;
// // // // const johnBMI = massJohn / (heightJohn * heightJohn);

// // // // // 2. Create markHigherBMI variable
// // // // const markHigherBMI = markBMI > johnBMI;
// // // // // 3. Log results to console
// // // // console.log("Mark BMI: " + markBMI);
// // // // console.log("John BMI: " + johnBMI);
// // // // console.log(markHigherBMI);

// // // ////////////////////////////////////
// // // // Strings and Template Literals
// // // const firstName = "Jonas";
// // // const job = "teacher";
// // // const birthYear = 1991;
// // // const year = 2037;

// // // const jonas =
// // //   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// // // console.log(jonas);

// // // const jonasNew = `I'm ${firstName}, a $(year - birhtYear} year old &{job}!`;
// // // console.log(jonasNew);

// // // console.log(`I'm ${2037 - 1991} years old`);
// // // console.log(`Math words: ${2 + 3} equals five`);
// // // console.log(`Comparisons too: ${5 > 3}`);

// // // console.log(`Just a regular string`);

// // // Type Conversion and Coercion
// // const inputYear = "1991";
// // console.log(Number(inputYear), inputYear);
// // console.log(Number(inputYear) + 18);

// // console.log(Number("Jonas")); 
// // console.log(typeof NaN);

// // console.log(String(23), 23);
// // console.log(typeof String(23));

// // // Auto Type Coercion
// // console.log("I am " + 23 + " years old");
// // console.log('23' - '10' - 3);
// // console.log('23' / '2');
// // console.log('23' * '2');

// // let n = '1' + 1;
// // console.log(n);

// // n = n - 1;
// // console.log(n);

// // // Type Conversion = Explicit/Manual (Recommended)
// // // Type Coercion = Implicit/Automatic (JavaScript does itself)

// // // Equality - Strict
// // const age = '18';
// // if (age === 18) console.log('You just became an adult (strict)');
// // if (age == 18) console.log('You just became an adult :D (loose)');

// // console.log('18' === 18);
// // console.log('18' == 18); // coercion happens
// // console.log(18 === 18); 

// // // Why = can be dangerous
// // console.log('0' == 0);
// // console.log(0 == false);
// // console.log('0' == false);
// // console.log(null == undefined); // special case

// // console.log(' ' == 0);
// // console.log('    ' == 0);

// // // Best Practice
// // const favourite = Number(prompt("What's your favorite number?"));
// // console.log(favourite);
// // console.log(typeof favourite);

// // if (favourite === 23) {
// //   console.log('Cool! 23 is an amazing number!');
// // } if (favourite === 23) {
// //   console.log('23 string is also a cool number');
// // } else if (favourite === 9) {
// //   console.log('9 is also a cool number');
// // } else {
// //   console.log('Number is not 23 or 7 or 9');
// // }

// // if (favourite !== 23) console.log('Why not 23?');


// // // "Test equality operators:
// // // 1. Create a variable 'userInput' with string '25' 
// // // // 2. Compare using both === and == with number 25
// // // 3. Log the results and observe the difference
// // // 4. Convert the string explicitly and test again
// // // 5. Try with different values: '0', '', false, null"

// // Logical Operators
// const hasDriversLicense = false; // A
// const hasGoodVision = false; // B

// console.log(`AND OPERATOR: ${hasDriversLicense && hasGoodVision}`);
// console.log(`OR OPERATOR: ${hasDriversLicense || hasGoodVision}`);
// console.log(`NOT OPERATOR: ${!hasDriversLicense}`);

// const isTired = true; // C
// console.log(hasDriversLicense && hasGoodVision && !isTired);

// if (hasDriversLicense && hasGoodVision ||  !isTired) {
//   console.log('Aiken is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

// // More complex scenarios
// const age = 20;
// const hasPermission = true;
// const hasExperience = false;

// // Can drive if: (age >= 18 OR has permission) AND has experience
// if ((age >= 18 || hasPermission) && hasExperience) {
//   console.log("Approved to drive");
// } else {
//   console.log("Not approved to drive");
// }


// // "Create a club entry system:
// // 1. Create variables: age (number), hasID (boolean), isVIP (boolean) 
// // 2. Entry rules: (age >= 21 AND hasID) OR isVIP
// // 3. Test with different combinations:
// //    age 25, hasID true, isVIP false (should enter)
// //    age 19, hasID true, isVIP true (should enter) 
// //    age 19, hasID false, isVIP false (should not enter)
// // 4. Use if/else to log appropriate messages"

// const age = 19;       
// const hasID = false;   
// const isVIP = false;  

// if ((age >= 21 && hasID) || isVIP) {
//   console.log("Should enter");
// } else {
//   console.log("Should not enter");
// }

// ////////////////////////////////////
// // The Conditional (Ternary) Operator
// const age = 20;

// // Basic ternary: condition ? valueIfTrue : valueIfFalse
// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// // if else statement
// let drink2;
// if (age >= 18) {
//   drink2 = 'wine';
// } else {
//   drink2 = 'water';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

////////////////////////////////////
// Coding Challenge #4

// Step 1: Create the tip calculation using ternary operator
// Rule: 15% if between 50-300, otherwise 20%
// Hint: bill >= 50 && bill <= 300
const bill = 430; 
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// Step 2: Create beautiful output with template literal
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);



