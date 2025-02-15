function checkDigitsName(name,numberArray){
    let test= /\d/.test(name);
    console.log(test);
    if(typeof(name)!== "string"){
        let result = "Invalid Input";
        return result;
    }
    else if(test){
        let result = true;
        return result;
    }
    return false;
}
let name = "Suman";
let numberArray = [0,1,2,3,4,5,6,7,8,9]
let output = checkDigitsName(name,numberArray);
console.log(name,":", output);

name = "Raj123";
output = checkDigitsName(name,numberArray);
console.log(name,":", output);

name = "Name2024";
output = checkDigitsName(name,numberArray);
console.log(name,":", output);

name = "!@#";
output = checkDigitsName(name,numberArray);
console.log(name,":", output);

name = ["Raj"];
output = checkDigitsName(name,numberArray);
console.log(name,":", output);