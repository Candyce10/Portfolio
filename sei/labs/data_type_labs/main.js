

/*
 * Prompt 1:
 *  A variable called myFavoriteNumber has been declared on one line; assign it a value on the next line.
 */

let myFavoriteNumber;
myFavoriteNumber=10
console.log("myFavoriteNumber is " + myFavoriteNumber);
/*  Example Answer => 

let myFavoriteNumber = 37;
console.log( "Prompt1: myFavoriteNumber is " + myFavoriteNumber ); 

*/




/*
 * Prompt 2:
 *
 * Three variables have been declared. The first one should be a string data type, the second should be a boolean data type, and the third one should be a number data type.
 */

let myFirstVariable;
let mySecondVariable;
let myThirdVariable;

myFirstVariable = "candyce";
mySecondVariable = true;
myThirdVariable = 10;
console.log("myFirstVariable is " + myFirstVariable)
console.log("mySecondVariable is " + mySecondVariable)
console.log("myThirdVariable is " + myThirdVariable)
/*
 * Prompt 3:
 *
 * Create a variable and assign a number to it. On a separate line for each:
 *   - add a number to your variable
 *   - subtract a number from your variable
 *   - multiply your variable by 3
 *   - divide your variable by 7
 *   - calculate the remainder of dividing your variable by 2
 */

let myNumber;
myNumber = 10
myNumber = myNumber + 6
myNumber = myNumber - 8
myNumber = myNumber * 4
myNumber = myNumber / 5
myNumber = myNumber % 2
console.log(myNumber);


/*
 * Prompt 4:
 *
 * Create a variable called firstName and assign it to a string of your first
 * name. Create a variable called lastName and assign it to a string of your
 * last name.
 *
 * Create a variable called fullName and use addition to combine your firstName
 * and lastName variables. Be sure to add a space between the first and last names.
 */

let firstName;
let lastName;
let fullName;

firstName = "candyce"
lastName = "matthews"
fullName = firstName + " " + lastName
console.log(fullName)

/*
 * Prompt 5:
 *
 * Create a variable called hello and assign it the string 'hello'; create
 * a variable called world and assign it the string 'world'.
 *
 * Create a variable called message and use string interpolation to assign it
 * the value 'hello world!'.
 */

let hello;
let world;
let message;

hello = "hello"
world = "world"
message = hello + " " + world
console.log(message);

/*
 * Prompt 6:
 *
 * Write some code that solves each sub-prompt below. The first one has been done for you!
 */

// A. Use loose-equals (==) to create a statement that is false
// B. Use strict equals (===) to create a statement that is true
// C. Use strict unequal (!==) to create a statement that is true
// D. Use less than (<) to create a statement that is false
// E. Use greater than (>) to create a statement that is false
// F. Use less than or equals (<=) to create a statement that is true
// G. Use greater than or equals (>=) to create a statement that is false

let sixA = 2 == 3;
let sixB = 8 === 8;
let sixC = 7 !== 4;
let sixD = 5 < 2;
let sixE = 3 > 5;
let sixF = 9 <= 11;
let sixG = 2 >= 7;

console.log(sixA);
console.log(sixB);
console.log(sixC);
console.log(sixD);
console.log(sixE);
console.log(sixF);
console.log(sixG);

/*
 * Prompt 7:
 *
 * Using the variables defined below, replace the underscores in each sub-prompt so that the statement evaluates to true. The first one has been done for you as an example.
 */

let a = 4;
let b = 53;
let c = 57;
let d = 16;
let e = "Kevin";

// a _ b;
let sevenA = a < b;

// c _ d;
let sevenB = c > d;

// 'Name' ___ 'Name';
let sevenC = 'Name' === "Name";

// a _ b ___ c;
let sevenD = a + b == c;

// a _ a ___ d;
let sevenE = a * a == d;

// e ___ 'Kevin';
let sevenF = e == 'Kevin';

// 48 ___ '48';
let sevenG = 48 == '48';

console.log (sevenA);
console.log (sevenB);
console.log (sevenC);
console.log (sevenD);
console.log (sevenE);
console.log (sevenF);
console.log (sevenG);

/*
 * Prompt 8:
 *
 * Using the variables defined below, replace the underscores in each subprompt so that the statement evaluates to false. The first one has been done for you as an example.
 */

const var1 = 6;
const var2 = 100;
const var3 = -5;
const var4 = 3000;
const var5 = "Jelly Bean";

// var1 _ var2;
let eightA = var1 === var2;

// var3 _ var4;
let eightB = var3 == var4;

// 'Peanut' ___ 'Peanut';
let eightC = 'Peanut' > 'Peanut';

// var1 _ var2 ___ var3;
let eightD = var1 + var2 === var3;

// var1 _ var1 ___ var4;
let eightE = var1 - var2 == var4;

// var5 ___ 'Jelly Bean';
let eightF = var5> 'Jelly bean';

// 48 ___ '48';
let eightG = 48 === '48';

console.log(eightA);
console.log(eightB);
console.log(eightC);
console.log(eightD);
console.log(eightE);
console.log(eightF);
console.log(eightG);

/*
 * Prompt 9:
 *
 * Retrieve "Marty McFly" from each of the arrays below.
 */

const array1 = ["Marty Marion", "Marty Feldman", "Marty McFly", "Marty Marion"];
const array2 = [
  ["Marty Feldman", "Marty Marion"],
  ["Marty Stuart", "Marty McFly"],
  ["Marty Jannetty", "Marty Robbins"],
];
const array3 = [
  ["Marty Feldman", ["Marty Marion"]],
  ["Marty Stuart", ["Marty Janetty", ["Marty McFly"], "Marty Robbins"]],
];

// retrieve from array 1
let martyArray1 = array1[2];
// retrieve from array 2
let martyArray2 = array2[2];
// retrieve from array 3
let martyArray3 = array3;
console.log(martyArray2);