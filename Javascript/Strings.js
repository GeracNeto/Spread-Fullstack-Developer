let nome = "Geraldo";
let sobrenome = "Pereira";
let concatenado = nome.concat(sobrenome); //Concatena strings usando o métodos .concat()

console.log(concatenado); //Mostra o nome e sobrenome concatenado

concatenado = nome + " " + sobrenome; //Espaço entre nomes método 1

console.log(`${nome} ${sobrenome}`); //Espaço entre nomes método 2

console.log(concatenado);

console.log(concatenado.length); //Mostra o tamanho da variável

console.log(nome[1]); //Pega uma posição dentro da variável

console.log(nome + "\n" + sobrenome); //Quebra de linha método

console.log("\"Texto com aspas\"") //Colocando apasas dentro de strings

let frase = "Olá, tudo bem?"

console.log(frase.split(",")); //Separa os itens da string de acordo com o que está dentro do split

console.log(frase.includes("tudo")); //Verifica se na string tem a palavra que está no inclues

console.log(frase.startsWith("O")); //Verifica se a frase começa com a palava dentro do método .startsWith

console.log(frase.endsWith("?")); //Verifica se a frase termina com a palavra dentro do endsWith

let stringModificada = frase.replace(",", "!"); //Substitui a virgula por exclamação, fazendo isso devemos armazenar a modificação em outra memória, como feito aqui