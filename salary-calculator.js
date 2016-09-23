var salaryCalculator = (function() {
  var baseSalaries = {
    mechanic: 900,
    developer: 1400,
    doctor: 1300,
    professor: 1500
  };
  function calculateSalary(profession) {
    return baseSalaries[profession] - baseSalaries[profession]*30/100;
  }
  return { calculateSalary: calculateSalary }; 
})();

console.log(salaryCalculator.calculateSalary('doctor'));

