function enviarEvaluacion(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Muestra el mensaje de éxito
    document.getElementById('mensajeExito').style.display = 'block';

    // Puedes agregar aquí el código para enviar los datos a un servidor si es necesario

    // Puedes redirigir a otra página después de unos segundos si lo deseas
    setTimeout(() => {
        window.location.href = 'tu_pagina_de_exito.html';
    }, 3000); // Redirige después de 3 segundos (3000 milisegundos)
}
