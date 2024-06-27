function makesandwish() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("making a sandwish with the following items: \n");
    items.forEach(function (singleitem) { return console.log(singleitem); });
    console.log("\nnow enjoy sandwich");
}
makesandwish("chicken", "cheese", "mayo", "egg");
makesandwish("bread", "butter");
makesandwish("bread", "butter", "chicken", "cheese", "mayo", "egg", "tomatoes");
