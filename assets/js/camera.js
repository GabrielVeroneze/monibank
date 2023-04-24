// Representa o botão que deve ser clicado para iniciar a câmera
const iniciarCamera = document.querySelector('[data-video-botao]')
// Elemento HTML que envolve a área onde o vídeo será exibido
const campoCamera = document.querySelector('[data-camera]')
// Elemento HTML <video> em que o feed de vídeo será exibido
const video = document.querySelector('[data-video]')

iniciarCamera.addEventListener('click', async function() {
    iniciarCamera.style.display = 'none'
    campoCamera.style.display = 'block'
    
    // Solicita ao usuário permissão para acessar sua câmera e retorna um objeto MediaStream que contém o feed de vídeo
    // A opção 'video: true' indicar que a mídia solicitada deve ser um feed de vídeo
    // A opção 'audio: false' indica que o áudio não está sendo solicitado
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false})
    
    //  Atribui o objeto 'MediaStream' retornado pelo método getUserMedia() ao atributo 'srcObject' do elemento HTML video, permitindo que o feed de vídeo seja exibido no elemento <video>
    video.srcObject = iniciarVideo
})


// Representa o botão que deve ser clicado para tirar a foto
const botaoTirarFoto = document.querySelector('[data-tirar-foto]')
// Elemento HTML que envolve a área onde a imagem será exibida
const campoMensagem = document.querySelector('[data-mensagem]')
// // Elemento HTML <canvas> em que a fimagem será exibida
const canvas = document.querySelector('[data-video-canvas]')
let imagemURL = ''

botaoTirarFoto.addEventListener('click', function() {

    // Criando uma imagem capturada do vídeo sendo exibido na tela e desenhando essa imagem em um elemento canvas
    // O método 'getContext('2d')' é usado para obter o contexto de renderização do canvas e 'drawImage()' para desenhar a imagem do elemento video no canvas
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)

    // Converte a imagem desenhada no elemento canvas em uma string de dados codificada em base64 no formato JPEG e armazena a string 
    imagemURL = canvas.toDataURL('image/jpeg')

    campoCamera.style.display = 'none'
    campoMensagem.style.display = 'block'
})


const botaoEnviarFoto = document.querySelector('[data-enviar]')

botaoEnviarFoto.addEventListener('click', () => {
    const receberDadosExistente = localStorage.getItem('cadastro')
    const dadosConvertidos = JSON.parse(receberDadosExistente)

    dadosConvertidos.imagem = imagemURL
    
    localStorage.setItem('cadastro', JSON.stringify(dadosConvertidos))

    window.location.href = './abrir-conta-form-3.html'
})