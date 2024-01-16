<?php session_start();
	if(isset($_SESSION['usuario'])){
		header('Location: index.php');
		
	}
	
	if ($_SERVER['REQUEST_METHOD'] == 'POST'){
		$usuario = filter_var(strtolower($_POST['usuario']).FILTER_SANITIZE_STRING);
		$password = $_POST['password'];
		$password2 = $_POST['password2'];
		
		
		
		$errores = '';
		
		if (empty($usuario) or empty($password) or empty($password2)){
			$errores .= '<li>Rellena los datos correctamente, por favor.</li>';
			
		}else {
			try {
				$conexion = new PDO('mysql:host=localhost;dbname=iniciarsesion', 'root', '');
			}catch (PDOException $e){
				echo "Error: " . $e->getMessage();
				
			}
			$statement = $conexion->prepare('SELECT * FROM usuario WHERE usuario = :usuario LIMIT 1');
			$statement->execute(array(':usuario' => $usuario));
			$resultado = $statement->fetch();
			
			if($resultado != false){
				$errores .= '<li>El nombre de usuario ya exite.</li>';
			}
			
			$password = hash('sha512', $password);
			$password2 = hash('sha512', $password2);
			
			if($password != $password2){
				$errores .= '<li>Contraseñas no iguales.</li>';
			}
		}
		if($errores == ''){
			$statement = $conexion->prepare('INSERT INTO usuario (id,usuario,pass) VALUES (null, :usuario, :pass)');
			$statement->execute(array(
			':usuario' => $usuario,
			':pass' => $password
			));
			
			header('Location: login.php');
		}
	}
	require 'registro_view.php';
	
?>