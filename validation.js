function validation(num1, num2){
    if(typeof num1!== "number"){
        console.log("insert number")
    }
    let result = num1 * num2;
    return result;
}

let total = validation([3],9);
console.log(total)