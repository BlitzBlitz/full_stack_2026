// Problemi: Shkruaj nje program qe merr nga perdoruesi
// vitin e lindjes dhe kthen moshen e tij

//input:    viti i lindjes
//cal:      viti_aktual - viti_i_lindjes
//output:   mosha

// let viti_i_lindjes;
// viti_i_lindjes = prompt("Vendos vitin e lindjes");

// let mosha;
// mosha = 2026 - viti_i_lindjes;

// console.log("Mosha juaj eshte: " + mosha);

//Problemi: Shkruaj nje program qe merr pagen baze te perdoruesit
// dhe pagen nga oret shtese qe ai ka dhe llogarit pagen totale

//input     paga baze, paga shtese
//cal       paga_baze + paga_shtese
//output    paga total

let paga_baze = parseInt(prompt("Vendos pagen baze"));
let paga_shtese = parseInt(prompt("Vendos pagen shtes"));

console.log(typeof paga_baze);
console.log(typeof paga_shtese);

let paga_total = paga_baze + paga_shtese;

console.log("Paga totale eshte: " + paga_total);
