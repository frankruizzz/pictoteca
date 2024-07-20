document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const error = urlParams.get('error');
    const errorMessage = document.getElementById('error-message');

    if (error==='contrasena') {
        errorMessage.textContent = 'La contraseña ingresada no es correcta.';
    }
    else if (error === 'no_usuario'){
        errorMessage.textContent = 'Usuario no encontrado.';
    }
    else if (error === 'consulta'){
        errorMessage.textContent = 'Error en la consulta.';
    }
    else if (error === 'errorbd'){
        errorMessage.textContent = 'Error de conexión a la base de datos.';
    }
    else {
        errorMessage.textContent = 'Error desconocido.';
    }
    errorMessage.style.display = 'block';
    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 10000);
});