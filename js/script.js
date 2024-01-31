

// mostrare tutti i numeri pari dallo 0 al 10

// ciclo che scorre il valore di i da 0 a 10 (11 iterazioni)ù
console.log("stampiamo i numeri pari da 0 a 10")
for (let i = 0; i <= 10; i++) {
    
    // controllo che il resto della divisione per 2 sia zero
    // (quindi il numero per definizione è pari)
    if(i % 2 == 0) {

        console.log(i);
        
    }

}


console.log("stampiamo i multipli di 3")

// proviamo a riscrivere il nostro ciclo for
// cambiando il modo in cui AGGIORNIAMO il valore di i

for (let i = 4; i <= 30; i += 3) {
    console.log(i);
}
