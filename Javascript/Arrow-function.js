// Arrow functions

// Método 1
const helloWord = () => {
    return console.log("Hello Word");
}

helloWord();

// Método 2
// Caso exista apenas um argumento e uma linha, pode dispensar o uso de chaves

const soma = (a, b) => console.log(a+b);

soma(5,3);

// Método 3 
// Caso exista apenas um parâmetro, pode dispensar os parênteses

const numA = a => console.log(a);

numA(10);