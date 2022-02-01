const carrito = JSON.parse(localStorage.getItem("carrito")) || []  ;

function agregarAlCarrito(click) {
	//DEVUELVE EL ID DEL PRODUCTO CLICKQUEADO EN SU BOTON "AÑADIR"
	let idProductoSeleccionado = click.target.id;
	
	let categoriaSeleccionada = click.target.dataset.prod;
	// según que categoria se seleccione, utiliza el array correspondiente
	// compara el id del boton clickeado con el de cada objeto
	// devuelve el primer objeto que coincida con la busqueda
	let productoSeleccionado;
	switch (categoriaSeleccionada) {
		case "intel":
			productoSeleccionado = catalogoIntel.find(
				(producto) => producto.id == idProductoSeleccionado
			);
			break;
		case "amd":
			productoSeleccionado = catalogoAmd.find(
				(producto) => producto.id == idProductoSeleccionado
			);
			break;
		case "radeon":
			productoSeleccionado = catalogoRadeon.find(
				(producto) => producto.id == idProductoSeleccionado
			);
			break;
		case "geforce":
			productoSeleccionado = catalogoGeforce.find(
				(producto) => producto.id == idProductoSeleccionado
			);
			break;
	}

	// ASI SE ACCEDE AL "VALUE SELECT". HACIENDOLE CONSOLE.LOG DA LA CANTIDAD SELECCIONADA TOCANDO "AÑADIR"
	let cantidadSeleccionada =
		click.target.parentElement.querySelector("#cantidad").value;
	
	const enCarrito = carrito.some(
		(producto) => producto.id == idProductoSeleccionado
	);

	if (enCarrito) {
		carrito.forEach((producto) => {
			if (producto.id == idProductoSeleccionado) {
				producto.cantidad =
					Number(producto.cantidad) + Number(cantidadSeleccionada);
				imprimirCarrito();
			}
		});
	} else {
		productoSeleccionado.cantidad = Number(cantidadSeleccionada);
		carrito.push(productoSeleccionado);
		imprimirCarrito();
	}
	
	localStorage.setItem("carrito", JSON.stringify(carrito))
	
}

function imprimirCarrito() {	
	//ACCESO A LOS CONTENEDORES RESPECTIVOS DEL CARRITO
	const contenedorDeProductos = document.getElementById("contenedor-de-productos");

	const contenedorDePrecios = document.getElementById("contenedor-de-precios");

	const contenedorDeCantidad = document.getElementById("contenedor-de-cantidad");

	const contenedorDeEliminar = document.getElementById("contenedor-de-eliminar")

	const contenedorDeTotal = document.getElementById ("total");

	// para evitar repetidos, siempre borro el contenido. Se vuelve a rellenar con forEach
	contenedorDeProductos.innerHTML = "";
	contenedorDePrecios.innerHTML = "";
	contenedorDeCantidad.innerHTML = "";
	contenedorDeEliminar.innerHTML ="";
	contenedorDeTotal.innerHTML="";
	
	let total = 0;
	
	carrito.forEach((p) => {

		//CREO UN DIV, QUE SERÁ PARA QUE CADA PRODUCTO NUEVO AGREGADO SE ALMACENE EN UNA NUEVA LINEA
		const divProducto = document.createElement("div");
		//HAGO QUE LISTE Y APAREZCA EL PRODUCTO CLIQUEADO
		divProducto.innerHTML = `<br><div>${p.marca}</div><br>`;
		//LE DIGO A ESE PRODUCTO QUE SE ACOMODE DENTRO DEL CONTENEDOR DEL CARRITO
		contenedorDeProductos.appendChild(divProducto);		

		//TODO LO MISMO ANTERIOR PERO PARA LA CANTIDAD
		const divCantidad = document.createElement("div");
		divCantidad.innerHTML = `<br><div>${p.cantidad} unid.</div><br>`;
		contenedorDeCantidad.appendChild(divCantidad);

		//TODO LO MISMO ANTERIOR PERO PARA EL PRECIO
		const divPrecio = document.createElement("div");
		divPrecio.innerHTML = `<br><div>$${p.precio} c/u</div><br>`;
		contenedorDePrecios.appendChild(divPrecio);

		//BOTON ELIMINAR
		const divEliminar = document.createElement("div");
		divEliminar.innerHTML = `<br><button class="boton-eliminar" id="${p.id}" data-prod="${p.categoria}" onclick=eliminarProducto(event)>X</button><br>`
		contenedorDeEliminar.appendChild(divEliminar);
		
		//PRECIO TOTAL
		total = total + Number(p.precio*p.cantidad);		
		contenedorDeTotal.innerHTML = `<div>TOTAL A PAGAR: $${total}</div>`;			
	
	});
	
	
}

	//==========HACERLO MEDIANTE JQUERY=======
	// ACCESO AL ID DEL BOTON COMPRAR PARA PASARLE EL EVENTO CLICK CON LA FUNCION "ALERTA"
	$("#boton-comprar").click(alerta);
	// FUNCION PARA FINALIZAR LA COMPRA ADAPTADA CON JQUERY	
		function alerta() {			
			let mensaje = {
				title: "Compra confirmada!",
				text: "Su pedido llegará pronto",
				icon: "success",
				confirmButtonText: "OK",								
			};
		
			Swal.fire(mensaje);
		}

	// ========COMO HACERLO MEDIANTE JS PURO=========
	// let botonComprar = document.getElementById("boton-comprar")
	// botonComprar.addEventListener("click",alerta)
	
	// 	function alerta() {
			
	// 		let mensaje = {
	// 			title: "Compra confirmada!",
	// 			text: `Su pedido llegará pronto`,
	// 			icon: "success",
	// 			confirmButtonText: "OK",								
	// 		};
		
	// 		Swal.fire(mensaje);
	// 	}

	function eliminarProducto(click) {
		
		//SI QUISIERA ACCEDER DESDE "DATA-PROD" DESDE EL INNER-HTML 
		//let productoEliminado = click.target.dataset.prod

		let productoEliminado = Number(click.target.id)
		
		let indice = carrito.findIndex((click) => click.id === productoEliminado)
		
		carrito.splice (indice,1)	//ELIMINAME DEL PARAMETRO "INDICE" , UN SOLO ELEMENTO "1"

		//  reemplazo el carrito de localStorage
		localStorage.setItem("carrito", JSON.stringify(carrito));

		//imprimo el carrito adentro del modal
		imprimirCarrito();
		
	}


