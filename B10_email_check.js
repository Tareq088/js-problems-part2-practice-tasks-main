function sendNotificatin (emailName){
    if(emailName.includes("@") ===false){
        let result = "invalid Email";
        return result;
    }
    let emailSplit = emailName.split("@");
    // console.log(emailSplit);
    let string = " sent you an email form "
    result = emailSplit[0] + string + emailSplit[1] 
    // console.log (result);
    return result;

}
let emailName = "zihadgmail.com";
let output = sendNotificatin(emailName);
console.log(emailName, ":", output);

emailName = "nadim.naim5@outlook.com";
output = sendNotificatin(emailName);
console.log(emailName, ":", output)