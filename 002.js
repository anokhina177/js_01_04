let productsCatalogue = [
    {name: 'Apples', price: 100},
    {name: 'Oranges', price: 120},
    {name: 'Peaches', price: 140},
    {name: 'Grapes', price: 110}
];

let basket = {
    goodList : [],
    countTotalNumber : function() {
        let count = 0;
        this.goodList.forEach(element => {
            count = count+element.quantity;
        });        
        return count;
    },
    countTotalPrice : function() {
        let priceTotal = 0;
        this.goodList.forEach(element => {
            priceTotal = priceTotal+element.quantity*element.product.price;
        });        
        return priceTotal;
    },
    putProduct : function(product, quantity) {
        this.goodList.push({"product" : product, "quantity" : quantity});
    }
}

for (let i = 0; i < productsCatalogue.length; i++) {
    let quantity = 2;
    if (i % 2 == 1)
        quantity = 1;
    basket.putProduct(productsCatalogue[i], quantity);
}

console.log(`Count of goods in the basket: ${basket.countTotalNumber()}`);
console.log(`Total price of goods in the basket: ${basket.countTotalPrice()}`);