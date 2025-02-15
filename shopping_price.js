const products = [
    {name:"shirt", price: 200, quantity: 4},
    {name:"pant", price:400, quantity: 3},
    {name:"pen", price:20, quantity: 5},
]
function purchaseCost(products){
    let sum =0;
    let purchasedProduct = []
    for (let product of products){
        // console.log(product.price)
        // console.log(product.quantity)
        // let cost = product.price * product.quantity;
        // console.log(cost);
        sum += (product.price*product.quantity);
        // console.log(sum)
        // purchasedProduct.push(product.name)
    }
    // console.log(purchasedProduct);
    return sum;

}
 let cost = purchaseCost(products);
 console.log("price of the product is:", cost)