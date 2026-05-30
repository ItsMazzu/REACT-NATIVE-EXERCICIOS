import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles/global';

export default function GenericConverterScreen({ route }) {
  const { currencyName, rate, symbol, decimals } = route.params;
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);

  const handleConvert = () => {
    if (!inputValue || inputValue.trim() === '') {
      Alert.alert('Erro', 'Por favor, digite um valor em R$');
      return;
    }

    const numValue = parseFloat(inputValue);
    if (isNaN(numValue) || numValue < 0) {
      Alert.alert('Erro', 'Digite um valor numérico válido e positivo');
      return;
    }

    const convertedValue = (numValue / rate).toFixed(decimals);
    setResult(convertedValue);
  };

  return (
    <View style={styles.content}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{currencyName}</Text>
      </View>

      <View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Valor em R$</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o valor em R$"
            keyboardType="decimal-pad"
            value={inputValue}
            onChangeText={setInputValue}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleConvert}>
          <Text style={styles.buttonText}>Converter</Text>
        </TouchableOpacity>
      </View>

      <View>
        <View style={styles.divider} />
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>
            Valor em {symbol}
          </Text>
          <Text style={styles.resultValue}>
            {result ? `${symbol} ${result}` : `${symbol} 0.00`}
          </Text>
        </View>
      </View>
    </View>
  );
}
