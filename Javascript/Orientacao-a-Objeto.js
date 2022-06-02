// Orinetação à Objeto

// Como criar uma classe

class Car{
    // Propriedades da classe car
    constructor(marca, modelo, ano){
        this.marca = marca,
        this.modelo = modelo,
        this.ano = ano
    }

    // Getters da classe car
    get getMarca(){ // Getters não podem ter parâmetros
        return this.marca;
    }

    get getModelo(){ 
        return this.modelo;
    }

    get getano(){ 
        return this.ano;
    }

    // Setters da classe car
    set nomeMarca(addMarca){ // Setters devem ter obrigatóriamente UM parâmetro

        this.marca = addMarca;
    }

    // Métodos da classe car
    diferencaAno(anoAtual){
        return anoAtual - this.ano + ' anos';
    }

}

// Atribuindo a classe car ao objeto myCar1
const myCar1 = new Car('Honda', 'Honda Civic', 2022);

console.log(myCar1);
console.log(myCar1.getMarca)
console.log(myCar1.diferencaAno(2024));

// Atribuindo a classe car ao objeto myCar2 porém deixando a marcar para ser adicionada com o setter
const myCar2 = new Car('','Prisma', 2010);

// Utilizando o setter nomeMacra

myCar2.nomeMarca = 'Prsima';

console.log(myCar2.marca);
console.log(myCar2.diferencaAno(2022));



