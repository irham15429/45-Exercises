var userNames = ["mahad", "ali", "sara", "admin", "usman"];
//using foreach loop on array
userNames.forEach(function (oneUser) {
    if (oneUser === "admin") {
        console.log("hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("hello ".concat(oneUser, ", thank you for logging in again."));
    }
});
