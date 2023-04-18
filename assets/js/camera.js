// Representa o botão que deve ser clicado para iniciar a câmera
const iniciarCamera = document.querySelector('[data-video-botao]')
// Elemento HTML que envolve a área onde o vídeo será exibido
const campoCamera = document.querySelector('[data-camera]')
// Elemento HTML <video> em que o feed de vídeo será exibido
const video = document.querySelector('[data-video]')

iniciarCamera.addEventListener('click', async function() {
    // Solicita ao usuário permissão para acessar sua câmera e retorna um objeto MediaStream que contém o feed de vídeo
    // A opção 'video: true' indicar que a mídia solicitada deve ser um feed de vídeo
    // A opção 'audio: false' indica que o áudio não está sendo solicitado
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false})

    iniciarCamera.style.display = 'none'
    campoCamera.style.display = 'block'

    //  Atribui o objeto 'MediaStream' retornado pelo método getUserMedia() ao atributo 'srcObject' do elemento HTML video, permitindo que o feed de vídeo seja exibido no elemento <video>
    video.srcObject = iniciarVideo
})

console.log(iniciarCamera)
console.log(campoCamera)
console.log(video)