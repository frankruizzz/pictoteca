<?php
include('conexion.php');
session_start();

$username = $_POST["username"];
$password = $_POST["password"];

if ($con) {
    $sql = "SELECT contrasena FROM usuario WHERE username = '$username'";
    $res = mysqli_query($con, $sql);

    if ($res) {
        if (mysqli_num_rows($res) > 0) {
            $row = mysqli_fetch_assoc($res);
            $hash_guardada = $row['contrasena'];
            
            if (password_verify($password, $hash_guardada)===true) {
                header("location: /index.html");
                $_SESSION['username'] = $username;
            } else {
                echo "La contraseña ingresada no es correcta.";
            }
        } else {
            echo "Usuario no encontrado.";
        }
    } else {
        echo "Error en la consulta: " . mysqli_error($con);
    }

    mysqli_close($con);
} else {
    echo "Error de conexión a la base de datos.";
}
?>
