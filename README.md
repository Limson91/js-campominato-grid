# CAMPO MINATO

- richiamare l'elemento griglia creato su html;
- richiamare l'elemento bottone start per la generazione della griglia;
- generare una griglia 10x10 elementi al click sul bottone;
    - funzione eventListener click su bottone
        - dall'elemento grid, richiamare stringa vuota per evitare generazione di griglie multiple, e per reset griglia;
        - col ciclo FOR generare 100 caselle;
        - creare le caselle inserendo l'index con template literal html;
        - riassegnare le caselle alla griglia DOM con la ripetizione +=;

    - richiamare tutte le caselle "cell" DENTRO la funzione del btn;
   
    - aggiungo secondo eventListnener click su tutte le caselle create;
    - ciclo FOR per stampare valore index delle caselle e colorarle una volta clickate;
        - assegnare al console.log il valore di index
        - le caselle clickate diventano blu, aggiungendo la  classe da css.
        