const darkModeButton = document.getElementById("buttonMode");
const darkModeBody = document.querySelector('body');

darkModeButton.addEventListener("click", changeMode);

function changeClasses(){
    darkModeButton.classList.toggle('dark-mode');
    darkModeBody.classList.toggle('dark-mode');
}

function changeText(){
    if(darkModeBody.classList.contains('dark-mode')){
        darkModeButton.innerHTML = 'Light Mode';
        return;
    }

    darkModeButton.innerHTML = 'Dark mode';
}

function changeMode(){
    changeClasses();
    changeText();
}
