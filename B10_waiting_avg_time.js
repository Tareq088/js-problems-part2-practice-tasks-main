function waitingTime(array, serialNumber){

    if(Array.isArray(array) === false || typeof(serialNumber) !== "number"){
        let result ="Invalid Input";
        return result;
    }
    else{
        let totaltime = 0;
        for(let time of array){
            totaltime += time;
        }
        // console.log(totaltime);
        let avgTime = Math.round(totaltime/array.length);
        // console.log(avgTime);
        let remainPerson = serialNumber - array.length - 1;
        // console.log(remainPerson);
        let moreTimeNeed = remainPerson * avgTime;
        // console.log(moreTimeNeed);
        return moreTimeNeed;
    }
}
let array = [3,5,7,11,6];
let serialNumber = 10;
let output = waitingTime(array, serialNumber);
console.log(array, serialNumber, " time needs: ", output, "minute");

array = [13,2];
serialNumber = 6;
output = waitingTime(array, serialNumber);
console.log(array, serialNumber, " time needs: ", output, "minute");

array = [13,2,6,7,10];
serialNumber = 6;
output = waitingTime(array, serialNumber);
console.log(array, serialNumber, " time needs: ", output, "minute");

array = 7;
serialNumber = 10;
output = waitingTime(array, serialNumber);
console.log(array, serialNumber, ":", output);


array = "[6,2]";
serialNumber = 9;
output = waitingTime(array, serialNumber);
console.log(array, serialNumber, ":", output);

array =  [3,5,7,11,6];
serialNumber = "9";
output = waitingTime(array, serialNumber);
console.log(array, serialNumber, ":", output);
