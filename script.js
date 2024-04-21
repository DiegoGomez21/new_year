function generarConfeti() {
    // Crea un div para el confeti
    const confeti = document.createElement("div");
    confeti.classList.add("confeti");
    // Establece una posición aleatoria dentro del div principal
    confeti.style.left = Math.random() * 100 + "%";
    // Establece una posición vertical aleatoria dentro del div principal
    confeti.style.top = -10 + Math.random() * 500 + "px";
    // Asigna un tono de color aleatorio
    confeti.style.setProperty("--hue", Math.random());
    // Agrega el confeti al contenedor
    document.querySelector(".confeti-container").appendChild(confeti);
    // Elimina el confeti después de cierto tiempo para evitar acumulación
    setTimeout(() => {
        confeti.remove();
    }, 3000); // Cambia el tiempo según tu preferencia
}

// Genera confetis cada cierto tiempo
setInterval(generarConfeti, 100);

// Función para generar el efecto al brindar
function brindar() {
    // Creamos un elemento para el mensaje
    const mensaje = document.createElement('div');
    mensaje.classList.add('brindar-mensaje');
    mensaje.innerHTML = '<p>¡TE AMOOO 💕💕💕!</p>';

    // Añadimos el mensaje al cuerpo del documento
    document.body.appendChild(mensaje);

    // Eliminamos el mensaje después de 3 segundos
    setTimeout(function() {
        mensaje.remove();
    }, 3000);
}

// Evento de clic para el botón de brindar
document.getElementById('brindar-btn').addEventListener('click', brindar);

document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById("myAudio");
    audio.play();
});