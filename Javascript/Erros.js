// Tratamento de erros

// Exemplo de declaração de um erro 
const MyError = new Error('Mensagem Inválida');

MyError.name = 'InvalidMessage'; // Atribuindo nome ao erro

throw MyError;


