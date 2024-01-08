async function listaVideos () { 
  const conexao = await fetch('http://localhost:3000/videos') // requisicao do tipo GET
  const conexaoConvertida = await conexao.json()
  return conexaoConvertida
}
 
async function criaVideo(titulo, descricao,url,imagem) {
  const conexao = await fetch('http://localhost:3000/videos', {
    method: 'POST',
    headers: {
      'Content-type': 'aplication/json'
    },
    body: JSON.stringify({
      titulo: titulo,
      descricao: `${descricao} mil visalizações`,
      url: url,
      imagem: imagem
    })
  })
  const conexaoConvertida = await conexao.json()
  return conexaoConvertida
}


export const conexaoApi = {
  listaVideos, 
  criaVideo
}