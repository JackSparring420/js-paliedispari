// 1.chiedo all'utente di inserire una parola
const parola = prompt("inserisci una parola:");
// 2.inverto la parola
    // 2.1creo una funzione che mi va ad invertire le parole
function invertiParola(str){
  let parolaInversa = '';

  for(let i = str.length - 1; i >= 0; i--) {
      parolaInversa += str[i];  //ciclo che mi va a prendere le singole lettere di una parola partendo dall'ultima e finendo con la prima.
  };

  return parolaInversa;
}
    // 2.3 creo una variabile dove registrare la parola inversa
    const parolaInversa = invertiParola(parola);
// contronto la parola con la parola inversa
if(parola == parolaInversa){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
}