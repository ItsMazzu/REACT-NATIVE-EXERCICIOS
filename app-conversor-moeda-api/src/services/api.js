const API_BASE_URL = 'https://economia.awesomeapi.com.br/json/last';

export const fetchExchangeRate = async (fromCurrency, toCurrency) => {
  try {
    const url = `${API_BASE_URL}/${fromCurrency}-${toCurrency}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    if (!data || !data[`${fromCurrency}${toCurrency}`]) {
      throw new Error('Invalid response format');
    }

    const exchangeRate = parseFloat(data[`${fromCurrency}${toCurrency}`].ask);

    if (isNaN(exchangeRate)) {
      throw new Error('Invalid exchange rate value');
    }

    return exchangeRate;
  } catch (error) {
    throw new Error(`Failed to fetch exchange rate: ${error.message}`);
  }
};
