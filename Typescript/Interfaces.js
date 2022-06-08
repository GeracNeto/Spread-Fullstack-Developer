// Interfaces
console.log('Interfaces');
var animal1 = {
    nome: 'Cachorro',
    tipo: 'Terrestre',
    emitirSom: function (typeSom) { return ("O som \u00E9 ".concat(typeSom)); }
};
var animal2 = {
    nome: 'Leao',
    tipo: 'Terrestre',
    emitirSom: function (typeSom) { return ("O som \u00E9 ".concat(typeSom)); },
    visaoNoturna: true
};
console.log(animal2.emitirSom('Rugido'));
console.log(animal1.nome);
