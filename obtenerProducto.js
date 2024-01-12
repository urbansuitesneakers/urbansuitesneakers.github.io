
        // Obtener productos del localStorage
        let productosEnCesta = JSON.parse(localStorage.getItem('productos')) || [];

        // Mostrar productos en la cesta
        let cesta = document.getElementById('cesta');
        productosEnCesta.forEach(producto => {
            let nuevoProducto = document.createElement('li');
            nuevoProducto.textContent = `${producto.nombre} - $${producto.precio}`;
            cesta.appendChild(nuevoProducto);
        });
   
