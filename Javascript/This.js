// Uso simples do This 

const person = {
    name: "Geraldo",
    age: "23",
    lastname: "Pereira",

    getName: function(){
        return this.name + " " + this.lastname;
    },

    getAge: function(){
        return this.age;
    }
}

console.log(person.getName());
console.log(person.getAge());

// Método Call

const pessoa = {
    nome: "Thainá"
}

const animal = {
    nome: "Nika"
}

function getSomething(){
    return console.log(this.nome);
}

getSomething.call(pessoa);
getSomething.call(animal);

// Call com argumentos

const nums = {
    num1: 1,
    num2: 2
}

function soma(a,b){
    return console.log(this.num1 + this.num2 + a + b);
}

soma.call(nums, 3, 4);

// Método Apply

const num = {
    num1: 1,
    num2: 2
}

function soma(a,b){
    return console.log(this.num1 + this.num2 + a + b);
}

soma.apply(num, [3, 4]);

// Método Bind

const returnCity = function(){
    return console.log(this.city);
}

const city1 = returnCity.bind({city: "Cachoeira de Minas"});

city1();

