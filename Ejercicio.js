function calcularPrecio(precioBase, descuento) {
    if (precioBase<=0||descuento<0||descuento>100) {
    console.log("Los valores ingresados son inválidos")
    }
    else if (descuento==0) {
        console.log(precioBase)
    } else {
        let precioFinal = precioBase * (descuento/100)
            console.log("El precio final con descuento es: " + precioFinal)
    }
}