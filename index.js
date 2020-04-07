/*Request a user’s age and define whether he/she is an infant (0–2), a child (3-11), a teen (12–18), 
an adult (19-60) or a senior citizen (60– ...). Display the result in the console.*/

let age = prompt('What is your age?'); 
if (age > 0 && age <=2){
    console.log('You are an infant'); 
} else if (age > 2 && age <=11) {
    console.log("You are a child"); 
} else if (age > 11 && age <=18) {
    console.log("You are a teen"); 
} else if (age > 18 && age <=60) {
    console.log("You are an adult"); 
} else if (age > 60) {
    console.log("You are a senior citizen"); 
}

/*Request a number from 0 to 9 from a user and display the symbol that is placed on that keyboard button
(for example, 1–!, 2–@, 3–# etc). Display a result in the console.*/ 

let number = prompt('Number between 0 and 9'); 
if (number === 0) {
    console.log('='); 
} else if (number === 1) {
    console.log('!'); 
} else if (number === 2) {
    console.log('"'); 
} else if (number === 3) {
    console-log('#'); 
} else if (number === 4) {
    console.log('¤'); 
} else if (number === 5) {
    console.log('%');
} else if (number === 6) {
    console.log('&'); 
} else if (number === 7) {
    console.log('/'); 
} else if (number === 8) {
    console-log('('); 
} else if (number === 9) {
    console.log(')');
}

/*Ask a user 2 questions, each with 3 answer options. Write these options also in the prompt window, 
after a question. The user gets 2 points for each correct answer. Show the earned points after the test.*/

let answer1 = prompt ('What is 2+2? 4, 6 or 8?'); 
let answer2 = prompt ('What is the current year? 2000, 2020 or 2010?')
let points = 0; 

if (answer1 == 4) {
    points = points + 2; // points += 2; 
} 

if (answer2 == 2020) {
    points = points +2; 
}

console.log(`Your score is ${points}`); // console.log('Your score is ' + points); 



/*Request a number from a user, and define whether it is positive, negative, or zero. 
Display a resulting message as an alert.*/

let number = prompt('Provide a number');

if (number > 0){
    alert('positive'); 
} else if (number < 0) {
    alert('negative'); 
} else {
    alert('zero'); 
}


/*Request a user’s age and check whether it is realistic (0-120 y.o.). 
If it is realistic, display a message ‘Hi! You are # years old’, otherwise – ‘Hm… Is it even possible?’.*/

let age = prompt('What is your age?'); 

if (age > 0 && age < 120) {
    alert(`Hi! You are ${age} years old`); 
} else {
    alert('Hm...Is it even possible?')
}


// Request a number of a month from a user. Print the name of the month to the webpage as a paragraph using document.write().

let monthNumber = prompt('Number of a month'); 
switch (monthNumber) {
    case "1": 
    document.write("January")
    break;  
    case "2": 
    document.write("February")
    break;  
    case "3": 
    document.write("March");
    break;  
    case "4": 
    document.write("April")
    break;  
    case "5": 
    document.write("May")
    break;  
    case "6": 
    document.write("June");
    break;
    case "7": 
    document.write("July")
    break;  
    case "8": 
    document.write("August")
    break;  
    case "9": 
    document.write("September");
    break;    
    case "10": 
    document.write("October")
    break;  
    case "11": 
    document.write("November")
    break;  
    case "12": 
    document.write("December");
    break;    
}


// Request a number and an extent. Raise the number to the given power and display the result. Do not use ** or Math.pow() here.

let number = prompt('number'); 
let extent = prompt('extent');
let result = 1;  
for (let i = 1; i<= extent; i++) {
 result = result * number; 
}

console.log(result); 


// Write a calculator. Request 2 numbers and an operation as a symbol (+ - * /). The program solves it depending on the operation and shows the result.

let number = prompt('Provide a number'); 
let symbol = prompt('Provide a mathematical symbol'); 
let number2 = prompt('Provide a second number');
let integer = parseInt(number); 
let integer2 = parseInt(number2); 
if (symbol === '+') {
    result= integer + integer2;
    console.log(result); 
} else if (symbol === '-') {
    result= integer - integer2;
    console.log(result); 
} else if (symbol === '*') {
    result= integer * integer2;
    console.log(result); 
} else if (symbol === '/') {
    result= integer / integer2;
    console.log(result); 
}
//I feel that the task above could have been done in a shorter way. If so, please advise how. 


// Count the factorial of the number given by a user. For example, 4! is 1 * 2 * 3 * 4 = 24, or 6! is 1 * 2 * 3 * 4 * 5 * 6 = 720.

let numberRequested = prompt('Provide a number');  
let result = 1; 
for (i = 0; i < numberRequested; i++){
    result = result * (numberRequested -i); 
    console.log(numberRequested +'! =' + result)
}


// Suggest a user solve 2 + 2 * 2 until he/she does it right.

let answer; 
do {
    answer = prompt('Resolve 2 + 2 * 2'); 
} while (answer != 8); 

console.log('Correct!')



/* Count sheep. Request a non-negative integer, 3 for example, and print a string with a murmur: “1 sheep...2 sheep...3 sheep...” to the page 
using document.write(). If a user types a negative number in, alert an error.*/

let number = prompt('Non-negative number');

for (let i = 1; i <= number ; i++) {
    document.write( ' ' + i + ' ' + 'sheep'); 
}

if (number <= 0) {
    alert('Error!'); 
}

