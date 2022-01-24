console.log('JS OK!')

/*
Generare 5 numeri casuali e mostrarli in un alert all'utente.
Dall'ok  parte un timer di 30 secondi. (ricordate che l'alert blocca il flusso. il timer partirà a contare dopo che avete schiacciato ok.)
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri  sono stati indovinati dall'utente.
Bonus:
controllare che i numeri casuali siano diversi tra loro
controllare che l'utente non inserisca 2 volte lo stesso numero
*/

// Creare delle constanti



// # FUNZIONI

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Generare 5 numeri casuali e mostrarli in un alert all'utente.

const randomNumber = [];

for (let i = 0; i <= 4; i++) {
    const number = getRandomNumber(1, 100);
    randomNumber.push(number);
}

alert(randomNumber);

/* Dopo 30 secondi l'utente deve inserire,
uno alla volta, i numeri che ha visto precedentemente, tramite prompt().*/

const userNumber = [];
const result = [];

const rememberNumber = setTimeout (() => {
    for(i = 0; i <= randomNumber.length; i++) {
        const askNumber = parseInt(prompt('Inserisci i numeri visualizzati!'));
        userNumber.push(askNumber);
        if(userNumber[i] === randomNumber[i]){
            result.push(randomNumber[i]);
        }
    }
    alert(`I numeri corrispondenti sono ${result}`)
}, 2000);


/* Dopo che sono stati inseriti i 5 numeri,
il software dice quanti e quali dei numeri  sono stati indovinati dall'utente.*/

/* setTimeout(() => {
    if(randomNumber === userNumber){
        alert('i numeri')
    }
  }, 1000); */