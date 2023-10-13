// richiamare l'elemento griglia creato su html;
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

// richiamare l'elemento bottone start per la generazione della griglia
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

    // richiamare tutte le caselle "cell". Occhio che deve stare dentro la funzione del btn
   const cellDOMElements = document.querySelectorAll('.cell');
   console.log(cellDOMElements);
   
       
    //aggiungo eventListnener click a tutte le caselle
    for (let i = 0; i < cellDOMElements.length; i++) {
        const currentCell = cellDOMElements[i];
        console.log(currentCell);

        // stampare il valore index delle caselle clickate
        currentCell.addEventListener('click', function() {
        console.log('Click sulla casella num:', (i + 1));
   
        // le caselle clickate diventano blu, aggiungendo la  classe da css
        currentCell.classList.add('bg-blue');
        })
    }
})