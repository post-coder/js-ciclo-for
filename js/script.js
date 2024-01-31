
// facciamo una griglia con i numeri da 0 a 100

const grigliaElement = document.querySelector("#griglia");


for(let i = 0; i <= 100; i++) {
     
    grigliaElement.innerHTML += `
        <div class="square" >${i}</div>
    `;

}