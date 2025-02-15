function calculateFinalScore(objects){
    // console.log(objects);
    if(typeof(objects) !== "object"){
        let result = objects + "  :  " +"Invalid Input";
        return result;
    }
    else{
        let finalScore = objects.testScore + objects.schoolGrade;
        if (finalScore >=60 && objects.isFFamily){
            console.log(objects)
            let result = "  :  " + true;
            return result;
        }
        else{
            console.log(objects)
            let result = "  :  " + false;
            return result;
        }
    }
}
let objects = {name:"Rajib", testScore: 45, schoolGrade:25, isFFamily: true,}
let output = calculateFinalScore(objects);
console.log(output)


objects = {name:"Rajib", testScore: 45, schoolGrade:25, isFFamily: false,}
output = calculateFinalScore(objects);
console.log(output)

objects = "hello"
output = calculateFinalScore(objects);
console.log(output)

objects = {name:"Rajib", testScore: 15, schoolGrade:25, isFFamily: true,}
output = calculateFinalScore(objects);
console.log(output)
