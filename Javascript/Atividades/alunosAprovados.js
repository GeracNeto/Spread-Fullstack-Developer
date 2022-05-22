// atividades Alunos aprovados
/*
const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B'
    },
    {
        nome: 'Thainá',
        nota: 10,
        turma: '1D'
    },
    {
        nome: 'Maria',
        nota: 2,
        turma: '1B'
    },
    {
        nome: 'Geraldo',
        nota: 7,
        turma: '1A'
    },
]

// nomeDoObjeto.chave retorna seu valor

function alunosAprovados(array, media){
    let aprovados = [];

    for(let i = 0; i < array.length; i++){
        if(array[i].nota >= media){
            aprovados.push(array[i].nome);
        }
    }
    return console.log(aprovados);
}

alunosAprovados(alunos, 5);

*/

// Utilizando o Object Destructuring

const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B'
    },
    {
        nome: 'Thainá',
        nota: 10,
        turma: '1D'
    },
    {
        nome: 'Maria',
        nota: 2,
        turma: '1B'
    },
    {
        nome: 'Geraldo',
        nota: 7,
        turma: '1A'
    },
]

function alunosAprovados(array, media){
    let aprovados = [];

    

    for(let i = 0; i < array.length; i++){
        //Uso do object destructuring
        const {nome, nota} = array[i];

        if(nota >= media){
            aprovados.push(nome);
        }
    }
    return console.log(aprovados);
}

alunosAprovados(alunos, 5);