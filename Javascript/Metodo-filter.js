// Método filter

const myFruits = ['Maça', 'Banana', 'Maça-verde', 'Kiwi', 'Maça-fuji' ];

let newFruits = myFruits.filter((frutas) => frutas.includes('Maça'));       // Nomeia "item" para "frutas" e verifica se nas strings possuem a palavra 'maça', caso verdade, retorna no newFruits

console.log(newFruits);