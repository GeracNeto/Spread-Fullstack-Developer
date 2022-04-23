console.log("Primeiro Projeto em Javascript")

var currentnumberwrapper = document.getElementById('currentnumber')

function increment(){
    currentnumber = currentnumber + 1;
    currentnumberwrapper.innerHTML = currentnumber;
}

function decrement(){
    currentnumber = currentnumber - 1;
    currentnumberwrapper.innerHTML = currentnumber;
}