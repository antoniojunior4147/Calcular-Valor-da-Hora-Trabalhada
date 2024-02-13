document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("calcular").addEventListener("click", function () {
    const salarioMensal = parseFloat(document.getElementById("salario").value);
    const horasPorSemana = parseFloat(document.getElementById("horas").value);

    if (!isNaN(salarioMensal) && !isNaN(horasPorSemana)) {
      const valorHora = calcularValorHora(salarioMensal, horasPorSemana);
      document.getElementById(
        "resultado"
      ).innerText = `O valor da hora do funcionário é: R$ ${valorHora.toFixed(
        2
      )}`;
    } else {
      document.getElementById("resultado").innerText =
        "Por favor, insira valores válidos.";
    }
  });
});

function calcularValorHora(salarioMensal, horasPorSemana) {
  const semanasPorMes = 4;

  const horasPorMes = horasPorSemana * semanasPorMes;

  const valorHora = salarioMensal / horasPorMes;

  return valorHora;
}
