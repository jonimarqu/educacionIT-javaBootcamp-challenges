let precioVenta = 0;
do {
  precioVenta = Number(prompt('Ingrese el Precio de Venta:'));
  if (!(precioVenta > 0)) {
    alert('El Precio de Venta debe ser un numero mayor a 0.')
  }
} while (!(precioVenta > 0));

let costosFijos = 0;
costosFijosNumber(prompt('Ingrese el monto de Costos Fijos:'));

let costosVariables = Number(prompt('Ingrese el monto de Costos Variables:'));

alert('El Punto de quilibrio es: ' + (costosFijos / (precioVenta-costosVariables)));