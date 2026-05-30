import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function TelaAbertura({ navigation }) {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('M');
  const [escolaridade, setEscolaridade] = useState('Fundamental');
  const [limite, setLimite] = useState(100);
  const [brasiliero, setBrasiliero] = useState(true);

  const handleConfirmar = () => {
    if (!nome || !idade) {
      alert('Preencha todos os campos!');
      return;
    }

    const dados = {
      nome,
      idade,
      sexo,
      escolaridade,
      limite,
      brasiliero,
    };

    navigation.navigate('Dados', { dados });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Abertura de Conta</Text>

      <View style={styles.section}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Idade:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua idade"
          keyboardType="numeric"
          value={idade}
          onChangeText={setIdade}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Sexo:</Text>
        <Picker selectedValue={sexo} style={styles.picker} onValueChange={setSexo}>
          <Picker.Item label="Masculino (M)" value="M" />
          <Picker.Item label="Feminino (F)" value="F" />
          <Picker.Item label="Outro (O)" value="O" />
        </Picker>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Escolaridade:</Text>
        <Picker
          selectedValue={escolaridade}
          style={styles.picker}
          onValueChange={setEscolaridade}
        >
          <Picker.Item label="Fundamental" value="Fundamental" />
          <Picker.Item label="Médio" value="Médio" />
          <Picker.Item label="Superior" value="Superior" />
          <Picker.Item label="Pós-graduação" value="Pós-graduação" />
        </Picker>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Limite: R$ {limite}</Text>
        <TextInput
          style={styles.input}
          placeholder="Define o limite"
          keyboardType="numeric"
          value={String(limite)}
          onChangeText={(val) => setLimite(Number(val) || 100)}
        />
      </View>

      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => setBrasiliero(!brasiliero)}
        >
          <Text style={styles.checkboxText}>
            {brasiliero ? '✓' : '  '} Brasileiro
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.botao} onPress={handleConfirmar}>
        <Text style={styles.textoBotao}>Confirmar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function TelaDados({ route }) {
  const { dados } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>← Dados Informados</Text>

      <View style={styles.displaySection}>
        <Text style={styles.displayLabel}>Nome:</Text>
        <Text style={styles.displayValue}>{dados.nome}</Text>
      </View>

      <View style={styles.displaySection}>
        <Text style={styles.displayLabel}>Idade:</Text>
        <Text style={styles.displayValue}>{dados.idade}</Text>
      </View>

      <View style={styles.displaySection}>
        <Text style={styles.displayLabel}>Sexo:</Text>
        <Text style={styles.displayValue}>{dados.sexo}</Text>
      </View>

      <View style={styles.displaySection}>
        <Text style={styles.displayLabel}>Escolaridade:</Text>
        <Text style={styles.displayValue}>{dados.escolaridade}</Text>
      </View>

      <View style={styles.displaySection}>
        <Text style={styles.displayLabel}>Limite:</Text>
        <Text style={styles.displayValue}>R$ {dados.limite}</Text>
      </View>

      <View style={styles.displaySection}>
        <Text style={styles.displayLabel}>Brasileiro:</Text>
        <Text style={styles.displayValue}>{dados.brasiliero ? 'Sim' : 'Não'}</Text>
      </View>
    </ScrollView>
  );
}

export default function BankAccountApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Abertura"
          component={TelaAbertura}
          options={{ title: 'App 12 - Abertura de Conta' }}
        />
        <Stack.Screen
          name="Dados"
          component={TelaDados}
          options={{ title: 'Dados Informados' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e74c3c',
    marginBottom: 20,
  },
  section: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    fontSize: 14,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  checkboxContainer: {
    marginVertical: 15,
  },
  checkbox: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  checkboxText: {
    fontSize: 14,
    fontWeight: '600',
  },
  botao: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  displaySection: {
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 10,
    borderRadius: 5,
    borderLeftWidth: 4,
    borderLeftColor: '#3498db',
  },
  displayLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#7f8c8d',
    marginBottom: 4,
  },
  displayValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
});
