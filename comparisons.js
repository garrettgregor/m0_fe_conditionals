// In the exercises below, write your own code where indicated to achieve the desired result.
// One example is already completed. Your task is to complete any remaining prompt.
// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
console.log("is numberTeachers strictly equal to stringTeachers?", numberStudents === numberTeachers)
// this should log: false

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
console.log("is numberTeachers not equal to numberStudents?", numberStudents !== numberTeachers)
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
console.log("is numberStudents greater than or equal to 21?", numberStudents >= 21)
// this should log: false


// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a comment,in English, explaining what that line of code is doing, including what the comparison will evaluate to.

var friends = 6;
var siblings = 2;
console.log("number of friends is greater than the variable siblings", friends > siblings);
// this is assessing whether the number of friends is greater than the variable siblings, which should yield a true

var attendees = 9;
var meals = 8;
console.log("number of attendees is not equal to the number of meals", attendees !== meals);
// this is assessing whether the number of attendees is not equal to the number of meals, which should also yield a true


// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log("user is hungry and has completed their homework", isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log("user is hungry or has completed their homework", isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log("the dog loves to play and loves treats", lovesToPlay && lovesTreats)

// YOU DO:
// Determine if the dog loves to play or loves the dog park
console.log("dog loves to play or loves the dog park", lovesToPlay || lovesDogPark)

// YOU DO:
// Determine if the dog loves to play and is a puppy
console.log("dog loves to play and is a puppy", lovesToPlay && (age < 2))

// HINT: Use the age variable and assume that a puppy is less than 2 years old