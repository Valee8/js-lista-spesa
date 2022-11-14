// Consegna:
// Data una lista della spesa, stampare sulla pagina gli elementi della lista 
// individualmente con un ciclo for che poi commentate, e poi fate lo stesso con il while (che lasciate attivo).
// Bonus;
// l’utente può inserire al volo elementi alla lista.

const listaSpesa = ["Pane", "Pasta", "Insalata", "Carne"];

const button = document.getElementById("button");

// for (let i = 0; i < listaSpesa.length; i++) {
//     document.getElementById("lista-spesa").innerHTML += `
//         <li>${listaSpesa[i]}</li>`;
// }

let i = 0;

while (i < listaSpesa.length) {

    document.getElementById("lista-spesa").innerHTML += `
        <li>${listaSpesa[i]}</li>`;

    i++;    
}

button.addEventListener("click",
    function() {

        listaSpesa.push(document.getElementById("input").value);

        while (i < listaSpesa.length) {

            document.getElementById("lista-spesa").innerHTML += `
                <li>${listaSpesa[i]}</li>`;

            i++;    
        }
    }
);