<?php
$servidor = "localhost";
$usuario = "root";
$clave = "";
$base_datos = "zapatillas";

$conexion = new mysqli($servidor, $usuario, $clave, $base_datos);

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}
?>
