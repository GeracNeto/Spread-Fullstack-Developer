/* Atividade 1 - Compara Números */

function comparaNumeros(num1, num2){
    let compara = num1 === num2 ? "" : "não";
    let soma = num1 + num2;
    let compara10 = soma < 10 ? "menor" : "maior";
    let compara20 = soma < 20 ? "menor" : "maior";

    return console.log(`Os numeros ${num1} e ${num2} ${compara} são iguais. Sua soma é ${soma}, que é ${compara10} que 10 e ${compara20} que 20`);
}

comparaNumeros(11, 9);