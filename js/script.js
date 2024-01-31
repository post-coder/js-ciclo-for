
// mi memorizzo la lista
const listaElement = document.querySelector(".lista");

// aggiungo dieci elementi alla lista
for(let i = 0; i < 10; i++) {

    listaElement.innerHTML += `<li>${i}</li>`

}