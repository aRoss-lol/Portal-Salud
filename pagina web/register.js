document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const passwordInput = document.getElementById('password');
    const password = passwordInput.value;

    // Aquí puedes agregar la lógica para validar la contraseña
    const isValidPassword = password.length >= 6; // Ejemplo de validación simple

    if (!isValidPassword) {
        // Cambia el fondo a la imagen de error
        document.body.classList.add('error-background');

        // Vuelve a la imagen de fondo normal después de 2 segundos
        setTimeout(() => {
            document.body.classList.remove('error-background');
            document.body.classList.add('normal-background');
        }, 2000);
    } else {
        // Aquí iría la lógica para enviar el formulario si la contraseña es válida
        alert('Registro exitoso');
    
        // Redirect to iniciodesesion.html
        window.location.href = 'iniciodesesion.html';
    }
});