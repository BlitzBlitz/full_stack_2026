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

let class_scores = [12, 45, 70, 100];

//in    array
//cal   deklarojm 1 variabel max = elementin e pare
//      krahasojme te gjithe elemente me kte max
//      nese gjejm nje element > max  => max = element
//out   printojm max

let max = class_scores[0];
let index = 0;
while (index < class_scores.length) {
  let current_element = class_scores[index];
  if (current_element > max) {
    max = current_element;
  }
  index++;
}
console.log(max);
