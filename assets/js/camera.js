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


const botaoTirarFoto = document.querySelector('[data-tirar-foto]')
const campoMensagem = document.querySelector('[data-mensagem]')
const canvas = document.querySelector('[data-video-canvas]')
const imagemUrl = ''

botaoTirarFoto.addEventListener('click', function() {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)

    imagemURL = canvas.toDataURL('image/jpeg')

    campoCamera.style.display = 'none'
    campoMensagem.style.display = 'block'
})