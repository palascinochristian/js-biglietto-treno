// Chiedo all'utente i chilometri da percorrere
const km = Number(prompt("Quanti chilometri devi percorrere?"));
alert("Hai inserito " + km + " chilometri");

// Chiedo all'utente l'età
const userAge = Number(prompt("Inserisci la tua età"));
alert("Hai " + userAge + " anni");

// Stablisco che ogni chilometro costa 0.21 euro
const kmCost = km * 0.21;

// Inizializzo le variabili sconto e prezzo finale del biglietto
let discount = 0;
let finalPrice = kmCost;

// Applico uno sconto del 20% solo SE l'utente è minorenne
if (userAge < 18) {
    discount = kmCost * 0.20;
    finalPrice = kmCost - discount;
    alert("Hai diritto a uno sconto del 20%! Sconto applicato: " + discount.toFixed(2) + " € sul prezzo iniziale di: " + kmCost.toFixed(2) + " €");
    // Applico uno sconto del 40% solo SE l'utente ha più di 65 anni  
} else if (userAge > 65) {
    discount = kmCost * 0.40;
    finalPrice = kmCost - discount;
    alert("Hai diritto a uno sconto del 40%! Sconto applicato: " + discount.toFixed(2) + " € sul prezzo iniziale di: " + kmCost.toFixed(2) + " €");
    // Altrimenti non applico nessuno sconto    
} else {
    alert("Non sei idoneo a nessuno sconto");
}

// Restituisco il prezzo finale del biglietto
alert("Il prezzo finale del biglietto è: " + finalPrice.toFixed(2) + " €");

