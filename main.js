
function setTime() {
    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    
    let clockScreen = document.querySelector ('.horario')
    clockScreen.innerHTML = `${hours}:${minutes}:${seconds}`
}

setInterval (setTime, 1000)

