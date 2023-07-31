document.getElementById('comentarios-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch('/send-response', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            console.log('Respuesta enviada con éxito');
        } else {
            console.error('Error al enviar la respuesta');
        }
    })
    .catch(error => {
        console.error('Error en la solicitud:', error);
    });
});