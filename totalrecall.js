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