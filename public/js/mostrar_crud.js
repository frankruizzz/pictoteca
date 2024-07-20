document.addEventListener('DOMContentLoaded', () => {
    let actual = '';

    fetch('/php/username.php')
        .then(response => response.json())
        .then(data => {
            if (data.username) {
                actual = data.username;
                checaUser();
            }
        })
        .catch(error => console.error('Error obteniendo el username:', error));

    function checaUser() {
        const usernameImg = document.getElementById('usernameImg').textContent;

        if (actual === usernameImg) {
            mostrarBotones();
        }
    }

    function mostrarBotones() {
        const imageContainer = document.getElementById('image-container');
        const editar = document.createElement('a');
        const borrar = document.createElement('a');

        editar.textContent = 'Editar imagen';
        borrar.textContent = 'Eliminar imagen';

        editar.setAttribute('href','editar.html');
        borrar.setAttribute('href','/php/eliminar.php');

        imageContainer.appendChild(editar);
        imageContainer.appendChild(borrar);
    }
});
