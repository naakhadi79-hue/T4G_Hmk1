// Ask the user for their details
let name = prompt("Enter your name:");
let age = prompt("Enter your age:");
let email = prompt("Enter your email:");

// Display the result
alert(`Hi ${name}, you are ${age} years old and we'll keep in touch via your email: ${email}`);


// A. Store your name inside a variable and log it
let name =` Khadijah`;
console.log(name);

// B. Store your age inside a variable and log it
let age = 19; // Replace with your actual age
console.log(age);

// C. Add two numbers
let sum = 10 + 5;
console.log(sum);

// D. Subtract two numbers
let difference = 10 - 5;
console.log(difference);

// E. Divide two numbers
let quotient = 10 / 5;
console.log(quotient);

// F. Multiply two numbers
let product = 10 * 5;
console.log(product);

// G. Find the remainder of 15 % 4
let remainder = 15 % 4;
console.log(remainder);

// H. Store a boolean value
let isStudent = true;
console.log(isStudent);

// I. Store a number and log its data type
let number = 100;
console.log(typeof number);

// J. Store a string and log its data type
let greeting = "Hello";
console.log(typeof greeting);





let username = prompt("Enter your username:");
let age = Number (prompt("Enter your age:") );
let email = prompt("Enter your email:");

if (age < 12) {
    alert(`Hi ${username}, you are ${age} years old and you are too young to register.\n\nSorry 😔😔`);
}
else if (age >= 12 && age < 18) {
    alert(`Hi ${username}, you are ${age} years old and you have limited options to register for.\n\nWe will keep in touch via your email (${email}) 👏👏`);
}
else {
    alert(`Hi ${username}, you are ${age} years old and you can register for any option of your choosing.\n\nWe will keep in touch via your email (${email}) 👏👏`);
}function checkAge() {
  const age = document.getElementById("age").value;
  const response = document.getElementById("response");

  if (age < 13) {
    response.textContent = "You are a child.";
  } else if (age >= 13 && age <= 19) {
    response.textContent = "You are a teenager.";
  } else if (age >= 20 && age <= 59) {
    response.textContent = "You are an adult.";
  } else if (age >= 60) {
    response.textContent = "You are a senior.";
  } else {
    response.textContent = "Please enter a valid age.";
  }
}















