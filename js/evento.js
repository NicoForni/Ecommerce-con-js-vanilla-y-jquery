// carga todos los productos
window.onload = function () {
	filtrarCatalogo("todos");
	imprimirCarrito(carrito);	
};


class productoDelCatalogo {
	constructor(id, marca, generacion, precio, img, categoria) {
		this.id = id;
		this.marca = marca;
		this.generacion = generacion;
		this.precio = precio;
		this.img = img;
		this.cantidad = 1;
		this.categoria = categoria;
	}

	getIva() {
		return this.precio * 0.21;
	}
}

const catalogoIntel = [
	new productoDelCatalogo(
		0,
		"Intel Core 9",
		"novena generacion",
		40000,
		"intel-0",
		"intel"
	),
	new productoDelCatalogo(
		1,
		"Intel Core 7",
		"septima generacion",
		35000,
		"intel-1",
		"intel"
	),
	new productoDelCatalogo(
		2,
		"Intel Core 5",
		"quinta generacion",
		30000,
		"intel-2",
		"intel"
	),
	new productoDelCatalogo(
		3,
		"Intel Core 3",
		"tercera generacion",
		25000,
		"intel-3",
		"intel"
	),
];

const catalogoAmd = [
	new productoDelCatalogo(
		4,
		"Amd Ryzen 7",
		"septima generacion",
		38000,
		"amd-4",
		"amd"
	),
	new productoDelCatalogo(
		5,
		"Amd Ryzen 5",
		"quinta generacion",
		32000,
		"amd-5",
		"amd"
	),
	new productoDelCatalogo(
		6,
		"Amd Ryzen 3",
		"tercera generacion",
		28000,
		"amd-6",
		"amd"
	),
	new productoDelCatalogo(
		7,
		"Amd Ryzen 2",
		"segunda generacion",
		22000,
		"amd-7",
		"amd"
	),
];

const catalogoGeforce = [
	new productoDelCatalogo(
		8,
		"Placa Geforce 1080",
		"8gb",
		80000,
		"geforce-8",
		"geforce"
	),
	new productoDelCatalogo(
		9,
		"Placa Geforce 1070",
		"6gb",
		75000,
		"geforce-9",
		"geforce"
	),
	new productoDelCatalogo(
		10,
		"Placa Geforce 1060",
		"3gb",
		70000,
		"geforce-10",
		"geforce"
	),
	new productoDelCatalogo(
		11,
		"Placa Geforce 1050",
		"2gb",
		65000,
		"geforce-11",
		"geforce"
	),
];

const catalogoRadeon = [
	new productoDelCatalogo(
		12,
		"Placa Radeon 590",
		"8gb",
		78000,
		"radeon-12",
		"radeon"
	),
	new productoDelCatalogo(
		13,
		"Placa Radeon 580",
		"6gb",
		72000,
		"radeon-13",
		"radeon"
	),
	new productoDelCatalogo(
		14,
		"Placa Radeon 570",
		"3gb",
		62000,
		"radeon-14",
		"radeon"
	),
	new productoDelCatalogo(
		15,
		"Placa Radeon 560",
		"2gb",
		58000,
		"radeon-15",
		"radeon"
	),
];

const catalogos = [catalogoIntel, catalogoAmd, catalogoRadeon, catalogoGeforce];

// console.log(catalogoIntel[2].marca) RECORDATORIO PARA MI ==========


//===============LLAMADO AL EVENTO CLICK DEL BOTON================

//VARIABLES CREADAS PARA COMUNICAR AL HTML
const botones = document.getElementById("botones");
const productosFiltrados = document.getElementById("productos-filtrados");

// event listener sobre el div que los contiene
botones.addEventListener("click", (e) => {
	// accedo al evento, luego al elemento que recibio el click, luego al dataset "prod" que agregue en el html
	let data = e.target.dataset.prod;
	// solo se ejecuta la funcion si hago click sobre el boton con tipo "submit"
	if (e.target.type === "submit") {
		filtrarCatalogo(data);
	}
});

function filtrarCatalogo(producto) {
	// primero borra el contenido de "productosFiltrados"
	productosFiltrados.innerHTML = "";

	// luego asigna con innerHtml segun lo elegido
	switch (producto) {
		case "intel":
			catalogoIntel.forEach((e) => {
				productosFiltrados.innerHTML += `
            <div class="contenedor-de-producto">
                <img class="ajuste-de-imagen" src="./assets/${e.img}.jpg" width="" height="">
                <hr>
                <p class="title">${e.marca}</p>
                <br>
                <p>${e.generacion}</p>
                <br>
				<p>$ ${e.precio}</p>
				<br>
					<div id="contenedor-de-cantidades">
                        <div>CANTIDAD</div>                       
                        <select name="cantidad" id="cantidad">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>                      
                    </div>    
				<br>            
                <input class="clase-de-agregar" data-prod="${producto.categoria}" id="${producto.id}" onclick="agregarAlCarrito(event)" type="button" value="AÑADIR">
            </div>`;
			});
			break;
		case "amd":
			catalogoAmd.forEach((e) => {
				productosFiltrados.innerHTML += `
            <div class="contenedor-de-producto">
                <img class="ajuste-de-imagen" src="./assets/${e.img}.jpg" width="" height="">
                <hr>
                <p class="title">${e.marca}</p>
                <br>
                <p>${e.generacion}</p>
                <br>
				<p>$ ${e.precio}</p>
				<br>
					<div id="contenedor-de-cantidades">
                        <div>CANTIDAD</div>                       
                        <select name="cantidad" id="cantidad">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>                      
                    </div>    
				<br>                       
                <input class="clase-de-agregar" data-prod="${producto.categoria}" id="${producto.id}" onclick="agregarAlCarrito(event)" type="button" value="AÑADIR">
            </div>`;
			});
			break;
		case "radeon":
			catalogoRadeon.forEach((e) => {
				productosFiltrados.innerHTML += `
            <div class="contenedor-de-producto">
                <img class="ajuste-de-imagen" src="./assets/${e.img}.jpg" width="" height="">
                <hr>
                <p class="title">${e.marca}</p>
                <br>
                <p>${e.generacion}</p>
                <br>     
				<p>$ ${e.precio}</p>
				<br>
					<div id="contenedor-de-cantidades">
                        <div>CANTIDAD</div>                       
                        <select name="cantidad" id="cantidad">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>                      
                    </div>    
				<br>                  
                <input class="clase-de-agregar" data-prod="${producto.categoria}" id="${producto.id}" onclick="agregarAlCarrito(event)" type="button" value="AÑADIR">
            </div>`;
			});
			break;
		case "geforce":
			catalogoGeforce.forEach((e) => {
				productosFiltrados.innerHTML += `
            <div class="contenedor-de-producto">
                <img class="ajuste-de-imagen" src="./assets/${e.img}.jpg" width="" height="">
                <hr>
                <p class="title">${e.marca}</p>
                <br>
                <p>${e.generacion}</p>
                <br>    
				<p>$ ${e.precio}</p>
				<br>
					<div id="contenedor-de-cantidades">
                        <div>CANTIDAD</div>                       
                        <select name="cantidad" id="cantidad">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>                      
                    </div>    
				<br>                   
                <input class="clase-de-agregar" data-prod="${producto.categoria}" id="${producto.id}" onclick="agregarAlCarrito(event)" type="button" value="AÑADIR">
            </div>`;
			});
			break;
		case "todos":
			catalogos.forEach((cat) => {
				cat.forEach((producto) => {
					productosFiltrados.innerHTML += `
            <div class="contenedor-de-producto">
                <img class="ajuste-de-imagen" src="./assets/${producto.img}.jpg" width="" height="">
                <hr>
                <p class="title">${producto.marca}</p>
                <br>
                <p>${producto.generacion}</p>
                <br>  
				<p class="price">$ ${producto.precio}</p>
				<br>
					<div id="contenedor-de-cantidades">
                        <div>CANTIDAD</div>                       
                        <select name="cantidad" id="cantidad">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>                      
                    </div>    
				<br>                 
                <input class="clase-de-agregar" data-prod="${producto.categoria}" id="${producto.id}" onclick="agregarAlCarrito(event)" type="button" value="AÑADIR">
            </div>`;
				});
			});
			break;

		default:
			break;
	}
}
//===============TERMINA EVENTO CLICK DEL BOTON================

//====================COMIENZA EVENTO DEL BUSCADOR==============================

//VARIABLES CREADAS PARA COMUNICAR AL HTML
const buscador = document.getElementById("buscador");
const boton = document.getElementById("boton");

const filtrarBuscador = () => {
	//SE CREA VARIABLE PARA ASIGNARLE VALOR AL CUADRO DE TEXTO
	const texto = buscador.value;

	//SE BORRAN LOS PRODUCTOS QUE NO ENTRAN EN EL FILTRO
	productosFiltrados.innerHTML = "";

	//SE CREA VARIABLE DE FILTRO PARA CADA MARCA
	const filtroIntel = catalogoIntel.filter((elemento) => {
		return elemento.marca.toLowerCase().includes(texto.toLowerCase());
	});
	const filtroAmd = catalogoAmd.filter((elemento) => {
		return elemento.marca.toLowerCase().includes(texto.toLowerCase());
	});
	const filtroGeforce = catalogoGeforce.filter((elemento) => {
		return elemento.marca.toLowerCase().includes(texto.toLowerCase());
	});
	const filtroRadeon = catalogoRadeon.filter((elemento) => {
		return elemento.marca.toLowerCase().includes(texto.toLowerCase());
	});

	filtroIntel.forEach((e) => {
		productosFiltrados.innerHTML += `
            <div class="contenedor-de-producto">
                <img class="ajuste-de-imagen" src="./assets/${e.img}.jpg" width="" height="">
                <hr>
                <p class="title">${e.marca}</p>
                <br>
                <p>${e.generacion}</p>
                <br>  
				<p class="price">$ ${e.precio}</p>
				<br>
					<div id="contenedor-de-cantidades">
                        <div>CANTIDAD</div>                       
                        <select name="cantidad" id="cantidad">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>                      
                    </div>    
				<br>                 
                <input class="clase-de-agregar" data-prod="${e.categoria}" id="${e.id}" onclick="agregarAlCarrito(event)" type="button" value="AÑADIR">
            </div>`;
	});
	filtroAmd.forEach((e) => {
		productosFiltrados.innerHTML += `
            <div class="contenedor-de-producto">
                <img class="ajuste-de-imagen" src="./assets/${e.img}.jpg" width="" height="">
                <hr>
                <p class="title">${e.marca}</p>
                <br>
                <p>${e.generacion}</p>
                <br>  
				<p class="price">$ ${e.precio}</p>
				<br>
					<div id="contenedor-de-cantidades">
                        <div>CANTIDAD</div>                       
                        <select name="cantidad" id="cantidad">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>                      
                    </div>    
				<br>                 
                <input class="clase-de-agregar" data-prod="${e.categoria}" id="${e.id}" onclick="agregarAlCarrito(event)" type="button" value="AÑADIR">
            </div>`;
	});
	filtroGeforce.forEach((e) => {
		productosFiltrados.innerHTML += `
            <div class="contenedor-de-producto">
                <img class="ajuste-de-imagen" src="./assets/${e.img}.jpg" width="" height="">
                <hr>
                <p class="title">${e.marca}</p>
                <br>
                <p>${e.generacion}</p>
                <br>  
				<p class="price">$ ${e.precio}</p>
				<br>
					<div id="contenedor-de-cantidades">
                        <div>CANTIDAD</div>                       
                        <select name="cantidad" id="cantidad">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>                      
                    </div>    
				<br>                 
                <input class="clase-de-agregar" data-prod="${e.categoria}" id="${e.id}" onclick="agregarAlCarrito(event)" type="button" value="AÑADIR">
            </div>`;
	});
	filtroRadeon.forEach((e) => {
		productosFiltrados.innerHTML += `
            <div class="contenedor-de-producto">
                <img class="ajuste-de-imagen" src="./assets/${e.img}.jpg" width="" height="">
                <hr>
                <p class="title">${e.marca}</p>
                <br>
                <p>${e.generacion}</p>
                <br>  
				<p class="price">$ ${e.precio}</p>
				<br>
					<div id="contenedor-de-cantidades">
                        <div>CANTIDAD</div>                       
                        <select name="cantidad" id="cantidad">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>                      
                    </div>    
				<br>                 
                <input class="clase-de-agregar" data-prod="${e.categoria}" id="${e.id}" onclick="agregarAlCarrito(event)" type="button" value="AÑADIR">
            </div>`;
	});
};

//LLAMADO AL EVENTO PARA QUE EL BOTON "BUSCAR" AL TOCARLO HAGA EL FILTRO
boton.addEventListener("click", filtrarBuscador);

//LLAMADO AL EVENTO PARA QUE EL INPUT DEL BUSCADOR FILTRE LOS PRODUCTOS MIENTRAS SE ESCRIBEN
buscador.addEventListener("keyup", filtrarBuscador);

//====================TERMINA EVENTO DEL BUSCADOR==============================
