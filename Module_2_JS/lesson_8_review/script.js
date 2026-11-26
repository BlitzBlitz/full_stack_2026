// write a program that will get the wage of the user
// and print tax_amount.
// < 10000   -> 10%
// < 20000   -> 20%
// > 20000   -> 30%

// in   wage          -> prompt()
// cal  wage < 10000            -> wage * 0.1
//      else if wage < 20000    -> WAGE * 0.2
//      else  wage > 20000    ->    WAGE * 0.3
// out  tax_amount

// let wage = prompt("Vendos pagen: ");
// let tax_amount = undefined;
// if (wage <= 10000) {
//   tax_amount = wage * 0.1;
// } else if (wage <= 20000) {
//   tax_amount = wage * 0.2;
// } else {
//   tax_amount = wage * 0.3;
// }

// console.log("Taksa eshte: ", tax_amount);

// write a program that will print the avg of a studnet
// after taking the grades from his teacher

// in   notat
//      cikel i papercaktuar
// cal  deklarojm sum
// out  mesatren

let sum = 0;
let amount = 0;
let grade = 0;
while (grade != -1) {
  grade = +prompt("Vendos noten(-1 per te shfaqur mesataren): ");
  sum += grade;
  amount += 1;
}

avg = sum / amount;

console.log(avg);
