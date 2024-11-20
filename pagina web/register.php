<?php
// Configuración para mostrar errores durante el desarrollo
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Conexión a la base de datos MySQL
$servername = "localhost"; // Servidor de la base de datos
$username = "root"; // Nombre de usuario por defecto para XAMPP
$password = ""; // Contraseña por defecto para XAMPP
$dbname = "registration"; // Nombre de la base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error); // Detener la ejecución si hay un error de conexión
}

// Verificar si el formulario ha sido enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recuperar y sanitizar los datos del formulario
    $user = htmlspecialchars($_POST['username']); // Sanitizar el nombre de usuario
    $pass = htmlspecialchars($_POST['password']); // Sanitizar la contraseña

    // Cifrar la contraseña para mayor seguridad
    $hashed_password = password_hash($pass, PASSWORD_BCRYPT); // Hashear la contraseña

    // Preparar la consulta SQL para prevenir inyecciones SQL
    $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
    $stmt->bind_param("ss", $user, $hashed_password); // Vincular parámetros a la consulta

    // Ejecutar la consulta
    if ($stmt->execute()) {
        echo "Registration successful!"; // Mensaje de éxito
    } else {
        echo "Error: " . $stmt->error; // Mensaje de error si la ejecución falla
    }

    // Cerrar la declaración y la conexión
    $stmt->close(); // Cerrar la declaración
    $conn->close(); // Cerrar la conexión a la base de datos
}
?>