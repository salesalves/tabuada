/*
Exemplo de uma tabuada
*/
//Declarando a função
function calc_tabuada(){
 //Obtendo do DOM o tbory da tabela
    let tabuada = document.querySelector("#tabuada tbody");
    //Obtendo o valor do Input number e convertendo para inteiro
    let valorA = parseInt(document.querySelector("#valorA").value);
   //Limpando o tbory
    tabuada.innerHTML = '';
  //criando o laço de repetição
    for (let valorB = 0; valorB <=10; valorB++ ) {
        //calculando o resultado da linha atual
        let resultado = valorA * valorB;
        //criando o template das colunas da linha atual
        let template =  `
            <td>${valorA}</td>
            <td>X</td>
            <td>${valorB}</td>
            <td>=</td>
            <td>${resultado}</td>
        `;
        //criando o elemento tr
        let tr = document.createElement('tr');
       //Inserindo as colunas na linha
        tr.innerHTML = template;
       //inserindo a linha na tabela
        tabuada.append(tr);
    }//fechando o for

}//fechando a função
calc_tabuada();
//adicionando o evento de alteração al campo numero
document.querySelector("#valorA").addEventListener('change', calc_tabuada);