//console.log("Teste this")

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