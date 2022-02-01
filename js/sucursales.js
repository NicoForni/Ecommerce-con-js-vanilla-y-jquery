// carga todos las sucursales del archivo "sucursalesJSON"
$(() => {
	traerSucursales();	
});
 
 
 traerSucursales = () => {
    $.get("sucursales.json", (respuesta,estado) => {
        if (estado != "success") return Swal.fire("Error obteniendo datos");

        	// solo si el estado no contiene errores
         	// guardo los productos en variable global, en este caso "sucursales"
         	// llamo a la funcion para imprimirlos
    
        	sucursales = respuesta.sucursales;
        	imprimirSucursales(true);
            
    });
}


function imprimirSucursales(animacion) {
    $("#contenedor-sucursales").empty();
    let delay = 50;
	// compruebo valor de animacion para asignar usando operador ternario
    // si animacion es true que sea de 800(se vera un efecto), en caso contrario sera de 0, o sea que no se verá el efecto
	let fade = animacion ? 1600 : 0;

    sucursales.forEach((s) => {
        delay = animacion ? delay + 500 : 0;

        $("#contenedor-sucursales").append(
            $(`<div class="fondo-sucursales">
                <img class="ajuste-imagen-sucursal" src="./assets/${s.imagen}.jpg"><div class="ciudad">${s.nombre}</div>
                </div>`)

                .hide()
				.delay(delay)
				.fadeIn(fade)
        )
          
    });
};
