const INGRESOS_2022 = [
  1500, 2500, 84683, 135353, 1535, 4343354, 435453, 78351, 1878, 48483, 35483, 3843,
];
const EGRESOS_2022 = [
  1500, 2500, 1155, 1533, 5434, 5434543, 4543, 7816, 95634, 9433, 53133, 348133,
];

function flujo(ingresos, egresos) {
  const sum = (arr) => arr.reduce((acc, curr) => acc + curr, 0);

  const ingresoAnual = sum(ingresos);
  const egresoAnual = sum(egresos);

  if (ingresoAnual > egresoAnual) {
    return 1;
  } else if (ingresoAnual < egresoAnual) {
    return -1;
  } else {
    return 0;
  }
}

flujo(INGRESOS_2022, EGRESOS_2022);
