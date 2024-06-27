function makesandwish (...items: string[]){
   
     console.log("making a sandwish with the following items: \n");
   
     items.forEach(singleitem => console.log(singleitem));
   
     console.log("\nnow enjoy sandwich");
}
makesandwish("chicken","cheese","mayo","egg");

makesandwish("bread","butter");

makesandwish("bread","butter","chicken","cheese","mayo","egg","tomatoes");
