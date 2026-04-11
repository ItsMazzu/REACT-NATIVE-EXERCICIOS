export function gerarNumero(min, max) {
  if (min === '' || max === '') {
    return { erro: 'Preencha os valores mínimo e máximo' };
  }

  const minNum = parseInt(min);
  const maxNum = parseInt(max);

  if (isNaN(minNum) || isNaN(maxNum)) {
    return { erro: 'Valores inválidos' };
  }

  if (minNum >= maxNum) {
    return { erro: 'O mínimo deve ser menor que o máximo' };
  }

  const numero = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

  return {
    numero,
  };
}