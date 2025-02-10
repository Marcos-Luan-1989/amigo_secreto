//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//criando a lista para receber os nomes dos amigos participantes
let listaDeAmigos = [];
let numerosJaSorteados = [];

function adicionarAmigo(){
    //criando a variavel para receber o texto digitado.
    let nomeDoAmigo = document.getElementById("amigo").value;

    //validando se o campo não está vazio
    if (nomeDoAmigo == ""){
        alert("Por favor, insira um nome.");
    } else{
        listaDeAmigos.push(nomeDoAmigo);
        // console.log(`${nomeDoAmigo} inserido a lista.`);
        limparCampoNome();        
        // console.log(listaDeAmigos);
        atualizarListaDeAmigosHtml();
    }

}

function limparCampoNome (){
    nomeDoAmigo = document.getElementById("amigo");
    nomeDoAmigo.value = "";
}

function sortearAmigo(){
    atualizarListaDeAmigosHtml();
    atualizarResultado();


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

function gerarNumeroAleatorio (){
    let numeroAleatorio = parseInt(Math.random()* listaDeAmigos.length);

    let quantidadeDePessoasSorteadas = numerosJaSorteados.length;
    if (listaDeAmigos.length < 2) {
        return "";

    } else {

        //verificar se o número aleatório já foi sorteado.
        if (quantidadeDePessoasSorteadas == listaDeAmigos.length ){
            alert("Todas as pessoas já foram sorteadas, favor gerar uma nova lista de participantes!!!");
        } else {

            if (numerosJaSorteados.includes(numeroAleatorio)) {

                return gerarNumeroAleatorio();
            } else {
                numerosJaSorteados.push(numeroAleatorio);

                // testes via console para verificar o funcionamento.
                // console.log(`O número aleatório gerado é ${numeroAleatorio}`);
                // console.log(`A pessoa sorteada foi: ${listaDeAmigos[numeroAleatorio]}`);
                // console.log(`Esses são os números já sorteados: ${numerosJaSorteados}`);
                
                return listaDeAmigos[numeroAleatorio];
            }

        }
        
    }
    
}

function atualizarResultado() {
    let amigoSorteado = gerarNumeroAleatorio();
    if (amigoSorteado == "") {
        
        return alert("Por favor insira o nome de pelo menos 2 pessoas para realizar o sorteio.")

    } else {

            //recebendo o elemento lista<ul> dentro do javascript
    let listaHtml = document.getElementById("listaAmigos");

    //limpando a lista para garantir que não haverão duplicatas.
    listaHtml.innerHTML = "";

            let resultadoSorteio = document.getElementById("resultado");
            resultadoSorteio.innerHTML = "";

            let mostrarResultado = document.createElement("li");
            mostrarResultado.textContent = amigoSorteado;
            resultadoSorteio.appendChild(mostrarResultado);
    
        }
}