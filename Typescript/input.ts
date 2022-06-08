const input = document.getElementById('input') as HTMLInputElement; // Informa que o tipo é um input HTML

// input.value // Dessa forma posso usar o .value aqui, pois em cima defini seu tipo

input.addEventListener('input', (event) => {
    const dado = event.currentTarget as HTMLInputElement; // Informa que o tipo é um input HTML. Dessa forma posso usar o .value
 });