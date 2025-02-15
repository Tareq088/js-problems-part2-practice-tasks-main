

// Write a function to find the longest num in a given string.

function doLargeString(sampleInput){
    // let sampleInputArray = sampleInput.split(" ");
    // console.log(sampleInputArray)
    let LargestNum = sampleInput[0];
    for(let sampleInputnum of sampleInput){
        // console.log(sampleInput, sampleInput.length)
        if(sampleInputnum > LargestNum){
            LargestNum= sampleInputnum;
        }  
    }
    return LargestNum;
}
// least number in the array
function doMin(sampleInput){
    let Leastnum = sampleInput[0];
    for(let sampleInputnum of sampleInput){
        if(sampleInput < Leastnum){
            Leastnum = sampleInput;
        }
    }
    return Leastnum;
}
let sampleInput = [1,45,22,33,6,1,34,67,23,90];
console.log("The Largest number in the string(", sampleInput, ") is" ,doLargeString(sampleInput))
console.log("The Least number in the Array(", sampleInput, ") is" ,doMin(sampleInput))






