import { conectaApi } from "./conectaApi.js";

//Função para construir o produto inserindo o nome, valor e imagem no formulário
const formulario = document.querySelector("[data-formulario]");


async function criarProduto(evento) {
  evento.preventDefault();

  const nome = document.getElementById("campo__nome").value;/* pontos de alteração. */
  const valor = document.getElementById("campo__valor").value;/* pontos de alteração. */
  const imagem = document.getElementById("campo__imagem").value;/* pontos de alteração. */



  await conectaApi.criaProduto(nome, valor, imagem);
  alert('Produto guardado com sucesso!');
}

//fazendo o botão guardar inserir o novo produto na lista
formulario.addEventListener("submit", evento => criarProduto(evento));


//Fazendo o botão limpar apagar o que foi digitado no formulario:

// Selecionando os campos do formulário
const nameInput = document.getElementById('campo__nome');
const valueInput = document.getElementById('campo__valor');
const imageInput = document.getElementById('campo__imagem');

// Função para limpar os campos
function limparFormulario() {
  // Definindo os valores dos campos como vazio
  nameInput.value = '';
  valueInput.value = '';
  imageInput.value = '';
}

// Adicionando um evento de clique ao botão "Limpar"
const limparButton = document.getElementById('limpar');
limparButton.addEventListener('click', limparFormulario);