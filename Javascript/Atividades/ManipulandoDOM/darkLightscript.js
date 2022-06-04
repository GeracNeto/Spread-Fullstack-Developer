// As mudanças ocorridas ao clicar no botão estão na classe dark-mode que está no css

// Cria as constantes para capturar os elementos que serão alterados no HTML
const darkModeButton = document.getElementById("buttonMode");
const darkModeBody = document.querySelector('body');

// Aguarda o evento de click no botão para executar a função changeMode
darkModeButton.addEventListener("click", changeMode);

// Coloca nos elementos a classe dark-mode
function changeClasses(){
    darkModeButton.classList.toggle('dark-mode');
    darkModeBody.classList.toggle('dark-mode');
}

// Altera o texto do botão
function changeText(){
    if(darkModeBody.classList.contains('dark-mode')){
        darkModeButton.innerHTML = 'Light Mode';
        return; // Retorna para poder sair da função
    }

    darkModeButton.innerHTML = 'Dark mode'; // Caso não faça nada mantém o estado inicial que é Dark Mode
}

// Chama as duas funções para executar a alterações assim que o botão é clicado
function changeMode(){
    changeClasses();
    changeText();
}
