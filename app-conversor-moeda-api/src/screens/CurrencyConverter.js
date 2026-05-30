import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { fetchExchangeRate } from '../services/api';

const currencies = [
  { label: 'Real (BRL)', value: 'BRL' },
  { label: 'Dólar (USD)', value: 'USD' },
  { label: 'Euro (EUR)', value: 'EUR' },
  { label: 'Bitcoin (BTC)', value: 'BTC' },
];

const CurrencyConverter = () => {
  const [inputValue, setInputValue] = useState('');
  const [fromCurrency, setFromCurrency] = useState('BRL');
  const [toCurrency, setToCurrency] = useState('USD');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const isNumeric = (value) => {
    return value === '' || /^\d+\.?\d*$/.test(value);
  };

  const formatResult = (value, currency) => {
    if (currency === 'BTC') {
      return parseFloat(value).toFixed(8);
    }
    return parseFloat(value).toFixed(2);
  };

  const handleConvert = async () => {
    setError('');
    setResult('');

    const numericValue = parseFloat(inputValue);

    if (!inputValue || isNaN(numericValue) || numericValue <= 0) {
      setResult('Insira um valor numérico válido');
      return;
    }

    setLoading(true);
    try {
      const exchangeRate = await fetchExchangeRate(fromCurrency, toCurrency);
      const convertedValue = numericValue * exchangeRate;
      const formatted = formatResult(convertedValue, toCurrency);
      setResult(
        `${inputValue} ${fromCurrency} = ${formatted} ${toCurrency}`
      );
    } catch (err) {
      setError('Não foi possível obter a taxa de câmbio. Tente novamente mais tarde.');
      setResult('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Conversor de Moedas</Text>
        <View style={styles.separator} />
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.label}>Valor:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o valor"
            value={inputValue}
            onChangeText={(text) => {
              if (isNumeric(text)) {
                setInputValue(text);
              }
            }}
            keyboardType="decimal-pad"
            editable={!loading}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>De:</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={fromCurrency}
              onValueChange={(itemValue) => setFromCurrency(itemValue)}
              enabled={!loading}
            >
              {currencies.map((currency) => (
                <Picker.Item
                  key={currency.value}
                  label={currency.label}
                  value={currency.value}
                />
              ))}
            </Picker>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Para:</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={toCurrency}
              onValueChange={(itemValue) => setToCurrency(itemValue)}
              enabled={!loading}
            >
              {currencies.map((currency) => (
                <Picker.Item
                  key={currency.value}
                  label={currency.label}
                  value={currency.value}
                />
              ))}
            </Picker>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.button, loading && styles.buttonDisabled]}
          onPress={handleConvert}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" size="small" />
          ) : (
            <Text style={styles.buttonText}>Converter</Text>
          )}
        </TouchableOpacity>

        {error && <Text style={styles.errorText}>{error}</Text>}

        {result && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>{result}</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
  },
  separator: {
    height: 2,
    backgroundColor: '#333',
    marginTop: 16,
  },
  content: {
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#fff',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  resultContainer: {
    borderWidth: 2,
    borderColor: '#2563eb',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: '#eff6ff',
    marginTop: 20,
  },
  resultText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e40af',
    textAlign: 'center',
  },
  errorText: {
    fontSize: 14,
    color: '#dc2626',
    textAlign: 'center',
    marginTop: 12,
  },
});

export default CurrencyConverter;
