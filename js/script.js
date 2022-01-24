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

const randomNumbers = [];

while (randomNumbers.length <= 4) {
    const number = getRandomNumber(1, 100);

// Controllare che i numeri casuali siano diversi tra loro

if (!randomNumbers.includes(number)){
    randomNumbers.push(number);
}
}

alert(randomNumbers);

/* Dopo 30 secondi l'utente deve inserire,
uno alla volta, i numeri che ha visto precedentemente, tramite prompt().*/

const userNumber = [];
const result = [];

const rememberNumber = setTimeout (() => {
    while (userNumber.length <= 4) {
        const askNumber = parseInt(prompt('Inserisci i numeri visualizzati!'));

        // Controllare che l'utente non inserisca 2 volte lo stesso numero

        if (isNaN(askNumber) || userNumber.includes(askNumber)) {
            alert('I numeri inseriti non sono validi o già utilizzati!!!')
        } else {
            userNumber.push(askNumber);
        } 
    } 

    for (let i = 0; i <= randomNumbers.length; i++) {
        if (userNumber.includes(randomNumbers[i])) {
            result.push(randomNumbers[i]);
        }
    }

    /* Dopo che sono stati inseriti i 5 numeri,
    il software dice quanti e quali dei numeri  sono stati indovinati dall'utente.*/

    if (result > [0]) {
        alert(`I numeri corrispondenti sono ${result}`)
    } else {
        alert(`Non sei riuscito/a ad indovinare nessun numero! Peccato!!!`)
    }
    
}, 30000);

