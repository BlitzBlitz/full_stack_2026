//write a program that will print the name of the user 10 times

//in  username

//cal Numri i perseritjeve: 10
// piken e fillimit:   0
// piken e mbarimit:   10
// hapin:             +1

//out  printojm username

// let username = prompt("Vendos emrin: ");
// let counter = 0;
// while (counter < 10) {
//   console.log(counter + 1 + ". " + username);
//   counter++;
// }

//write a program that will print the username
//as many times as his age

//in  username, age

//cal Numri i perseritjeve: age
// piken e fillimit:   0
// piken e mbarimit:   age
// hapin:             +1

//out  printojm username

// let username = prompt("Vendos emrin: ");
// let age = prompt("Vendos moshen: ");
// let counter = 0;
// while (counter < age) {
//   console.log(counter + 1 + ". " + username);
//   counter++;
// }

//write a program that will print all the numbers
//up untill the age of the user

//in  age
//cal Numri i perseritjeve: age
// piken e fillimit:   0
// piken e mbarimit:   age
// hapin:  +1
//out

// let age = prompt("Vendos moshen: ");
// let counter = 0;
// while (counter < age) {
//   console.log(counter + 1);
//   counter++;
// }

// write a program that will print all the numbers
//from the age of the user to 1

// let age = parseInt(prompt("Vendos moshen: "));
// let counter = age;

// while (counter > 0) {
//   console.log(counter);
//   counter--;
// }

//write a program that will get a number and print
//all the odd number from 0 to that number

// let age = prompt("Vendos moshen: ");
// let counter = 0;
// while (counter < age) {
//   if (counter % 2 == 1) {
//     console.log(counter + 1);
//   }
//   counter++;
// }

//write a program that will accept the scores of the students
//of a class and print if they passed or failed, the teacher
//enters -1 when he is finished

//in  piket e studenteve
//cal perserisim derisa mesuesi te vendosi "-1"
//out printojm passed/failed

// let score = parseInt(
//   prompt("Vendos piket e studentit(-1 per te perfunduar): "),
// );
// while (score != -1) {
//   if (score > 60) {
//     console.log("Passed");
//   } else {
//     console.log("Failed");
//   }
//   score = parseInt(prompt("Vendos piket e studentit(-1 per te perfunduar): "));
// }

let counter = 0;
let value_to_print = 100;
while (counter < 10) {
  console.log(value_to_print);
  value_to_print += 100;
  counter++;
}
