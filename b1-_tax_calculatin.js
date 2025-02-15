function calculateTax(income, expense){
    if(income < 0 || expense < 0 || income < expense || typeof income !== "number" || typeof expense !== "number"){
        console.log("Invalid Input")
    }
    else{
        let tax = (income-expense)*0.2;
        return tax;
    }
}
let income = 5000;
let expense = 100;
let output1 = calculateTax(income,expense);
console.log("total payabel tax is:", output1);