//making a function
function make_shirt(size, printmessage) {
    if (size === void 0) { size = "large"; }
    if (printmessage === void 0) { printmessage = "i love typescript"; }
    console.log("creating a ".concat(size, " shirt with ").concat(printmessage, " prints on shirt"));
}
// calling a function with by default values
make_shirt();
// calling a function now with medium size and default message
make_shirt("medium");
//calling a function now with small size and also different print message
make_shirt("small", "i love javascript");
