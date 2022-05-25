// Coleções Sets

// São estruturas que armazenam valores únicos
const myArray = [23, 23, 23, 4, 5, 6 ,3 ,34 ,34, 34, 34];

function transformArrayToSet(array){
    let newSet = new Set(array); // tranforma o array em um Set

    return console.log(newSet);
}

transformArrayToSet(myArray);
// Set(6) { 23, 4, 5, 6, 3, 34 }

