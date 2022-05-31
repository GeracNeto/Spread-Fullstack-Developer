// Atividade: validação de erros por tipo Try Catch

// Erros
const error1 = new ReferenceError('Envie os parâmetros');
const error2 = new TypeError('O array precisa ser do tipo Object');
const error3 = new RangeError('Tamanho inválido');


function validaArray(array, num){
    // Try verifica se há algum erro
    try{
        // verifica se foi passado o array e o número
        if(!array || !num) {
            throw error1;
        }
    
        // Verifica se o array é do tipo objeto e se o num é do tipo number
        if(typeof array !== 'object' || typeof num !== 'number'){
            throw error2;
        } 
    
        // Verifica se o tamanho do array corresponde com o valor de num
        if(array.length !== num){
            throw error3;
        } ;
    }

    // Catch vai ser como tratar o erro 
    catch(err){
        if(err instanceof ReferenceError){ // Verifica se o erro é do ReferenceError, para isso utiliza o "instanceof"
            console.log('Esté erro é um ReferenceError');
            console.log(err.message);
        }

        else if(err instanceof TypeError){ 
            console.log('Esté erro é um TypeError');
            console.log(err.message);
        }

        else if(err instanceof RangeError){ 
            console.log('Esté erro é um RangeError');
            console.log(err.message);
        }

        else{
            console.log('Erro Desconhecido');
        }
    }

    return array;

}

console.log(validaArray([1,2,3], 3));