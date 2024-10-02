// Chapter 17-20
// Q1 Declare and initialize an empty multidimensional array.

// (Array of arrays)

// arr = [[], [], []];

// Q2 Declare and initialize a multidimensional array representing the following matrix

// multiArr = [[0,1,2,3], [1,0,1,2], [2,1,0,1]];
// for(var i = 0; i <= multiArr.length; i++){
//     console.log(`${multiArr[i].join(" ")} \n`)
// }

// Q3 Write a program to print numeric counting from 1 to 10.

// for ( i = 1; i <= 10; i++) {
//     document.write(`${i} <br>`)
// }

// Q3 multiplication table of any number using for loop. Table number & length should be taken as an input from user
// var table = +prompt("Enter table number");
// var tableLength = +prompt("Enter length");
// document.write(`<b>Multiplication table of ${table}</b><br> `);
// document.write(`Lenth ${tableLength} <br> `);

// for ( var i = 1; i <= tableLength; i++) {
//     document.write(`${table} x ${i} = ${table * i}<br> `);
// }

// Q5 Write a program to print items of the following array using for loop:

// var fruits = ["apple","banana","mango","orange","strawberry"]
// for(i=0;i<fruits.length;i++){
//     document.write(`${fruits[i]} <br>`)
// }
// document.write(`<br>`)
// for(i=0;i<fruits.length;i++){
//     document.write(`Element at index ${i} is ${fruits[i]} <br>`)
// }

/*Q6 Generate the following series in your browser. See
example output.
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k*/
// document.write(`Counting <br><br>`)

// for(i = 1; i <= 15; i++){
//     document.write(`${i}, `)
// }
// document.write(`<br><br>Reverse counting <br><br>`)

// for(i=10;i>0;i--){
//     document.write(`${i}, `)
// }
// document.write(`<br><br>Even <br><br>`)
// for(i = 0; i <= 20; i+=2){
//     document.write(`${i}, `)
// }

// document.write(`<br><br>Odd <br><br>`)
// for(i = 1; i <= 20; i+=2){
//     document.write(`${i}, `)
// }

// document.write(`<br><br>Series <br><br>`)

// for(i = 2; i <= 20; i+=2){
//     document.write(`${i}k, `)
// }

/*Q7
Write a program to enable “search by user input” in an
array.
After searching, prompt the user whether the given item is
found in the list or not.*/
// var A = ["cake", "apple pie", "cookie", "chips", "patties"]

// var userInput = prompt("Welcome to ABC Bakery, What do you want to order sir/ma'am?")
// var flag = false
// var itemNo = 0
// for (var i = 0; i < A.length; i++) {
//     if (userInput.toLowerCase() === A[i]) {
//         flag = true
//         itemNo = i
//     }

// }

// if (flag === true) {
//     document.write(`${userInput} is available at index ${itemNo} in our bakery`)
// }
// else {
//     document.write(`We are sorry. ${userInput} is not available in our bakery`)
// }

// // Q8 Writea program to identify the largest number in the given array.
// var A = [24, 53, 78, 91, 12]

// var max = A[0]
// for (var i = 0; i < A.length; i++) {
//     if (A[i] > max) {
//         max = A[i]
//     }
// }

// document.write(`The largest number in the given array is ${max} <br>`)

// // Q9 Write a program to identify the smallest number in the given array.

// var min = A[0]
// for (var i = 0; i < A.length; i++) {
//     if (A[i] < min) {
//         min = A[i]
//     }
// }

// document.write(`The lowest number in the given array is ${min} <br>`)

// // Q10 Write a program to print multiples of 5 ranging 1 to 100.

// for (var i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         document.write(`${i}, `)
//     }
// }

// Chapters21-25

// // Q1
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName + " " + lastName;
// alert(`Hello ${fullName}, How are you today?`);

// Q2
// var userInput = prompt("Enter your favorite mobile phone model");
// document.write(`Length of your input is ${userInput.length} <br>`)

// // Q3
// var text = "Pakistani";
// var index = text.indexOf("n");
// document.write(`<br>String: ${text} <br> The index of 'n' is ${index}`);

// // Q4
// var text = "Hello World";
// var lastIndex = text.lastIndexOf("l");
// document.write(`<br>Last index of 'l' is ${lastIndex}`);

// // Q5
// var text = "Pakistani";
// var charAtThirdIndex = text.charAt(3);
// document.write(`<br>Character at index  3 is ${charAtThirdIndex} <br>`);

// // Q6
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// alert("Hello "+ firstName + " " + lastName+" How are you today?");

// Q7

// var cityName = "Hyderabad";
// document.write(`City: ${cityName} <br>`);

// var newCityName = cityName.replace("Hyder", "Islam");
// document.write(`After replacement: ${newCityName} <br>`);

// Q8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write(`${message} <br>`);

// var newMessage = message.replace(/and/g, "&"); // with regularexprssion
// document.write(`${newMessage} <br>`);

// var anotherMessage = message.replaceAll("and", "&"); with replaceAll
// document.write(`${anotherMessage} <br>`);

// Q9

// var string = "472";
// document.write(`Value: ${string} <br>`);
// document.write(`Type: ${typeof string} <br>`);

// var number = Number(string);

// document.write(`Value: ${number} <br>`);
// document.write(`Type: ${typeof number} <br>`);

// // Q10
// var userInput = prompt("Enter any string");

// document.write(`User input: ${userInput} <br>`);

// userInput = userInput.toUpperCase();

// document.write(`Upper case: ${userInput} <br>`);

// Q11
// var userInput = prompt("Enter any string");

// document.write(`User input: ${userInput} <br>`);

// var newStr = userInput.toLowerCase().split(``)
// newStr[0] = newStr[0].toUpperCase()
// newStr = newStr.join(``)

// document.write(`Title case: ${newStr} <br>`)

// Q12

// var num = 35.36 ;

// var newNum = num.toString()
// newNum = newNum.replace(".","")
// document.write(`Number: ${num} <br>`)
// document.write(`Result: ${newNum} <br>`)

// // Q13

// var userInput = prompt("Enter your username");

// var specialChars = [33, 44, 46, 64];

// var flag = false;

// for (var i = 0; i < userInput.length; i++) {
//     if (specialChars.indexOf(userInput.charCodeAt(i)) !== -1) {
//         flag = true;
//         break;
//     }
// }

// if (flag === true) {
//     document.write("Please enter a valid username<br>   without any special characters.<br>    These character are not allwod @ . , ! ");
// } else {
//     document.write(`Username: ${userInput}`);
// }



// // Q14

// A = ["cake", "apple pie", "cookie", "chips", "patties"]

// var input = prompt("Welcome to ABC Bakery, What do you want to order sir/ma'am?").toLowerCase();

// var flag = false;
// var itemNo = 0

// for (var i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === input) {
//         itemNo = i
//         flag = true;
//         break;
//     }
// }

// if (flag === true) {
//     document.write(`${input} is available at index ${itemNo} in our bakery`)
// }
// else {
//     document.write(`We are sorry. ${input} is not available in our bakery`)
// }


// Q15
// var password = prompt("Enter your password");

// if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) { // Check if the first character is a number
//   alert("Password must not start with a number");
//   var password = prompt("Enter your password");
// }

// if (password.length < 6) { //check passworrd length 
//   alert("Password must be at least 6 characters long");
//   var password = prompt("Enter your password");
// }

// var validPassword = true;
// for (var i = 0; i < password.length; i++) {
//   if (
//     (password.charCodeAt(i) < 48 || password.charCodeAt(i) > 57) &&  //numbers
//     (password.charCodeAt(i) < 65 || password.charCodeAt(i) > 90) && //capital alphapet
//     (password.charCodeAt(i) < 97 || password.charCodeAt(i) > 122) // small aplphabet
//   ) 
//   {
//     validPassword = false;
//     break;
//   }
// }

// if (validPassword === true) {
//   alert("Valid Password");
// } else {
//   alert("Invalid Password");
// }

// // Q16
// var university = "University of Karachi"
// console.log(university.split(""))
// for(var i =0;i<university.length;i++){
//     document.write(`${university[i]} <br>`)

// }

// // Q17

// var userInput = "Pakistan"
// document.write(`User Input: ${userInput} <br>`)
// document.write(`Last Character of Input: ${userInput.charAt(userInput.length -1)} <br>`)

// // Q18
// var string = "The quick brown fox jumps over the lazy dog."
// var count = 0;
// var words = string.split(" ");
// for (var i = 0; i < words.length; i++) {
//     if (words[i].toLowerCase() === "the") {
//         count++;
//     }
// }
// document.write(`Text: ${string}`)

// document.write(`<br>There are ${count} occurrence(s) of  word "the"  `)

// // Q1
// var userNumber = parseFloat(prompt("Enter number"))
// if(userNumber >0 ){
//     document.write(`Number: ${userNumber} <br>`)
//     document.write(`Number: ${Math.round(userNumber)} <br>`)
//     document.write(`Number: ${Math.floor(userNumber)} <br>`)
//     document.write(`Number: ${Math.ceil(userNumber)} <br>`)


// }
// else{
//     document.write(`Number must be positive interger`)

// }


// // Q2
// var userNumber = parseFloat(prompt("Enter number"))
// if(userNumber <0 ){
//     document.write(`Number: ${userNumber} <br>`)
//     document.write(`Number: ${Math.round(userNumber)} <br>`)
//     document.write(`Number: ${Math.floor(userNumber)} <br>`)
//     document.write(`Number: ${Math.ceil(userNumber)} <br>`)


// }
// else{
//     document.write(`Number must be negative interger`)

// }

// // Q3
// var userNumber = parseFloat(prompt("Enter number"))
// document.write(`The absolute value of ${userNumber} is ${Math.abs(userNumber)}`)


// Q4

// document.write(`Random Dice value: ${Math.floor(Math.random()*6 +1)}`)
// document.write(`Random Dice value: ${Math.floor(Math.random()*6 +1)}`)

// // Q5
// var toss = Math.round(Math.random())
// if(toss == 0){
//     document.write(`2<br>Random coin value: Heads`)
// }
// else{
//     document.write(`1<br>Random coin value: Tails`)

// }


// // Q6
// document.write(`Random number between 1 to 100: ${Math.floor(Math.random()*100+1)}`)


// // Q7

// var weight = parseFloat(prompt("Enter your weight in kilogram"));
// document.write(`The weight of user is ${weight}`)

// // Q8
// var secretNumber = Math.floor(Math.random()*10+1)
// var userNumber = +prompt("Enter your number between 1-10");
// if(userNumber === secretNumber){
//     document.write(`Secret number is also ${secretNumber}<br> Congrats` )
// }
// else{
//     document.write(`The secret number was ${secretNumber} & your number is ${userNumber} <br>
//         Better Luck Next time`)
// }