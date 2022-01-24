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

while (randomNumber.length <= 4) {
    const number = getRandomNumber(1, 100);
if (!randomNumber.includes(number)){
    randomNumber.push(number);
}
}

alert(randomNumber);

/* Dopo 30 secondi l'utente deve inserire,
uno alla volta, i numeri che ha visto precedentemente, tramite prompt().*/

const userNumber = [];
const result = [];

const rememberNumber = setTimeout (() => {
    while (userNumber.length <= 4) {
        const askNumber = parseInt(prompt('Inserisci i numeri visualizzati!'));
        if (!userNumber.includes(askNumber) || !isNaN(askNumber)) {
            userNumber.push(askNumber);
        } else if(userNumber[i] === randomNumber[i]){
            result.push(randomNumber[i]);
        } /* else {
            alert('I numeri inseriti non sono validi o già utilizzati!!!')
        }  */
    }

    /* Dopo che sono stati inseriti i 5 numeri,
    il software dice quanti e quali dei numeri  sono stati indovinati dall'utente.*/

    if (result > 0) {
        alert(`I numeri corrispondenti sono ${result}`)
    } else {
        alert(`Non sei riuscito/a ad indovinare nessun numero! Peccato!!!`)
    }
    
}, 2000);