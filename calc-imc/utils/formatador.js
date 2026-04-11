export function formatarNumero(valor) {
  // remove tudo que não é número ou separador
  let texto = valor.replace(/[^0-9.,]/g, '');

  // impede mais de um separador
  const partes = texto.split(/[.,]/);

  if (partes.length > 2) {
    texto = partes[0] + '.' + partes.slice(1).join('');
  }

  return texto;
}