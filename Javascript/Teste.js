//Hello Word
console.log("Hello Word")

//Função do primeiro grau: f(x) = ax + b 
const A = 2;
const B = 5;

var x = 3;

function primeiro_grau(x){
    console.log(A*x+B)
    return A*x+B;
}

primeiro_grau(3);

//Mostra os números pares
let array = [1,2,3,4,5,6,7,8,9];

function returnEvenValues(array){
    let evenNums = [];
    for(let i = 0; i < array.length; i++){
        if(array [i] % 2 === 0){
            evenNums.push(array[i]);
        }
    }
    console.log("Os números pares são:", evenNums);
}

returnEvenValues(array);