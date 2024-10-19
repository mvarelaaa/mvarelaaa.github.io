document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('backgroundMusic');

    // Intenta reproducir automáticamente
    function attemptPlay() {
        audio.play().then(() => {
            console.log('Reproducción automática exitosa');
        }).catch(error => {
            console.log('Reproducción automática fallida. Error:', error);
            // Intenta reproducir nuevamente después de una interacción del usuario
            document.body.addEventListener('click', function() {
                audio.play();
            }, { once: true });
        });
    }

    attemptPlay();

    // Asegúrate de que la canción se reproduzca completamente
    audio.addEventListener('ended', function() {
        audio.currentTime = 0;
        audio.play();
    });

    // Añade un controlador de eventos para cualquier interacción del usuario
    document.body.addEventListener('mousemove', attemptPlay, { once: true });
    document.body.addEventListener('keydown', attemptPlay, { once: true });
    document.body.addEventListener('touchstart', attemptPlay, { once: true });
});