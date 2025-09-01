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

// const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// // Function to calculate average
// function calculateAverage(grades) {
//     let sum = 0;
//     for (let i = 0; i < grades.length; i++) {
//         sum += grades[i];
//     }
//     return sum / grades.length;
// }

// // Function to find highest grade
// function findHighestGrade(grades) {
//     let highest = grades[0];
//     for (let i = 1; i < grades.length; i++) {
//         if (grades[i] > highest) {
//             highest = grades[i];
//         }
//     }
//     return highest;
// }

// // Function to find lowest grade
// function findLowestGrade(grades) {
//     let lowest = grades[0];
//     for (let i = 1; i < grades.length; i++) {
//         if (grades[i] < lowest) {
//             lowest = grades[i];
//         }
//     }
//     return lowest;
// }

// // Function to count passing students
// function countPassing(grades, passingGrade) {
//     let count = 0;
//     for (let i = 0; i < grades.length; i++) {
//         if (grades[i] >= passingGrade) {
//             count++;
//         }
//     }
//     return count;
// }

// // Generate complete report
// const average = calculateAverage(grades);
// const highest = findHighestGrade(grades);
// const lowest = findLowestGrade(grades);
// const passing = countPassing(grades, 70);

// console.log("=== GRADE REPORT ===");
// console.log(`Average: ${average.toFixed(2)}`);
// console.log(`Highest: ${highest}`);
// console.log(`Lowest: ${lowest}`);
// console.log(`Passing students: ${passing} out of ${grades.length}`);

////////////////////////////////////
// The Array Problem
// const gabArray = [
//   "Gab",
//   "Abonita",
//   2025 - 2005,
//   "teacher",
//   ["Lhee", "Yhuna", "Gaille"],
// ];

// console.log(gabArray[0]);
// console.log(gabArray[1]);

// const gabObject = {
//   firstName: "Gab",
//   lastName: "Abonita",
//   age: 2025 - 2005,
//   job: "teacher",
//   friends: ["Lhee", "Yhuna", "Gaille"],
// };

// console.log(gabObject);

// // Property Access Methods
// // Dot Notation
// console.log(gabObject.firstName);
// console.log(gabObject.lastName);
// console.log(gabObject.age);

// // Bracket Notation
// console.log(gabObject['firstName']);
// console.log(gabObject['lastName']);
// console.log(gabObject['age']);

// const nameKey = 'Name';
// console.log(gabObject['first' + nameKey]);

// // Modify Existing Properties
// gabObject.job = 'Programmer';
// gabObject['age'] = 21;
// console.log(gabObject);

// // Add New Properties
// gabObject.location = 'Philippines';
// gabObject['twitter'] = 'gabprogrammer';
// gabObject.hasDriverLicense = false;
// console.log(gabObject);

// const property = 'job';
// console.log(gabObject[property]);

// Objest vs Arrays Decision Making

// Arrays
// const listOfYears = [1991, 1984, 2008, 2020];
// const shoppingList = ["apples", "bananas", "milk", "bread"];
// const testScores = [85, 92, 78, 96];

// // Objects
// const person = {
//   name: "Jonas",
//   age: 46,
//   occupation: "teacher",
// };
// const car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2020,
//   color: "blue",
// };

// // Objects can contain arrays, and arrays can contain objects
// const student = {
//   name: "Sarah",
//   grades: [85, 92, 78],
//   address: {
//     street: "123 Main St",
//     city: "New York",
//   },
// };

// console.log(student.grades[0]);
// console.log(student.address.city);

// Object Methods

// const john = {
//   firstName: "John",
//   lastName: "Doe",
//   birthYear: 1995,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function (birthYear) {
//     return 2025 - birthYear;
//   },
// };

// console.log(john.calcAge(2000));

// // 'this' keyword
// const johnImproved = {
//   firstName: "John",
//   lastName: "Doe",
//   birthYear: 1995,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: false,

//     calcAge: function () {
//         this.age = 2025 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function() {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
//     }
// };

// console.log(johnImproved.calcAge());
// console.log(johnImproved.age);
// console.log(johnImproved.getSummary());

// // Complex Object with Multiple Methods
// const bankAccount = {
//     owner: 'John Doe',
//     movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//     interestRate: 1.2, 
//     pin: 1111,

//     // Method to calculate balance
//     calcBalance: function() {
//         this.balance = this.movements.reduce((acc, mov) => acc + mov, 0);
//         return this.balance;
//     },

//     // Method to add movement
//     deposit: function(amount) {
//         this.movements.push(amount);
//         return this.movements;
//     },

//     withdraw: function(amount) {
//         this.movements.push(-amount);
//         return this.movements;
//     },

//     // Method for account summary
//     getStatement: function() {
//         return `${this.owner}'s account balance is $${this.calcBalance()}`;
//     }
// };

// console.log(bankAccount.getStatement());
// bankAccount.deposit(500);
// console.log(bankAccount.getStatement());

////////////////////////////////////
// Coding Challenge #3 - User Profile System

// const user = {
//   firstName: "Sarah",
//   lastName: "Johnson",
//   birthYear: 1995,
//   location: "New York",
//   interests: ["photography", "travel", "coding"],
//   friends: [
//     { name: "Michael", status: "active" },
//     { name: "Emma", status: "inactive" },
//     { name: "David", status: "active" },
//   ],
//   isActive: true,

//   // Calculate age method
//   calcAge: function () {
//     this.age = new Date().getFullYear() - this.birthYear; 
//     return this.age;
//   },

//   // Add friend method
//   addFriend: function (name, status = "active") {
//     this.friends.push({ name, status: status }); 
//     return this.friends.length
//   },

//   // Get active friends count
//   getActiveFriends: function () {
//     const activeFriends = this.friends.filter(friend => friend.status === "active");
//     return activeFriends.length;
//   },

//   // Toggle active status
//   toggleStatus: function () {
//     this.isActive = !this.isActive;
//     return this.isActive;
//   },

//   // Generate profile summary
//   getSummary: function () {
//     const age = this.calcAge(); 
//     const activeFriends = this.getActiveFriends(); 
//     const status = this.isActive ? "active" : "away"; 

//     return `
//       ${this.firstName} ${this.lastName} ${age} from ${this.location}
//       Currenty ${status}
//       ${activeFriends} active friends out of ${this.friends.length} total
//       Interests: ${this.interests.join(", ")}
//       Connected and sharing life's adventures`;
//   },
// };

// // Test your user profile system
// console.log(user.getSummary());
// user.addFriend("Alex", "active");
// user.toggleStatus();
// console.log(`\nAfter updates:`);
// console.log(user.getSummary());

// Select DOM Elements

// 1st Method
// querySelector - uses css selectors
// const message = document.querySelector('.message');
// // gets us the entire element object with all its properties
// console.log(message);

// const button = document.querySelector('#btn');
// console.log(button);

// const heading = document.querySelector('h1');
// console.log(heading);
// // QuerySelector returns the first matching element

// console.log(message.textContent);
// console.log(button.id);
// console.log(heading.tagName);
// console.log(heading.textContent);

// // getElementById
// const buttonById = document.getElementById('btn');
// console.log(buttonById);
// console.log(buttonById === button);

// // querySelectorAll - Multiple Elements
// const allParagraphs = document.querySelectorAll('p');
// console.log(allParagraphs);
// console.log(allParagraphs[0]);

// Modifying Element Content
// const message = document.querySelector('.message');
// console.log(message.textContent);
// message.textContent = 'Hello from JavaScript';
// console.log(message.textContent);

// // innerHTML
// message.innerHTML = '<strong>Bold text from JS!</strong>';

// // innerText
// console.log(message.innerText);

// // Input Element Values
// const input = document.querySelector('.guess');
// console.log(input.value);
// input.value = "Default Text";

// const heading = document.querySelector('h1');
// heading.style.color = 'red';
// heading.style.backgroundColor = 'yellow';
// heading.style.fontSize = '3rem';

// const button = document.querySelector('#btn');
// button.style.padding = '20px';
// button.style.borderRadius = '10px';

// // Event Listeners - User Interactions
// button.addEventListener('click', function() {
//     console.log('Button was clicked!');
//     message.textContent = 'You clicked the button';
//     message.style.color = 'green';
// });

// let clickCount = 0;
// button.addEventListener('click', function() {
//     clickCount++;
//     button.textContent = `Clicked ${clickCount} times`;
//     button.style.backgroundColor = `hsl(${clickCount * 30}, 70%, 50%)`;
// });

// // Input Events
// const display = document.querySelector('.message');
// input.addEventListener('input', function() {
//     const userText = input.value;
//     display.textContent = `You typed ${userText}`;
//     display.style.fontSize = `${userText.length + 10}px`;
// });

// // Keyboard Events - Responds to Specific Keys
// input.addEventListener('keydown', function(event) {
//     console.log(`Key pressed: ${event.key}`);

//     if (event.key === 'Enter') {
//         display.textContent = `You pressed Enter! Text was ${input.value}`;
//         input.value = '';
//     }
//     });





