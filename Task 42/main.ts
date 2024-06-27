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
    
    // call make_great function to modify  magicians name
     let great_magicians = make_great(magician_names);

     //call show_magicians that show modified list of magicians
     show_magicians(great_magicians);

