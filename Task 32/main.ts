let current_users = ["Usama","ali","Areeba","Zain","Osama"];

let new_users = ["Hamza","Ayesha","Ali","Mahad","Areeba"];

new_users.forEach(new_one_user => {
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    if(our_condition){
        console.log(`sorry ${new_one_user} is already taken!`);
    }else{
        console.log(`this usernaame ${new_one_user} is available`);
    }
})