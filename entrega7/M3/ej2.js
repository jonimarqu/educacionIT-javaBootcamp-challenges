const PLANS = [
  [150000, 30, 0.15],
  [300000, 180, 0.1],
  [485000, 60, 0.23],
];

const DETAILED_PLANS = PLANS.map(
  (plan) => plan.concat(
    plan.reduce(
      (acc, curr) => acc * curr, 1
    ) / 100
  )
);

console.log(DETAILED_PLANS);
