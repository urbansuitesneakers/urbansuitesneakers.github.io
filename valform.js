function validarFormulario(){
	
	var nombre = document.getElementById('nombre').value;
	var apellidos = document.getElementById('apellidos').value;
	var telefono = document.getElementById('telefono').value;
	var email = document.getElementById('email').value;
	
	if (nombre === '' || apellidos === '' || telefono === '' || email === '') {
		alert('Por favor, completa todos los campos.');
		return false;
		
	}
	 var telefonoRegex = /^\d{9}$/;
	 if(!telefonoRegex.test(telefono)) {
		 alert('Por favor, introduce un número de teléfono de 9 dígitos.');
		 return false;
		 
	 }
	
	var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if(!emailRegex.test(email)) {
		alert('Por favor, introduce un correo electrónico válido.');
		return false;
	}
	
	return true;	
	
}