var current_users = ["Usama", "ali", "Areeba", "Zain", "Osama"];
var new_users = ["Hamza", "Ayesha", "Ali", "Mahad", "Areeba"];
new_users.forEach(function (new_one_user) {
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("this usernaame ".concat(new_one_user, " is available"));
    }
});
