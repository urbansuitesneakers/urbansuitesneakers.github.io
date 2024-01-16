//variables
let todoContenedorCarrito = document.querySelector('.snkrs');
let articulosCarrito = document.querySelector('.articulos');
let precioTotal = document.querySelector('.total');
let monto = document.querySelector('.cantidadProducto');


let compraArticulo = [];
let totalArticulo = 0;
let conteoProducto = 0;

//Funciones añadirProducto, borrarProducto, leerContenido, y loadHtml
loadEventListenrs();
function loadEventListenrs(){
    todoContenedorCarrito.addEventListener('click', añadirProducto);

    articulosCarrito.addEventListener('click', borrarProducto);
}

function añadirProducto(e){
    e.preventDefault();
    if (e.target.classList.contains('botonAñadir')){
        const selectProduct = e.target.parentElement; 
        leerContenido(selectProduct);
    }
}

function borrarProducto(e) {
    if (e.target.classList.contains('delete-product')) {
        const deleteId = e.target.getAttribute('data-id');

        compraArticulo.forEach(value => {
            if (value.id == deleteId) {
                let priceReduce = parseFloat(value.price) * parseFloat(value.cantidad);
                totalArticulo =  totalArticulo - priceReduce;
                totalArticulo = totalArticulo.toFixed(2);
            }
        });
        compraArticulo = compraArticulo.filter(product => product.id !== deleteId);
        
        conteoProducto--;
    }
    if (compraArticulo.length === 0) {
        precioTotal.innerHTML = 0;
        monto.innerHTML = 0;
    }
    loadHtml();
}

function leerContenido(product){
    const infoProduct = {
		foto: product.querySelector('.fotos').src,
		title: product.querySelector('.titulo').textContent,
		
		price: product.querySelector('.precio').textContent,
		id: product.querySelector('button').getAttribute('data-id'),
		cantidad: 1
	}

    totalArticulo = parseFloat(totalArticulo) + parseFloat(infoProduct.price);
    totalArticulo = totalArticulo.toFixed(2);

    const exist = compraArticulo.some(product => product.id === infoProduct.id);
    if (exist) {
        const pro = compraArticulo.map(product => {
            if (product.id === infoProduct.id) {
                product.cantidad++;
                return product;
            } else {
                return product
            }
        });
        compraArticulo = [...pro];
    } else {
        compraArticulo = [...compraArticulo, infoProduct]
        conteoProducto++;
    }
    loadHtml();
}

function loadHtml(){
    clearHtml();
	compraArticulo.forEach(product => {
		const {foto, title, price, id, cantidad} = product;
		const row = document.createElement('div');
		row.classList.add('item');
		row.innerHTML = `
		<img src="${foto}" alt="">
        <div class="item-content">
			<h5>${title}</h5>
			<h5>${price}</h5>
			<h6>Cantidad: ${cantidad}</h6>
        </div>
        <span class="delete-product" data-id="${id}">X</span>
		
		`;

        articulosCarrito.appendChild(row);

        precioTotal.innerHTML = totalArticulo;

        monto.innerHTML = conteoProducto;
    });
}
//Función mostrarCarrito
function mostrarCarrito(x){
            document.getElementById("productos-id").style.display = "block";
        }
        function ocultarCarrito(){
             document.getElementById("productos-id").style.display = "none";
        }
 function clearHtml(){
    articulosCarrito.innerHTML = '';
 }

// Función para desplazamiento suave al inicio
function scrollToTop() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
}

