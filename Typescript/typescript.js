// Interfaces
console.log('Interfaces');
// Objetos
var animal = {
    nome: 'Peixe-Dourado',
    tipo: 'Aquatico',
    domestico: true,
    porte: 'Pequeno',
    //visaoNoturna -> Essa propriedade eu posso ou não passar, pois coloquei IFelino "|" ICanino no type.
    emitirSom: function (typeSom) { return ("O som \u00E9 ".concat(typeSom)); }
};
var animal1 = {
    nome: 'Cachorro',
    tipo: 'Terrestre',
    domestico: true,
    emitirSom: function (typeSom) { return ("O som \u00E9 ".concat(typeSom)); }
};
var animal2 = {
    nome: 'Leao',
    tipo: 'Terrestre',
    domestico: false,
    emitirSom: function (typeSom) { return ("O som \u00E9 ".concat(typeSom)); },
    visaoNoturna: true
};
// Testes
console.log(animal2.emitirSom('Rugido'));
console.log(animal1.nome);
