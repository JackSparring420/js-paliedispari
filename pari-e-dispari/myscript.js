// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
// stabiliamo se la somma dei due numeri è pari o dispari (sempre con una funzione)
// Dichiariamo chi ha vinto

// creo le variabili per chiedere all'utente se pari o dispari e il umero da scegliere
const scelta = prompt('Scegli pari o dispari?');
console.log(scelta);

const numero = parseInt(prompt('indica un numero da 1 a 5'));
console.log("scelta utante " + numero);

// creo le funzioni
// random
function randomGenerator (num){
    num = Math.floor (num);
    let random = Math.floor(Math.random() * (num + 1));
    return random;
}
console.log(randomGenerator());


// pari
function pari (numero){
    if (numero % 2 == 0) {
        return true;
    }
    else{
        return false;
    }
}
console.log(pari());

// creo una variabile per sommare il numero scelda con quello random
let sommaNumeri = (numero + randomGenerator(5));
console.log(sommaNumeri);

// impasto la condizione per vedere chi ha vinto

if (scelta == 'pari' && pari(sommaNumeri) == true){
 alert('hai vinto');
}
else if (scelta == 'dispari' && pari(sommaNumeri)== false) {
  alert('hai vinto');
}
else {
  alert('hai perso');
}