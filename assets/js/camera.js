const iniciarCamera = document.querySelector('[data-video-botao]')
const campoCamera = document.querySelector('[data-camera]')
const video = document.querySelector('[data-video]')

iniciarCamera.addEventListener('click', async function() {
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false})
    
    iniciarCamera.style.display = 'none'
    campoCamera.style.display = 'block'

    video.srcObject = iniciarVideo
})


const botaoTirarFoto = document.querySelector('[data-tirar-foto]')
const campoMensagem = document.querySelector('[data-mensagem]')
const canvas = document.querySelector('[data-video-canvas]')
let imagemURL = ''

botaoTirarFoto.addEventListener('click', function() {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)

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