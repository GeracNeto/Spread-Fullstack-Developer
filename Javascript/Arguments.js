// Uso do objeto arguments

function findMax() {
    let max = -Infinity;
    for(let i = 0; i < arguments.length; i++) {
      if (arguments[i] > max) {
        max = arguments[i];
        console.log(arguments[i]);
      }
    }
    return console.log(max);
} 

findMax(32,54,56,76,45,2,35,57,34543,2324);

