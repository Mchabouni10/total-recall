// // Total Recall JavaScript

// //1. How do we assign a value to a variable?
// let color = "red"

// //2. How do we change the value of a variable?
// color = "blue"
// //3. How do we assign an existing variable to a new variable?
// let newColor = color

// //4. Remind me, what are declare, assign, and define?
// //Declare: we create a variable by using the word "let or const"
// //Assign: giving value after declaring a variable
// //Define: giving a variable its initial data type

// //5. What is pseudocoding and why should you do it?
// //What is: Pseudocoding is a way to write a description of a computer program or  algorithm in plain english
// //Why: We should use to simplify and planning the program in small logical steps. 


// //6. What percentage of time should be spent
// //thinking about how you're going to solve a problem vs actually typing in code to solve it?
// //A reasonable amount spent in planning and solving the problem is 50-70%
// //and for coding it takes about 50-30%

// //=============================================================================
// // Section B string
// //===============================================================================

// //1. Create a variable called firstVariable
// let firstVariable

// //2. Assign it the value of the string "Hello World"
// firstVariable = "Hello World"

// //3. Change the value of this variable to some number
// firstVariable = 12

// //4. Store the value of firstVariable in a new variable called second Variable
// let secondVariable = firstVariable

// //5. Change the value of secondVariableto any string.
// secondVariable = "I am happy"

// //6. What is the value of firstVariable?
// //it must print 12
// console.log(firstVariable)

// //7. Create a variable called yourName and set it equal to your name as a string.
// //Then, write an expression that takes the string "Hello, my name is " 
// //and the variable yourName so that it returns a new string with them concatenated.
// let yourName = "Jorge"
// // console.log(`my name is: ${yourName}`)
// // with concatenation.
// let newString = "Hello, my name is:" + " " + yourName
// console.log(newString)


// //====================================================
// //Section C 
// //====================================================
// //Using the provided variable definitions, replace the blanks so that all log statements print truein the console.
// //Answers should be all be valid JS syntax and not weird things 
// //that don't make sense but happen to print trueto the console

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' ==='Name');
// // FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false || false || false || false || false || true);
// console.log(!false || false)
// console.log(e === 'Kevin');
// console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 == '48');


// //=====================================================
// // Section D the farm
// //======================================================
// //1. Declare a variable animal. Set it to be either "cow" or something else

// let animal = "cow"

// //2. Write code that will print out "mooooo" if the it is equal to cow

// //3. Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."

// if(animal === "cow"){
//     console.log("Mooo")
// }
// else{
//     console.log("Hey! You are not a cow!")
// }



// //1. Make a variable that holds a person's age; be semantic

// let age = 40;

// //2.Write code that will print out "Here are the keys!", if the age is 16 years or older, or,
// // if the age is younger than 16, a message should print "Sorry, you're too young."

// if(age >= 16){
//     console.log("Here are the keys")
// }
// else{
//     console.log("You are too young")
// };



// ============
// LOOPS
// ============
// 1. Write a loop that will print out all the numbers from 0 to 10, inclusive

// for(let i =0; i <= 10; i++){
//     console.log(i)
// }
// // 2.Write a loop that will print out all the numbers from 10 up to and including 400
// for(let i = 10; i <= 400; i++){
//     console.log(i)
// }
// 3.Write a loop that will print out every third number starting with 12 and going no higher than 4000
// for(i = 12; i < 4000; i += 3){
//     console.log(i)
// }



// ===============
// GET EVEN
// ===============
// 1.Print out the numbers that are within the range of 1 - 100
//  for(let i = 0; i <= 100; i++){
//     console.log(i)   
//  }
//  2.Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

// for(let i = 0; i <= 100; i++){
    
//     if(i % 2 === 0){
//         console.log(i+"<-- is an even number" )
//     }  
//     else{ 
//         console.log(i)
//     } 
//  }



// =================
// 5. Give me Five
// ===================
//1.For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// for(let i = 0; i <= 100; i++){
//     if(i % 5 === 0){
//         console.log('I found : ' + i + ". High five!" )
//     }    
// }
// 1.For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// for(let i = 0; i <= 100; i++){
//     if(i % 5 === 0){
//         console.log('I found : ' + i + ". High five!" )
//     }
//      else if(i % 3 === 0){
//         console.log('I found : ' + i + ". three is a crowd")
//      }   
// }
// 1.For numbers divisible by both three and five, be sure your code prints both messages
// for(let i = 0; i <= 100; i++){
//     if(i % 5 === 0 && i % 3 === 0){
//         console.log(`I found : ${i} high five and three is a crowd`)
//     }
//      else if(i % 3 === 0){
//         console.log('I found : ' + i + ". three is a crowd")
//      }  
//      else if( i % 5 === 0){
//         console.log('I found : ' + i + ". High five!" )
        

//      } 
// }



//======================================
//D. Savings account
//=====================================
// 1. Write code that will save the sum of all the numbers between 1 - 10 
//to a variable called bank_account.

// let bank_account = 0 ;
// for (let i = 1; i <= 10; i++ ){
//     bank_account = i + bank_account 
// }
// console.log('my bank account:' + bank_account)

// 2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all 
//the numbers between 1 - 100 multiplied by 2.

// let bank_account = 0 ;
// for (let i = 1; i <= 100; i++ ){
//     bank_account = (i * 2) + bank_account
// }
// console.log('my bank account:' + bank_account)


 //=====================================
 // III. Arrays & Control flow
 //======================================

//A. Talk about it:
 // 1. What are the things in an array called?
 // a elements or items 
 // 2. Do Arrays guarantee those things will be in order?
 // Yes always things inside an Array goes by order
 //3. What real-life thing could you model with an array?
 // fuits basket

 //B. Easy Does It
//  const quotes = ['banna','strawberries','orage']
//  console.log(quotes[0])
//  console.log(quotes[1])
//  console.log(quotes[2])

 //C. Accessing elements
//  //1. How do you access the 1st element in the array?
//  const randomThings = [1, 10, "Hello", true]
//  console.log(randomThings[0])

 //2. Change the value of "Hello"to "World"
//  randomThings[2] = 'World'
//  console.log(randomThings[2])

 //3. Check the value of the array 
 //to make sure it updated the array. How? Why, yes! console.log();
//  console.log(randomThings[2])

//D. Change values
//1.What would you write to access the 3rd element of the array?
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// console.log(ourClass[2])
// //2. Change the value of "Github" to "Octocat"
// ourClass[4] = 'Octocat'
// console.log(ourClass)
//3. Add a new element, "Cloud City" to the array
// ourClass.push('Cloud City')
// console.log(ourClass)

//E. Mix It Up
// const myArray = [5, 10, 500, 20]
//1. Add the string "Aegon"to the end of the array. Add another string 
//of your choice to the end of the array.
// myArray.push('Aegon','Winter')
// console.log(myArray)
//2. Remove the 5from the beginning of the array
// myArray.shift()
// console.log(myArray)
//3. Add the string "Bob Marley"to the beginning of the array.
// myArray.unshift('Bob Marley')
// console.log(myArray)
//4. Remove the string of your choice from the end of the array.
// myArray.pop()
// console.log(myArray)
//5. Reverse this array using Array.prototype.reverse(). Did you mutate the array?
// What does mutate mean? Did the .reverse()method return anything?
// myArray.reverse()
// console.log(myArray)
//What does mutate mean?
//Mutate mean changing order in our original Array
//Did the .reverse()method return anything?
// Yes it changed the order and reverse the elements inside our Array

//===================================================
// F. Biggie Smalls
//===================================================
// 1. Create a variable that contains an integer.
// let variable = 150;

// // Write an if ... elsestatement that:

// if (variable < 100) {
//     console.log('little number')
// } else console.log('big number')

// G. Monkey in the Middle
// Write an if ... else if ... elsestatement:
// let number = 8;

// if (number < 5) {
//     console.log('little number')
// } else if (number > 10) {
//     console.log('big number')
// } else {
//     console.log('monkey')
// }

// 2. console.log()little numberif the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".

// H. What's in Your Closet?
// Below, we've given you examples of Kristyn and 
// Thom's closets modeled as data in JavaScript.

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "Per Scholas hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
// ];

// // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//     [
//         // These are Thom's shirts
//         "grey button-up",
//         "dark grey button-up",
//         "light blue button-up",
//         "blue button-up",
//     ], [
//         // These are Thom's pants
//         "grey jeans",
//         "jeans",
//         "PJs"
//     ], [
//         // Thom's accessories
//         "wool mittens",
//         "wool scarf",
//         "raybans"
//     ]
// ];
// What's Kristyn wearing today? Using bracket notation to
// access items in kristynsCloset, log the sentence
// "Kristyn is rocking that " + the third item in Kristyn's closet
// + " today!" to the console.
// console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`)

// Kristyn just bought some sweet shades! 
// Add "raybans"to her closet after "yellow knit hat".
// kristynsCloset.splice(6, 0, 'raybans')
// console.log(kristynsCloset)
// Kristyn spilled coffee on her hat... modify this 
// item to read "stained knit hat"instead of yellow.
// kristynsCloset[5] = 'stained knit hat'
// console.log(kristynsCloset)
// Put together an outfit for Thom! Using bracket notation, 
// access the first element in Thom's shirtsarray.
// console.log(thomsCloset[0][1])
// In the same way, access one item from Thom's pants array.
//console.log(thomsCloset[1][2])
// Access one item from Thom's accessories array.
//console.log(thomsCloset[2][1])
// Log a sentence about what Thom's wearing. 
// Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
//console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][1]}`)
// Get more specific about what kind of PJs Thom's wearing this winter.
// Modify the name of his PJ pants to Footie Pajamas.
// thomsCloset[1][2] = 'Footie Pajamas'
// console.log(thomsCloset)

//===========================================
//IV. Functions
//===========================================
//1. A. printGreeting










//======================================================================================================
// B. PrintCool
// Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.

function printCool(name) {
    return (`${name} is cool`)
}
// console.log(printCool("Captain Reynolds"));
// // => "Captain Reynolds is cool";

// C. calculateCube
// Write a function calculateCubethat takes a single number and
// prints the volume of a cube made from that number.
function calculateCube(num) {
    return num ** 3
}
// console.log(calculateCube(5));
// // => 125

// D. isVowel
// Write a function isVowelthat takes a character 
//(i.e. a string of length 1) and returns true if it is a vowel, false otherwise. 
//The vowel could be upper or lower case. 
//Test your function on every vowel and make sure it's working. 
//In general, when you write functions, take a minute to test them 
// with different values to make sure they behave the way you want.

function isVowel(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let decision = false;
    for (let vowel of vowels) {
        if (char === vowel.toUpperCase() || char === vowel.toLowerCase()) {
            decision = true;
        }
    }
    return decision;
}

// console.log(isVowel("a"));
// // => true

// E. getTwoLengths
// Write a function getTwoLengthsthat accepts two parameters (strings).
// The function should return an array of numbers where each
// number is the length of the corresponding string.

function getTwoLengths(string1, string2) {
    const lenArray = []
    lenArray.push(string1.length)
    lenArray.push(string2.length)
    return (lenArray)
}

// console.log(getTwoLengths("Hank", "Hippopopalous"));
// => [4, 13]

// F. getMultipleLengths
// Write a function getMultipleLengths that
// accepts a single parameter as an argument: an array of strings.
// The function should return an array of numbers
// where each number is the length of the corresponding string.

function getMultipleLengths([...strings]) {
    const lenArray = []
    console.log(strings)
    for (let string of strings) {
        lenArray.push(string.length)
    }
    return lenArray
}

// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// => [5, 4, 2, 2, 4]

// G. maxOfThree
// Define a function maxOfThreethat takes three numbers
// as arguments and returns the largest of them.
// If all numbers are the same, it doesn't matter which one is returned.
// If the two largest numbers are the same, one of them should be returned.
// Be sure to test it with larger values in each of the three locations.

const maxOfThree = function (...nums) {
    let max = nums[0];
    for (let num of nums) {
        if (typeof num !== 'number') return console.log(('Please enter valid arguements'));
        if (num > max) max = num;
    }
    return max;
}
// console.log(maxOfThree(9, 6, 9));
// => 9

// H. printLongestWord
// Write a function printLongestWordthat accepts a single argument, an array of strings.
// The method should return the longest word in the array.
// In case of a tie, the method should return the word that appears first in the array.

const printLongestWord = function (arrayOfStrings) {
    let longestWord = arrayOfStrings[0];
    for (let string of arrayOfStrings) {
        if (string.length > longestWord.length) longestWord = string;
    }
    return longestWord;
}

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// => "Peanutbutter"

// V.Objects

// A. Make a user object
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. 
// Set the value of purchased to an empty array []. Set the other values to whatever you would like.

const user = {
    name: 'Raam',
    age: 30,
    email: 'fun@gmail.com',
    purchased: []
}

// B. Update the user
// Our user has changed his or her email address.
// Without changing the original userobject, update the email value to a new email address.
// Our user has had a birthday! Without changing the original userobject,
// increment the age value using the postfix operator. Hint: age++

user.email = 'fullfun@gmail.com'
user.age++

// C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.

// Without changing the original userobject, add a new key locationto the object, 
// and give it a value or some-or-other location (a string).

user.location = 'Newark'

// D. Shopaholic!
// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), 
// add the string "carbohydrates" to the purchasedarray.
user.purchased.push("carbohydrates")
// Our user has purchased an item! They have purchased 
// some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
user.purchased.push("peace of mind")
// Our user has purchased an item! They have purchased some "Merino jodhpurs".
// Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
user.purchased.push("Merino jodhpurs")
// Console.log just the "Merino jodhpurs" from the purchasedarray.

// console.log(user)

// E. Object-within-object
// Remember that you can add an object to an existing object in the same way 
// that you can add any new property/value pair.

// If we want to give our user a friendwith a nameand age, we could write:

// user.friend = {
//     name: "Grace Hopper",
//     age: 85
// }
// When we console.log user, we would see the friendobject added to our user object.

// Write a friendobject into your userobject and give the 
// friend a name, age, location, and purchased array (empty for now)
user.friend = {
    name: "Teo",
    age: 31,
    location: 'Chicago',
    purchased: []
}

// Console.log just the friend's name
// console.log(user.friend.name)
// // Console.log just the friend's location
// console.log(user.friend.location)
// CHANGE the friend's age to 55
user.friend.age = 55
// The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
user.friend.purchased.push("The One Ring")
// The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
user.friend.purchased.push("A latte")
// Console.log just "A latte" from the friend's purchasedarray.
// console.log(user.friend.purchased[1])


// F. Loops
// Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), 
// and prints each element to the console.
for (let item of user.purchased) {
    // console.log(item)
}
// Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.
for (let item of user.friend.purchased) {
    // console.log(item)
}

// G.Functions can operate on objects
// Write a single function updateUser that takes no parameters.When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a return statement, it will merely modify the user object.

function updateUser() {
    user.age++
    user.name = user.name.toUpperCase()
}

//updateUser()
// console.log(user)
// Write a function oldAndLoud that performs 
// the exact same tasks as updateUser, but instead of hard - coding 
// it to only work on our userobject, make it take a parameter person, 
// and have it modify the object that is passed in as an argument when the function is called.
// Call your oldAndLoudfunction with user as the argument.

function oldAndLoud(person) {
    // console.log(person)
    person.age++
    person.name = person.name.toUpperCase()
}

// console.log(user)
// oldAndLoud(user)
// console.log(user)