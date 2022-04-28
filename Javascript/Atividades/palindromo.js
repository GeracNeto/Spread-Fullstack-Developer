console.log("Atividade - Verificador de Palindromo\n");

//Método 1

console.log("Método 1")
let texto;

function verificaPalindromo(texto){
    let array = texto.split("").reverse().join("");
    let verifica = array === texto ? "é" : "não é";
    let difere = array === texto ? "=" : "!=";

    return console.log(`A palavra ${texto} ${verifica} um palíndromo: ${array} é ${difere} ${texto}`);
    
}

verificaPalindromo("ovo");

/**********************************************************************************************************/

//Método 2
console.log("Método ")
let texto2 = "rever";


function verificaPalindromo2(text2){
    let array2 = texto2.split("");
    let equal = [];

    for(let i = 0; i < array2.length; i++){
        equal.push(array2[i] === texto2.split("").reverse()[i]);
   }

   if(!equal.includes(false)){
       return console.log(`A palavra ${texto2} é um palíndromo`);
   }
   else{
       return console.log(`A palavra ${texto2} não é um palíndromo`);
   }
}


verificaPalindromo2(texto2);