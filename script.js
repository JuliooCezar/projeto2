function jogoNumeroSecreto() {
  const numeroSecreto = Math.floor(Math.random() * 10) + 1;
  let tentativas = 0;
  let chute = null;

  while (chute !== numeroSecreto) {
    const entrada = prompt("🎯 Tente adivinhar o número secreto entre 1 e 10:");

    if (entrada === null) {
      alert("🚫 Jogo cancelado.");
      return;
    }

    chute = parseInt(entrada);

    if (isNaN(chute)) {
      alert("⚠️ Por favor, digite um número válido.");
      continue;
    }

    tentativas++;

    if (chute < numeroSecreto) {
      alert("🔼 O número secreto é maior!");
    } else if (chute > numeroSecreto) {
      alert("🔽 O número secreto é menor!");
    } else {
      alert(`🎉 Parabéns! Você acertou em ${tentativas} tentativa(s)!`);
    }
  }
}

function jogoCalculoMedia() {
  const quantidade = parseInt(prompt("📊 Quantos números você quer usar para calcular a média?"));

  if (isNaN(quantidade) || quantidade <= 0) {
    alert("⚠️ Digite uma quantidade válida de números.");
    return;
  }

  let soma = 0;

  for (let i = 1; i <= quantidade; i++) {
    const numero = parseFloat(prompt(`Digite o ${i}º número:`));

    if (isNaN(numero)) {
      alert("⚠️ Valor inválido. Tente novamente.");
      i--; // repete a iteração
      continue;
    }

    soma += numero;
  }

  const media = soma / quantidade;
  alert(`✅ A média dos números é: ${media.toFixed(2)}`);
}

function mostrarJogo() {
  const container = document.getElementById("inputContainer");
  if (container) container.style.display = "block";
}

function somaNumeros() {
  const num1 = parseFloat(document.getElementById("numero1").value);
  const num2 = parseFloat(document.getElementById("numero2").value);
  const resultadoEl = document.getElementById("resultado");

  if (isNaN(num1) || isNaN(num2)) {
    resultadoEl.innerText = "❗ Digite dois números válidos!";
    resultadoEl.style.display = "block";
    return;
  }

  const resultado = num1 + num2;
  resultadoEl.innerText = `🧮 A soma de ${num1} + ${num2} é: ${resultado}`;
  resultadoEl.style.display = "block";
}
