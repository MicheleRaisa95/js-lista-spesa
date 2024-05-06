'use strict'

// creo un array e inserisco la lista della spesa 

const listaDellaSpesa = [
    "Pane",
    "Pasta",
    "Passata di pomodoro",
    "Frutta",
    "Verdura",
    "Fagioli",
    "Latte"
]

// ottengo l'accesso al elemento ul del dom

const listaDellaSpesaUl = document. getElementById("listaspesa")

// creo ciclo while

let i = 0

while (i < listaDellaSpesa.length ) {
    const listItem = document.createElement("li")

    // assegno contenuto array agli elementi li 

    listItem.innerText = listaDellaSpesa[i]

    listaDellaSpesaUl.append(listItem);

    i++

}