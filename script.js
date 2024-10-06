// Simular una cuenta regresiva para el "borrado de datos"
function countdown() {
    var timeleft = 10;
    var countdownTimer = setInterval(function() {
        document.getElementById('timer').innerHTML = timeleft;
        timeleft -= 1;
        if(timeleft < 0){
            clearInterval(countdownTimer);
            alert("¡Sistema borrado! Todo ha sido eliminado.");
        }
    }, 1000);
}

// Mostrar líneas de hackeo en la consola con retraso
function showLine(lineId, delay) {
    setTimeout(function() {
        document.getElementById(lineId).classList.add('reveal');
        if (lineId === 'countdown') {
            countdown();  // Iniciar cuenta regresiva cuando se muestre esta línea
        }
    }, delay);
}

// Mostrar las ventanas emergentes
function showWindow(windowId, delay) {
    setTimeout(function() {
        document.getElementById(windowId).classList.remove('hidden');
    }, delay);
}

// Simulación de hackeo
showLine('line2', 2000);
showLine('line3', 4000);
showLine('line4', 6000);
showLine('countdown', 8000);

// Mostrar ventanas emergentes de hackeo
showWindow('popup-window', 10000);
showWindow('linux-terminal', 12000);
