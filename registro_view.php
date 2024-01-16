<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="UTF-8" />
		<meta name="description" content="Sneakers" />
		<meta name="keywords" content="sneakers, streetwear,sneakersheads, reventa, resael" />
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
		<link rel="stylesheet" href="style_sesion.css" />		
		<title>Regístrate</title>
	</head>
	<body>
		<header class="cabecera">
		<hgroup>
			<h1>URBAN SUITE SNEAKERS</h1> 
			<a href="login.php"><img src="iconos/logos/logo.jpg"></a>
		</hgroup>		
		</header>	
		<nav class="menu">
			<ul>
				<li><a href="login.php">INICIO</a></li>
				<li><a href="galeriaSnkrs.php">GALERÍA</a></li>
				<li><a href="contactoSnkrs.php">CONTACTO</a></li>		
				<li><a href="#">CARRITO</a></li>
			</ul>					
		</nav>
		<div class="contenedor">		
		<h1 class="titulo">Regístrate</h1>
		<hr class="border">
		
		<form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="POST" class="formulario" name="login">
		<div class="form-group">
			<i class="icono izquierda fa fa-user"></i><input type="text" name="usuario" class="usuario" placeholder="Usuario">
		</div>
		<div class="form-group">
		<i class="icono izquierda fa fa-lock"></i><input type="password" name="password" class="password" placeholder="Contraseña">	
		</div>
		<div class="form-group">
		<i class="icono izquierda fa fa-lock"></i><input type="password" name="password2" class="password_btn" placeholder="Repetir contraseña">
		<i class="submit-btn fa fa-arrow-right" onclick="login.submit()"></i>
		</div>
		<?php if(!empty($errores)):	?>
			<div class="error">
				<ul>
					<?php echo $errores; ?>
				</ul>			
			</div>
		<?php endif; ?>
		</form>
			<p class="texto-registrate">
				¿Tienes una cuenta?
				<a href="login.php">Iniciar Sesión</a>
			</p>
		</div>
	</body>
</html>