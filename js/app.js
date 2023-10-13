const gridDOMElement = document.querySelector('.grid');
console.log(gridDOMElement);

// for (let i = 0; i < 100; i++) {
//     const n = i + 1;
//     console.log(n);

//     //creo un elemento html con template literal
//     const htmlCell = `<div class="class">${n}</div>`
//     console.log(htmlCell);

//     // lo riassegno alla griglia con la ripetizione +=
//     gridDOMElement.innerHTML += htmlCell
// }

const btnDOMElement = document.getElementById('play-btn');
console.log(btnDOMElement);

// al click su start generare una griglia 10x10
btnDOMElement.addEventListener('click', function() {
    gridDOMElement.innerHTML = ''; //se click più volte sul btn start non genera altre griglie.

    //creare 100 caselle in ciclo for
    for (let i = 0; i < 100; i++) {
    const n = i + 1;
    console.log(n);

    //creare le caselle inserendo l'index con template literal html
    const htmlCell = `<div class="cell">${n}</div>`
    console.log(htmlCell);

    // riassegnare le caselle alla griglia con la ripetizione +=
    gridDOMElement.innerHTML += htmlCell
    }
})