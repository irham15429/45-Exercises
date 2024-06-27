//making a array of countries and print its original order
let countriesTovisits: string[] = ["china","pakistan","brazil","argentina"];
console.log("original array:", countriesTovisits);

// print the array in alphabetical order without modifying the actual array list
console.log("Alphabetic order:",[...countriesTovisits].sort());

// show that the array is still in its original order
console.log("Still in original order:", countriesTovisits);

// print the array in reversed order without modifying the actual array
console.log("Reverse order:" , [...countriesTovisits].reverse());

// show that the array is still in its original order
console.log("Still in original order:", countriesTovisits);

// we have changed the original array order now
console.log("original array reversed:" , countriesTovisits.reverse());

// print the array to show that it's back to its original order
console.log("Back to original order:" , countriesTovisits.reverse());

// print the array to show that its order has been changed in alphabetical order now
console.log("Sorted in alphabetical order:", countriesTovisits.sort());

// we have changed the original array order now in reverse order again
console.log("original array reversed again:" , countriesTovisits.reverse());
