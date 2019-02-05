// CANDRIVE Lesson 02 Assignment 4 - Bonus

// Decided to use arrays to do more than one driver with only one if/else statement, idk if this is the right way but it worked.

// ARRAYS OF NAMES AND AGES
let names = ['Nicolas Bolinaga', 'John Doe', 'Han Solo', 'Bill Gates', 'Harry Potter'];
let ages = [19, 14, 2, 63, 35];
const DrivingAge = (16)

// LOOP TO CHECK EACH INDIVIDUAL
for (let i=0; i < 5; i++)

// IF/ELSE CHECK WITH STRING INTERPOLATION
if (ages[i] > DrivingAge){
  console.log( `${names[i]} has been driving for ${ages[i] - DrivingAge} years.`)
} else {
  console.log(`${names[i]} would be able to drive in ${DrivingAge - ages[i]} years.`)
}
