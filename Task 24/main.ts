//define variables
let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple" , "banana", "orange" ];

//test for equalilty and inequality with string
console.log("is apple is equal to apple?");
console.log(apple == "apple");

console.log("\nis apple is not equal to apple?");
console.log(apple != "apple");

//test using the lower case function
console.log("\nis APPLE is equal to apple after converting to lower case");
console.log(uppercaseApple.toLowerCase() == "apple" );

console.log("\nis APPLE is not equal to apple after converting to lower case");
console.log(uppercaseApple.toLowerCase() != "apple" );

//numerical tests 
// equal to
console.log("\n is ten is equal to twenty?");
console.log(ten == twenty);

//not equal to
console.log("\n is ten is not equal to twenty?");
console.log(ten != twenty);

//greater than
console.log("\n is ten is greater then zero");
console.log(ten > 0);

//less than
console.log("\n is twenty is less then 10");
console.log(twenty < 10);

//greater then or equal to
console.log("\nis ten is greater then or equal to 5?");
console.log(ten >= 5);

//less than equal to
console.log("\n twenty is less than or equal to five");
console.log(twenty <= 10);

//test using "and" and "or" operators
//using "and"
console.log("\n twenty is not equal to 10 and twenty is greater then 10");
console.log(twenty != 10 && twenty > 10);

console.log("\n twenty is not equal to 10 and twenty is greater then 10");
console.log(twenty != 10 && twenty > 30);

//using "or"
console.log("\n twenty is greater than 50 or 20 is equal to 20");
console.log(twenty > 50 || 20 == 20 );

console.log("\n twenty is greater than 50 or 20 is not equal to 20");
console.log(twenty > 50 || 20 != 20 );

//test whether an items is include in array
console.log("\n is orange include in my fruits array");
console.log(fruits.includes("orange"));

//not include
console.log("\n is orange not include in my fruits array");
console.log(fruits.includes("orange"));

