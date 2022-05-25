// Atividade 1 Colções -Maps

//Desenvolver código que mostra os funcionarios de acordo com a sua função: admin ou user

const systemMap = new Map([
    ["Luiz", 'admin'],
    ["Maria", 'user'],
    ["Geraldo", 'admin'],
    ["Thaina", 'admin'],
    ["Renato", 'user'],
    ["Julio", 'user'],
    ["Pedro", 'user'],
    ["Ana", 'user'],
    ["Rodrigo", 'user']
  ]);
  
  
  function getAdmins(map, id = 'user'){
    let admins = [];
    
    for([key, value] of map){ // Passa por todos as chaves e valores do map inserido
      if(value === id){ // Verifica se o vaslor é igual a admin
        admins.push(key); // Se verdadeiro, insere a chave no array admins
      }
    }
    
    return console.log(`${id}: ${admins}`);
    
  }
  
  getAdmins(systemMap, 'admin');