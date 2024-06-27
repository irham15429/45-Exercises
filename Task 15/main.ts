
let guestlist = ["ali","sara","ayzal","maryam"];
let dontcome = guestlist[1];
console.log(dontcome, "not able to come");
guestlist.splice(1, 1 , "amir");
guestlist.forEach(guest => console.log(`salam ${guest}, would u like to dinner with me?`));