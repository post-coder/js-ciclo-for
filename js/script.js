
// facciamo una griglia con i numeri da 0 a 100

const grigliaElement = document.querySelector("#griglia");


for(let i = 0; i < 1000 ; i++) {

    // creare un elemento html
    const newElement = document.createElement("div");
    
    // una volta che creiamo un elemento, possiamo modificarlo successivamente
    // come vogliamo
    newElement.className = "square";
    newElement.innerHTML = i;
    newElement.style.color = "blue";
    newElement.style.fontWeight = "bold";
    newElement.style.fontSize = "24px";

    // facciamo il controllo se la i è multipla di due (pari)
    if(i % 2 == 0) {
        newElement.className += " even";
    }
 
    // alla fine "appendiamo" l'elemento appena creato (newElement)
    // alla griglia (grigliaElement)
    // il metodo .append() aggiunge all'interno di grigliaElement
    // l'elemento che gli passiamo tra parentesi, esso sarà l'ultimo figlio
    grigliaElement.append(newElement);

}