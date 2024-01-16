<?php session_start();

if (isset($_SESSION['usuario'])){
	require 'contenido_view.php';
}else {
	header('Location: login.php');
}


?>