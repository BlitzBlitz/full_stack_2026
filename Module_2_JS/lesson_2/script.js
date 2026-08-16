//shkruaj nje progam i cili merr permasat e nje dhome
// dhe printon cmimin e tapetit qe duhet per te shtruar kte dhome
// cmimi eshte 10$ per m^2
//  nese siperfaqa eshte mbi 200 m^2 klienti perfiton
//  20% zbritje

//input     gjatesi, gjeresi
//cal       totali = gjatesi * gjeresi * cmimi
//          Formojme kusthin:
//          area > 200 => totali = totali - totail * 0.2
//output    totali

// let height = prompt("Vendos gjatesine e dhomes: ");
// let width = prompt("Vendos gjeresine  e dhomes: ");

// let area = height * width;
// let price = area * 10;

// if (area > 200) {
//   price = price - price * 0.2;
// }

// console.log("The total price is: " + price);

// const a = 2;
// if (1 == "1") {
//   let b = 3;
//   console.log(a + b);
// }
// console.log(b);

//Discount Calculator
// Apply discounts based on purchase amount:

// 100€ or more → 20%
// 50€–99€ → 10%
// Less than 50€ → No discount

//in    price amount
//cal   total_discount
//          if price_amount > 1000 => total_discount  = price_amount * 0.2
//          else if price_amount > 50 && price_amount < 100 =>  total_discount  = price_amount * 0.1
//          else discount = 0
//out   print discount

let price_amount = prompt("Vendosini totalin e fatures: ");
let total_discount;
if (price_amount > 100) {
  total_discount = price_amount * 0.2;
} else if (price_amount > 50 && price_amount < 100) {
  total_discount = price_amount * 0.1;
} else {
  total_discount = 0;
}

console.log("Total discount is: " + total_discount);
