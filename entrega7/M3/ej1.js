const INGRESOS_2022 = [
  1500, 2500, 84683, 135353, 1535, 4343354, 435453, 78351, 1878, 48483, 35483, 3843,
];
const EGRESOS_2022 = [
  1500, 2500, 1155, 1533, 5434, 5434543, 4543, 7816, 95634, 9433, 53133, 348133,
];

const sum = arr => arr.reduce((acc, curr) => acc + curr, 0);

const ingresoAnual = sum(INGRESOS_2022);
const egresoAnual = sum(EGRESOS_2022);

if (ingresoAnual > egresoAnual) {
  alert(
    `El ingreso anual fue de $${ingresoAnual} y el egreso anual fue de $${egresoAnual} dando una ganancia de $${
      ingresoAnual - egresoAnual}.
    `
  );
} else if (ingresoAnual < egresoAnual) {
  alert(
    `El ingreso anual fue de $${ingresoAnual} y el egreso anual fue de $${egresoAnual} dando una perdida de $${
      egresoAnual - ingresoAnual}.
    `
  );
} else {
  alert(
    `El ingreso anual fue de $${ingresoAnual} y el egreso anual fue de $${egresoAnual} dando una ganancia nula`
  );
}
