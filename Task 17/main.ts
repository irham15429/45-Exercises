// creating a guest list array
let guestlist = ["ali","sara","ayzal","maryam"];

// making variable for those who cant come
let dontcome = guestlist[0];

// print the names of guests who cant come
console.log(dontcome, "not able to come");

// add or remove values from the guest list array
guestlist.splice(0, 1 , "amir");

// meaasage print for biigger table
console.log("Good news! We have found a bigger table for dinner.");

// adding a new guest list at starting index of array
guestlist.unshift("farhan");

// adding a new guest list at ending index of array
guestlist.push("zain");

// get a middle index of our guest list array
let middleindex: number = Math.floor(guestlist.length / 2);

// adding a new guest to middle index of array
guestlist.splice(middleindex, 0, "osama");

// print message for update list
console.log("Updated list of our guests");

// sending a invitation message to our guest one by one with their names
guestlist.forEach(oneguest => console.log(`salam ${oneguest}, would  you like to dinner with me?`));

// inform that only two can be invited for dinner
console.log("unfortunetely, the new dinner table wont on time, so i can only invite two guests two dinner with me");

// using while-loop to remove the guests from the array until only two names remain 
while(guestlist.length > 2) {
    let removedguest = guestlist.pop();
    console.log(`sorry, ${removedguest} I can't invite you dinner`);
}

// sending a invitation to the last two guest on the list
console.log("invitation to the last two guests");
guestlist.forEach(lasttwo => console.log(`luckly ${lasttwo}, You are still invited to dinner`));

// removing remaining guests from the list
guestlist.pop();
guestlist.pop();

console.log("empty list", guestlist);