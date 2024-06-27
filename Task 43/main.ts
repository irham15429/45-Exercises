//define a function to print each magician name from an array

function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
    }

    //function to make magicians great through .map it will modify array
    function make_great(magicians: string[]){
      return magicians.map(name => `the great ${name}`) ;
    }
    
    //define an array containing magicians name
    let magician_names = ["harry","hamza","usama"]
    
    //making a copy of original array through .slice() function

    let coyp_magicians_names =  magician_names.slice()
    
    //modify  the copied array to include "the great" with their names
      let copy_great_magicians = make_great(coyp_magicians_names) ;

      //original 
      console.log("original array\n")
      show_magicians(magician_names);

      //copied
      console.log("\ncopied array\n")
      show_magicians(copy_great_magicians);