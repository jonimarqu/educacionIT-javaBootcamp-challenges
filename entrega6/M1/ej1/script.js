(() => {
  let precioVenta = 0;
  do {
    precioVenta = prompt("Ingrese el Precio de Venta:");
    if (precioVenta === null) {
      alert("Exiting");
      return;
    }
    if (!(precioVenta > 0)) {
      alert("El Precio de Venta debe ser un numero mayor a 0.");
    }
  } while (!(precioVenta > 0));

  let costoFijo = 0;
  do {
    costoFijo = prompt("Ingrese el monto de Costo Fijo:");
    if (costoFijo === null) {
      alert("Exiting");
      return;
    }
    if (!(costoFijo > 0)) {
      alert("El Costo Fijo debe ser un numero mayor a 0.");
    }
  } while (!(costoFijo > 0));

  let costoVariable = 0;
  do {
    costoVariable = prompt("Ingrese el monto de Costo Variable:");
    if (costoVariable === null) {
      alert("Exiting");
      return;
    }
    if (!(costoVariable > 0)) {
      alert("El Costo Fijo debe ser un numero mayor a 0.");
    }
  } while (!(costoVariable > 0));

  alert("El Punto de quilibrio es: " + costoFijo / (precioVenta - costoVariable));
})();
