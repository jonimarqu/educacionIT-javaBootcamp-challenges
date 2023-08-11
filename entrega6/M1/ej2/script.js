(() => {
  let ingresototal = 0;
  do {
    ingresototal = prompt("Indique su Ingreso Total:");
    if (ingresototal === null) {
      alert("Exiting");
      return;
    }
    if (!(ingresototal > 0)) {
      alert("El Ingreso Total debe ser un numero mayor a 0.");
    }
  } while (!(ingresototal > 0));

  // modelo de presupuesto tradicional 50-30-20
  const GASTOS_NECESARIOS = 0.5;
  const GASTOS_OPCIONALES = 0.3;
  const AHORRO_INVERSION = 0.2;

  alert(
    `Su presupuesto es: 
    $${(ingresototal * GASTOS_NECESARIOS).toFixed(2)} para Gastos Necesarios, 
    $${(ingresototal * GASTOS_OPCIONALES).toFixed(2)} para Gastos Opcionales y 
    $${(ingresototal * AHORRO_INVERSION).toFixed(2)} para Ahorro e Inversion.`
  );
})();
