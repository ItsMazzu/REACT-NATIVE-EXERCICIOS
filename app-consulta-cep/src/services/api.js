export async function buscarCep(cep) {

  try {
    const response = await fetch(
      `https://viacep.com.br/ws/${cep}/json/`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}