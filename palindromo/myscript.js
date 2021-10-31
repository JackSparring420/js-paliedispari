// SOLUZIONE 1

// // 1.chiedo all'utente di inserire una parola
// const parola = prompt("inserisci una parola:");
// // 2.inverto la parola
//     // 2.1creo una funzione che mi va ad invertire le parole
// function invertiParola(str){
//   let parolaInversa = '';

//   for(let i = str.length - 1; i >= 0; i--) {
//       parolaInversa += str[i];  //ciclo che mi va a prendere le singole lettere di una parola partendo dall'ultima e finendo con la prima.
//   };

//   return parolaInversa;
// }
//     // 2.3 creo una variabile dove registrare la parola inversa
//     const parolaInversa = invertiParola(parola);
// // contronto la parola con la parola inversa
// if(parola == parolaInversa){
//     console.log('la parola è palindroma');
//   } else {
//     console.log('la parola non è palindroma');
// }

// SOLUZIONE 2

// chiedo all'utente di inserire una parola
const parola = prompt("inserisci una parola:");
// creo una funzione per sapere se la parola è palindroma
//creo una equazione bolleana per dichiarare se la parola è palindroma dentro la funzione
  let parolaPalindroma = false
function invertiParola(str){
//creo una variabile dove inserire la parola composta al contrario
  let parolaInversa = '';
//creo unciclo che mi va a prendere le singole lettere di una parola partendo dall'ultima e finendo con la prima.
  for(let i = str.length - 1; i >= 0; i--) {
      parolaInversa += str[i];  
  };
// confronto la parola inversa con la stringa di testo
  if (parolaInversa == str) {
    parolaPalindroma = true
  }
  // faccio rientrare il risultato dell'equazione booleana
  return parolaPalindroma;
}
// richiamo la funzione nella variabile booleana
invertiParola(parola);
// contronto la parola con la parola inversa
if(parolaPalindroma == true){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
}