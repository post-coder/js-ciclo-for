
// i++: incrementa il valore di i di un'unità
for (let i = 0; i < 10; i++) {
    // l'incremento che scriviamo dentro le tonde (i++) viene eseguito solo 
    // DOPO CHE HA FINITO LA PRIMA ITERAZIONE, per poi essere ripetuto
    // ogni altra volta.

    // _____________________

    /*
    Ordine delle operazioni che fa il ciclo:
    - prima di tutto inizializza la variabile (let i = 0)
    - controlla che la condizione indicata sia vera (i < 10)
    - se è vera esegue tutte le operazioni inserite dentro le graffe
    - quando ha finito, aggiorna la variabile (i++)
    - alla fine, controlla se la condizione è ancora vera, se lo è riesegue tutte le operazioni dentro le graffe e poi riaggiorna la variabile
    - continua così sinchè la condizione non diventa falsa.
    - il ciclo for si conclude, vengono eseguite le istruzioni dopo di esso
    */


    // tutte le operazioni verranno effettuate ad ogni iterazione
    console.log(i);

}

console.log("Tabellina del 2:");


// tabellina del 2
// effettuo operazioni con la i che parta da zero e arrivi a dieci INCLUSI
// riusciamo ad includere anche l'ultimo numero (10) con il controllo i <= 10
for(let i = 0; i <= 10; i++) {

    console.log(i * 2);

}




