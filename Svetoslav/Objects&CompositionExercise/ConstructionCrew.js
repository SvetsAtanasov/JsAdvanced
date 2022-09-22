function solve(worker) {
  const newWorker = { ...worker };
  const waterInMl = 0.1;

  if (newWorker.dizziness) {
    const waterIntake = waterInMl * newWorker.weight * newWorker.experience;
    newWorker.levelOfHydrated = waterIntake;
    newWorker.dizziness = false;
  }

  return newWorker;
}

const worker = solve({
  weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true,
});

console.log(worker);
