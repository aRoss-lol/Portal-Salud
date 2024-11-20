// JavaScript file for form validation
document.getElementById("registerForm").addEventListener("submit", function(event) {
    // Basic validation to ensure username and password meet basic criteria
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Checking minimum length for username and password
    if (username.length < 5) {
        alert("Username must be at least 5 characters long.");
        event.preventDefault(); // Prevent form submission
    } else if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        event.preventDefault(); // Prevent form submission
    } else if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
        alert("Password must contain at least one uppercase letter and one number.");
        event.preventDefault(); // Prevent form submission
    }
});
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const passwordInput = document.getElementById('password');
    const password = passwordInput.value;

    // Aquí puedes agregar la lógica para validar la contraseña
    const isValidPassword = password.length >= 6; // Ejemplo de validación simple

    if (!isValidPassword) {
        // Cambia el fondo a la imagen de error
        document.body.classList.add('error-background');

        // Reinicia la animación quitando y volviendo a agregar la clase
        setTimeout(() => {
            document.body.classList.remove('error-background'); // Eliminar la clase de error
            void document.body.offsetWidth; // Forzar el reflow para reiniciar la animación
            document.body.classList.add('error-background'); // Volver a agregar la clase de error
        }, 10); // Un pequeño retraso para permitir que la clase se elimine

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