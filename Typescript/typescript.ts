// Interfaces

console.log('Interfaces');

interface IAnimal{
    nome: string;
    tipo: 'Terrestre' | 'Aquatico';
    domestico: boolean;
    emitirSom(typeSom: string): void; 
}

interface IFelino extends IAnimal{
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal{
    porte: 'Grande' | 'Pequeno';
}

// Types

type IDomestico = IFelino | ICanino; // Na hora de declarar o objeto posso "unir / juntar" as duas classes pelo type

// Objetos

const animal: IDomestico = {
    nome: 'Peixe-Dourado',
    tipo: 'Aquatico',
    domestico: true,
    porte: 'Pequeno',
    //visaoNoturna -> Essa propriedade eu posso ou não passar, pois coloquei IFelino "|" ICanino no type.
    emitirSom: (typeSom) => (`O som é ${typeSom}`),
}

const animal1: IAnimal = {
    nome: 'Cachorro',
    tipo: 'Terrestre',
    domestico: true,
    emitirSom: (typeSom) => (`O som é ${typeSom}`)
}

const animal2: IFelino = {
    nome: 'Leao',
    tipo: 'Terrestre',
    domestico: false,
    emitirSom: (typeSom) => (`O som é ${typeSom}`),
    visaoNoturna: true
}






// Testes

console.log(animal2.emitirSom('Rugido'));
console.log(animal1.nome);