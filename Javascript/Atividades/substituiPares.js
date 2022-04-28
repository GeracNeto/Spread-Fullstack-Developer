console.log("Atividade - Subistitu Números Pares\n");

let array = [];

function subPar(array){
    if (array.length === 0){
        return console.log("-1")
    }
    
    else{
        for(let i = 0; i < array.length; i++){
            if(array[i] % 2 === 0){ //verifica se o valor é par
                array.splice([i],1,0); //pega o elemento par, deleta ele, e coloca no lugar o valor 0
            }
        }
        return console.log(array);
    }
}

subPar([1, 3, 4, 6, 80, 33, 23, 90])
subPar([])


