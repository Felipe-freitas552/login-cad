
// Validação de preenchimento
function acessar(){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;
 
    if(!loginEmail || !loginSenha){
        alert('Favor preencher todos os campos');
    }else{
        alert('Campos preenchidos com sucesso');
       
        window.location.href = 'cadastro.html';
    }
}
 
//Função de criação do array para armazenamento de dados
 
var dadosLista = [];
 
function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;
 
    if(nomeUser){
        dadosLista.push(nomeUser);
        console.log(dadosLista);
        criarLista();
        document.getElementById('nomeUser').value = "";
    }
    else{
        alert("Favor informar o nome");
    }
}
// FUNÇÃO DE CRIAÇÃO DE LISTA
function criarLista(){
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";
    for(let i = 0; i <= (dadosLista.length -1); i++){ // A propriedade length tem como responsabilidade retornar a quantidade de caracteres de uma string ou o tamanho de um array. Caso a string ou o array esteja vazio, é retornado o valor 0.
        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button onclick='editar(this.parentNode.parentNode.rowIndex)'>editar</button>  <button onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button>  </td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}

//FUNÇÃO PARA EXCLUIR NOME DELISTA

function excluir(i){
dadosLista.splice((i - 1), 1);
document.getElementById('tabela').deleteRow(i);
} 

//FUNÇÃO  PARA EDITAR NOME NA LISTA

function editar(i){
    document.getElementById("nomeUser").value = dadosLista
    [(i - 1)];
    dadosLista.splice(dadosLista[(i - 1)], 1);
}
 