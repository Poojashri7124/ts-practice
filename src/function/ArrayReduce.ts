let prices: number [] = [100,200,300,400,500]; //array of numbers
let total = prices.reduce ((sum, price) => sum + price, 0); //0 is the initial value of sum
console.log(total);