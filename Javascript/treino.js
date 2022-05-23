const pessoas = [
    {
        nome: 'Geraldo',
        idade: 23,
        cidade: 'Cachoeira de Minas',
    },
    {
        nome: 'Thainá',
        idade: 21,
        cidade: 'Santa Rita',
    },
    {
        nome: 'Maria',
        idade: 33,
        cidade: 'São José',
    }
]

// uso do object destructuring
function getNomeByIndex(array, num = 0){

    const {nome} = array[num];
    return console.log(nome);
}


function getCityByIndex(){
    return console.log(this.cidade);
}

getNomeByIndex(pessoas, 2);
getCityByIndex.call(pessoas[1]);

