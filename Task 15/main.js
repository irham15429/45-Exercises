var guestlist = ["ali", "sara", "ayzal", "maryam"];
var dontcome = guestlist[1];
console.log(dontcome, "not able to come");
guestlist.splice(1, 1, "amir");
guestlist.forEach(function (guest) { return console.log("salam ".concat(guest, ", would u like to dinner with me?")); });
