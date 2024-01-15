import { conexaoApi } from "./conexaoApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo (evento) {
  evento.preventDefault()
  const dadosDePesquisa = document.querySelector('[data-pesquisa]').value
  const busca = await conexaoApi.buscaVideo(dadosDePesquisa)

  const lista = document.querySelector('[data-lista]')
  while (lista.firstChild){
    lista.removeChild(lista.firstChild)
  }
  busca.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));

  if (busca.length == 0){
    lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com este termo</h2>`
  }
}

const botao = document.querySelector('[data-botao-pesquisa]')
botao.addEventListener('click', evento => buscarVideo(evento))