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

//Método 2