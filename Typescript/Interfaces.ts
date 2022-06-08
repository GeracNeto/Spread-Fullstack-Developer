// Interfaces

interface Animal{
    nome: string;
    tipo: 'Terrestre' | 'Aquatico';
    emitirSom(alturaDecibeis: number): void; 
}

const animal1: Animal = {
    nome: 'Cachorro',
    tipo: 'Terrestre',
    emitirSom() => ('Au Au')

}