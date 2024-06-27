//define a function to print each magician name from an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//function to make magicians great through .map it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "the great ".concat(name); });
}
//define an array containing magicians name
var magician_names = ["harry", "hamza", "usama"];
// call make_great function to modify  magicians name
var great_magicians = make_great(magician_names);
//call show_magicians that show modified list of magicians
show_magicians(great_magicians);
