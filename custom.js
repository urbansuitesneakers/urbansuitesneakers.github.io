//variables
let allContainerCart = document.querySelector('.snkrs');
let containerBuyCart = document.querySelector('.card-items');
let priceTotal = document.querySelector('.price-total');
let amountProduct = document.querySelector('.count-product');


let buyThings = [];
let totalCard = 0;
let countProduct = 0;

//funciones
loadEventListenrs();
function loadEventListenrs(){
    allContainerCart.addEventListener('click', addProduct);

    containerBuyCart.addEventListener('click', deleteProduct);
}

function addProduct(e){
    e.preventDefault();
    if (e.target.classList.contains('botonAñadir')){
        const selectProduct = e.target.parentElement; 
        readTheContent(selectProduct);
    }
}

function deleteProduct(e) {
    if (e.target.classList.contains('delete-product')) {
        const deleteId = e.target.getAttribute('data-id');

        buyThings.forEach(value => {
            if (value.id == deleteId) {
                let priceReduce = parseFloat(value.price) * parseFloat(value.amount);
                totalCard =  totalCard - priceReduce;
                totalCard = totalCard.toFixed(2);
            }
        });
        buyThings = buyThings.filter(product => product.id !== deleteId);
        
        countProduct--;
    }
    if (buyThings.length === 0) {
        priceTotal.innerHTML = 0;
        amountProduct.innerHTML = 0;
    }
    loadHtml();
}

function readTheContent(product){
    const infoProduct = {
		foto: product.querySelector('.fotos').src,
		title: product.querySelector('.titulo').textContent,
		dispo: product.querySelector('.disponibilidad').textContent,
		size: product.querySelector('.talla').textContent,
		codigo: product.querySelector('.sku').textContent,
		price: product.querySelector('.precio').textContent,
		id: product.querySelector('button').getAttribute('data-id'),
		amount: 1
	}

    totalCard = parseFloat(totalCard) + parseFloat(infoProduct.price);
    totalCard = totalCard.toFixed(2);

    const exist = buyThings.some(product => product.id === infoProduct.id);
    if (exist) {
        const pro = buyThings.map(product => {
            if (product.id === infoProduct.id) {
                product.amount++;
                return product;
            } else {
                return product
            }
        });
        buyThings = [...pro];
    } else {
        buyThings = [...buyThings, infoProduct]
        countProduct++;
    }
    loadHtml();
}

function loadHtml(){
    clearHtml();
	buyThings.forEach(product => {
		const {foto, title, dispo, size, codigo, price, id, amount} = product;
		const row = document.createElement('div');
		row.classList.add('item');
		row.innerHTML = `
		<img src="${foto}" alt="">
        <div class="item-content">
			<h5>${title}</h5>
            <h5>${dispo}</h5>
			<h5>${size}</h5>
			<h5>${codigo}</h5>
			<h5>${price}</h5>
			<h6>Amount: ${amount}</h6>
        </div>
        <span class="delete-product" data-id="${id}">X</span>
		
		`;

        containerBuyCart.appendChild(row);

        priceTotal.innerHTML = totalCard;

        amountProduct.innerHTML = countProduct;
    });
}
function showCart(x){
            document.getElementById("products-id").style.display = "block";
        }
        function closeBtn(){
             document.getElementById("products-id").style.display = "none";
        }
 function clearHtml(){
    containerBuyCart.innerHTML = '';
 }