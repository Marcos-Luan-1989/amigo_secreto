//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//criando a lista para receber os nomes dos amigos participantes
let listaDeAmigos = [];

//criando a variável que recebe o valor do que foi digitado no campo nome do amigo
let nomeDoAmigo = document.getElementById("amigo").value;


function adicionarAmigo(){
    if (nomeDoAmigo == ""){
        alert("Por favor, insira um nome.");
    } else{
        listaDeAmigos.push(nomeDoAmigo);
        console.log(`${nomeDoAmigo} inserido a lista.`);
        console.log(listaDeAmigos); 
    }

}

function limparCampoNome (){
    nomeDoAmigo = document.getElementById("amigo");
    nomeDoAmigo.value = "";
}

function sortearAmigo(){

}

function atualizarListaDeAmigosHtml (){
    //recebendo o elemento lista<ul> dentro do javascript
    let listaHtml = document.getElementById("listaAmigos");

    //limpando a lista para garantir que não haverão duplicatas.
    listaHtml.innerHTML = "";

    //percorrendo o array para criar os elementos de linha dentro da tabela
    for (let contador = 0; contador < listaDeAmigos.length; contador++ ) {

        //criando novo elemento de linha <li> na tabela
        let item = document.createElement("li");
        
        //inserindo o texto da lista de amigos no elemento <li>
        item.textContent = listaDeAmigos[contador];

        //adicionando a nova linha <li> a tabela <ul>
        listaHtml.appendChild(item);
        

    }

}