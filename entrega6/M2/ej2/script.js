const ADMIN_USER = "admin";
const ADMIN_PASS = "1234";

(() => {
  let logged = false;
  do {
    let user = "";
    let pass = "";

    do {
      user = prompt("Ingrese su usuario");
      if (user === null) {
        alert("Exiting");
        return;
      }
      if (user === "") {
        alert('El usuario debe contener al menos un caracter.')
      }
    } while (user === "");

    pass = prompt("Ingrese su contraseña");
    if (pass === null) {
      alert("Exiting");
      return;
    }

    if (user === ADMIN_USER && pass === ADMIN_PASS) {
      alert(`Bienvenido, ${user}.`);
    } else {
      alert("Usuario o contraseña incorrecta. Intente nuevamente.");
    }
  } while (!logged);
})();
