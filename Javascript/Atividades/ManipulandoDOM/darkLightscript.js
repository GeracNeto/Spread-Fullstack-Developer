const darkModeButton = document.getElementById("buttonMode");
const darkModeBody = document.querySelector('body');

darkModeButton.addEventListener("click", changeBackground);

function changeBackground(){

    darkModeButton.classList.toggle('dark-mode');
    darkModeBody.classList.toggle('dark-mode');
    changeText();
    console.log('Botão acionado');
}

function changeText(){
    if(darkModeBody.classList.contains('dark-mode')){
        darkModeButton.innerHTML = 'Light-Mode';
        return;
    }
    
    darkModeButton.innerHTML = 'Dark-mode';
}
