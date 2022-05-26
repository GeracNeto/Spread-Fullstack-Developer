// Atividade Uso do Método Map

const array = [1,2,3];

const num1 = {
    value: 2
}

const num2 = {
    value: 4
}

const num3 = {
    value: 6
}

function testMap(array, thisArg){
    return array.map(function(item){
        return item * this.value;
    }, thisArg);
}

console.log(testMap(array, num2));
