/*Código para ampliar las imágenes de los productos */

 function mostrarImagenAmpliada(src) {
            document.getElementById('imagenGrande').src = src;
            document.getElementById('imagenAmpliada').style.display = 'flex';
        }

        function ocultarImagenAmpliada() {
            document.getElementById('imagenAmpliada').style.display = 'none';
        }