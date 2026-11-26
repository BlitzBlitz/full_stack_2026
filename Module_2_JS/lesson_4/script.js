// let class_scores = [12, 45, 70, 100];

// // class_scores.push(56);
// // class_scores.splice(2, 1);
// let class_scores_shallow_copy = class_scores; //shallow copy
// let class_scores_hard_copy = [];
// // class_scores_shallow_copy.splice(1, 1);

// let counter = 0;
// let index = 0;
// while (counter < class_scores.length) {
//   console.log(class_scores[index]);
//   class_scores_hard_copy.push(class_scores[index]);
//   index++;
//   counter++;
// }

// class_scores_hard_copy.splice(1, 1);
// console.log("Copy: " + class_scores_hard_copy);
// console.log("Original: " + class_scores);

// let class_scores = [12, 45, 70, 100];

//in    array
//cal   deklarojm 1 variabel max = elementin e pare
//      krahasojme te gjithe elemente me kte max
//      nese gjejm nje element > max  => max = element
//out   printojm max

// let max = class_scores[0];
// let index1 = 0;
// while (index1 < class_scores.length) {
//   let current_element = class_scores[index1];
//   if (current_element > max) {
//     max = current_element;
//   }
//   index1++;
// }
// console.log(max);

// let min = class_scores[0];
// let index2 = 0;
// while (index2 < class_scores.length) {
//   let current_element = class_scores[index2];
//   if (current_element < min) {
//     min = current_element;
//   }
//   index2++;
// }

// let sum = 0;
// let index3 = 0;
// while (index3 < class_scores.length) {
//   let current_element = class_scores[index3];
//   sum += current_element;
//   index3++;
// }

// let avg = sum / class_scores.length;

//write a program that will copy all the elements above
//avg into a new array
//in  array, avg
//cal deklarojme nje array te ri bosh
//    lexojm cdo element te array
//    per cdo element -> krahaso me avg
//          ->nese eshte me i madh se avg -> push ne array e ri
//out printojm array e ri

// let above_avg = [];
// for (let index = 0; index < class_scores.length; index++) {
//   let current_element = class_scores[index];
//   if (current_element > avg) {
//     above_avg.push(current_element);
//   }
// }
// console.log(`Avg is: ${avg} and the scores above it are: ${above_avg}`);

//write a function that will give each student 5%+ of their scores
//as the exam has been taught
//in  class_scores
//cal lexoj cdo element
//    cdo elementi i shtoj 5% +=
//out printoj array

// for (let index = 0; index < class_scores.length; index++) {
//   // let current_element = class_scores[index];
//   // current_element += current_element * 0.05;
//   class_scores[index] += class_scores[index] * 0.05;
// }
// console.log(class_scores);

// let student = {};
// student.name = prompt("Vendos emrin e studentit: ");
// student.age = parseInt(prompt("Vendos emrin e studentit: "));
// student.gender = prompt("Vendos gjinin e studentit (M/F): ");
// console.log(student);

let student = {
  name: "Ben",
  age: 15,
  avg_grade: 7.5,
  is_active: true,
  gender: "M",
  math_grades: [10, 9, 8, 7, 6],
  address: {
    city: "Tirane",
    street: "Rruga e Durresit",
    number: 12,
  },
};
console.log(student.math_grades[0]);
console.log(student.address.city);

let sum = 0;
let index3 = 0;
while (index3 < student.math_grades.length) {
  let current_element = student.math_grades[index3];
  sum += current_element;
  index3++;
}
console.log(sum / student.math_grades.length);
