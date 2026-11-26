//shkruaj nje program qe gjen mesataren e nje array me notat
// e studenteve

// in   notat e studenteve
// cal  shuma
//        deklarojme shume = 0
//        lexojm cdo element
//            per cdo element shtojm vleren tek shuma "+="
//      sasia notat.length
// out  mesatarja

// let grades = [6, 5, 8, 10, 9, 8];

// let sum = 0;
// for (let index = 0; index < grades.length; index++) {
//   let current_element = grades[index];
//   sum += current_element;
// }

// let avg = sum / grades.length;

// console.log(`Mesatarja eshte: ${avg.toFixed(2)}`);

// Shkruaj nje program i cili merr emrat e nxenesve te nje klase
// dhe printon emrin me te gjate

// in     emrat e nxenesve
//        deklarojm 1 array
//        percaktojm kushtin e mbaritmit (-1)
//        per aq kohe sa input nuk eshte -1
//          lexojm emrin dhe e ruajme ne variabel
//          ruajm emrin ne array
// cal    deklarojme max = gjatesine e elementit te pare
//        lexojm cdo element te array
//        per cdo element -> gjejme gjatesine .length
//        krahasojme gjatesine me gjatesine e max
//        max = current_element.length
// out    emri me i gjate

// let names = [];
// let student_name = "";
// while (student_name != "-1") {
//   student_name = prompt("Vendos emrin e studentit(-1 per te mbyllur): ");
//   names.push(student_name);
// }

// let max = names[0];
// for (let i = 1; i < names.length; i++) {
//   let current_element = names[i];
//   if (current_element.length > max.length) {
//     max = current_element;
//   }
// }
// console.log(max);

//shkruaj nje program qe merr nga perdoruesi te dhenat
// per 1 student, emri mosha gjinia dhe numer telefoni dhe i ruan ne
// 1 objekt

// in   emri, mosha, gjinia, nr telefoni
//      deklarojm 1 objekt bosh
//      marrim emrin dhe e shtojm tek objekti object.fusha_re
//                                            student.name = "Bob"
// cal
// out  objekti

// let student = {};
// student.name = prompt("Vendos emrin e studentit: ");
// student.age = prompt("Vendos moshen e studentit: ");
// student.gender = prompt("Vendos gjinine e studentit: ");
// student.phone = prompt("Vendos numrin e studentit: ");

// console.log(student);
