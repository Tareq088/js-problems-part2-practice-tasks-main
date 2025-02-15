                            // ### Task -1: 
// Find the lowest number in the array below.


function doLeastNum(heights2){
    let LeastNum = heights2[0];
    for (let height of heights2){
        if(height < LeastNum){
            LeastNum = height;
        }
    }
    return LeastNum;
}
const heights2 = [167, 190, 120, 165, 137];
let output1 = doLeastNum(heights2);
console.log("The Lowest Num in the array is:", output1)

// ----------------

                                    // ### Task -2: 
// Find the friend with the smallest name.

function doSmallestName (heights){
    let smallestName = heights[0];
    // console.log(heights)
    for(let heightName of heights){
        // console.log(heightName)
        if(heightName.length < smallestName.length){
            smallestName = heightName;
        }
    }
    return smallestName;
}
const heights = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
let output2 = doSmallestName(heights);
console.log("The smallest name is ", output2);

                                                    // ### Task-4: 

// You are `given an array of phone objects`, each containing information about the `model, brand, and price`. Your task is to write a JavaScript function named `findAveragePhonePrice` that takes this `array as input` and returns the `average price of phone`.

function findAveragePhonePrice(phones){
    let phonePrice = []
    for (let phone of phones){
        phonePrice.push(phone.price)
    }
    console.log("phone price array is:", phonePrice);
    let sum = 0;
    for(let i=0;i<phonePrice.length;i++){
        sum += phonePrice[i];
    }
    console.log("total phone price is:", sum, "tk");
    let phonePriceAvg = (sum/phonePrice.length).toFixed(2);
    return phonePriceAvg
}

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

let output3 = findAveragePhonePrice(phones);
console.log("The average price of the phone is:", output3, "tk");

/* --- */

                                    // ### Task -5: (Hard)
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

function totalSalaryMonthly(employees) {
    console.log(employees[0]);
    let salaryArray= [];
    for(let i=0; i<employees.length; i++){
        let salary = employees[i].starting + employees[i].increment * employees[i].experience;
        console.log("each salary is :", salary);
        salaryArray.push(salary) 
    }
    console.log("salary Array is:", salaryArray);
    let totalsalary = 0;
    for(let i=0; i<salaryArray.length; i++){
        totalsalary += salaryArray[i];
        // console.log(totalsalary);
    }
    return totalsalary;
}
const employees = [
        { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
        { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
        { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
        { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
    ];
let output4 = totalSalaryMonthly(employees);
console.log("Total salary in the month is:", output4)
