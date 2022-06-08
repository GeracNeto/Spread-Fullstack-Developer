// Interfaces
console.log('Interfaces');

interface IAnimal{
    nome: string;
    tipo: 'Terrestre' | 'Aquatico';
    emitirSom(typeSom: string): void; 
}

interface IFelino extends IAnimal{
    visaoNoturna: boolean;
}

const animal1: IAnimal = {
    nome: 'Cachorro',
    tipo: 'Terrestre',
    emitirSom: (typeSom) => (`O som é ${typeSom}`)
}

const animal2: IFelino = {
    nome: 'Leao',
    tipo: 'Terrestre',
    emitirSom: (typeSom) => (`O som é ${typeSom}`),
    visaoNoturna: true
}

console.log(animal2.emitirSom('Rugido'));
console.log(animal1.nome);