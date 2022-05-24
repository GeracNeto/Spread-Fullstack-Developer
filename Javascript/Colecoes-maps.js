// Coleções Maps

//As chaves dos maps pdoem ser de diferentes tipos. Entretanto, os valores dos maps devem ser os mesmos

const myMap = new Map();

myMap.set('apple', 'fruit'); //adiciona elementos, chave e valor - apple chave e valor fruit

console.log(myMap);

console.log(myMap.get('apple')); //verifica o valor de apple

myMap.delete('apple'); //delete o valor

console.log(myMap);

