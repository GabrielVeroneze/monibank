const iniciarCamera = document.querySelector('[data-video-botao]')
const campoCamera = document.querySelector('[data-camera]')
const video = document.querySelector('[data-video]')

iniciarCamera.addEventListener('click', async function() {
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false})

    iniciarCamera.style.display = 'none'
    campoCamera.style.display = 'block'

    video.srcObject = iniciarVideo
})

console.log(iniciarCamera)
console.log(campoCamera)
console.log(video)