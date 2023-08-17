(() => {
  let age = 0;
  do {
    age = prompt("Ingrese su edad");
    if (age === null) {
      alert("Exiting");
      return;
    }
    if (!(age > 0 && age < 120)) {
      alert("Ingrese su edad correctamente, en numeros enteros.");
    }
  } while (!(age > 0 && age < 120));

  if (age >= 18) {
    alert("Puede ingresar, bienvenido!");
  } else {
    alert("No puede ingresar, no tiene la edad suficiente");
  }
})();
