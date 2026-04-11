export function calcularIMC(peso, altura) {
  if (!peso || !altura) {
    return { erro: 'Preencha todos os campos' };
  }

  const p = parseFloat(peso.replace(',', '.'));
  const a = parseFloat(altura.replace(',', '.'));

  if (isNaN(p) || isNaN(a) || a <= 0) {
    return { erro: 'Valores inválidos' };
  }

  const imc = p / (a * a);

  let classificacao = '';
  let cor = '';

  if (imc < 18.5) {
    classificacao = 'Abaixo do peso';
    cor = '#3498db';
  } else if (imc < 25) {
    classificacao = 'Peso normal';
    cor = '#2ecc71';
  } else if (imc < 30) {
    classificacao = 'Sobrepeso';
    cor = '#f1c40f';
  } else if (imc < 35) {
    classificacao = 'Obesidade grau I';
    cor = '#e67e22';
  } else if (imc < 40) {
    classificacao = 'Obesidade grau II';
    cor = '#e74c3c';
  } else {
    classificacao = 'Obesidade grau III';
    cor = '#8e44ad';
  }

  return {
    valor: imc.toFixed(2),
    classificacao,
    cor,
  };
}