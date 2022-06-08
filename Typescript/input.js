var input = document.getElementById('input'); // Informa que o tipo é um input HTML
// input.value // Dessa forma posso usar o .value aqui, pois em cima defini seu tipo
input.addEventListener('input', function () {
    var dado = document.getElementById('input'); // Informa que o tipo é um input HTML. Dessa forma posso usar o .value
    document.getElementById('output').innerHTML = dado.value;
    console.log('entrei');
});
