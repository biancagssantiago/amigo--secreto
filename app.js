//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
//Será inserido o nome de todos os amigos
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo'); 
    const nomeAmigo = inputAmigo.value.trim();
    if (nomeAmigo === '') {
        alert('Por favor, digite um nome válido.'); 
        return;
    }
    amigos.push(nomeAmigo); 
    atualizarListaAmigos();
    inputAmigo.value = '';
}
// Irá inclui-los em uma lista para visualização
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        const novoItem = document.createElement('li');
        novoItem.textContent = amigos[i]; 
        listaAmigos.appendChild(novoItem);
    }
}
//Sorteio considerando todos os amigos
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo para sortear.');
        return;
    }
    const indiceSorteado = Math.floor(Math.random() * amigos.length); 
    const amigoSorteado = amigos[indiceSorteado]; 
    amigos.splice(indiceSorteado, 1);
    const resultado = document.getElementById('resultado'); 
    resultado.innerHTML = `<li>${amigoSorteado}</li>`; //
}
