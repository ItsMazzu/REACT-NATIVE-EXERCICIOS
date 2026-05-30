import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const vagasData = [
  {
    id: '1',
    titulo: 'Desenvolvedor Backend',
    salario: 'R$ 5.000,00',
    descricao: 'Procuramos desenvolvedor backend experiente em Node.js e Python para integrar nosso time.',
    contato: '(11) 98765-4321',
  },
  {
    id: '2',
    titulo: 'Engenheiro de Dados',
    salario: 'R$ 6.500,00',
    descricao: 'Engenheiro de dados para trabalhar com big data, SQL e arquitetura de dados.',
    contato: '(11) 98765-4322',
  },
  {
    id: '3',
    titulo: 'Desenvolvedor Frontend',
    salario: 'R$ 4.800,00',
    descricao: 'Desenvolvedor frontend com expertise em React, TypeScript e design responsivo.',
    contato: '(11) 98765-4323',
  },
  {
    id: '4',
    titulo: 'DevOps Engineer',
    salario: 'R$ 7.000,00',
    descricao: 'Profissional DevOps para gerenciar infraestrutura em nuvem, Docker e Kubernetes.',
    contato: '(11) 98765-4324',
  },
  {
    id: '5',
    titulo: 'QA Automação',
    salario: 'R$ 4.500,00',
    descricao: 'QA especializado em automação de testes com Selenium, Cypress ou similar.',
    contato: '(11) 98765-4325',
  },
  {
    id: '6',
    titulo: 'Arquiteto de Sistemas',
    salario: 'R$ 8.500,00',
    descricao: 'Arquiteto responsável por projetar soluções escaláveis e de alta performance.',
    contato: '(11) 98765-4326',
  },
];

function TelaVagas({ navigation }) {
  const renderVaga = ({ item }) => (
    <View style={styles.cardVaga}>
      <Text style={styles.tituloVaga}>{item.titulo}</Text>
      <Text style={styles.salarioVaga}>{item.salario}</Text>
      <Text style={styles.descricaoPrevia}>{item.descricao.substring(0, 60)}...</Text>
      <TouchableOpacity
        style={styles.botaoSaibaMais}
        onPress={() => navigation.navigate('Detalhes', { vaga: item })}
      >
        <Text style={styles.textoSaibaMais}>Saiba mais</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Vagas</Text>
      <FlatList
        data={vagasData}
        renderItem={renderVaga}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listaVagas}
        scrollEnabled={true}
      />
    </View>
  );
}

function TelaDetalhes({ route }) {
  const { vaga } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.detalhesContainer}>
        <Text style={styles.tituloBig}>{vaga.titulo}</Text>
        <Text style={styles.salarioBig}>{vaga.salario}</Text>

        <View style={styles.secaoInfo}>
          <Text style={styles.labelInfo}>Descrição:</Text>
          <Text style={styles.textoInfo}>{vaga.descricao}</Text>
        </View>

        <View style={styles.secaoInfo}>
          <Text style={styles.labelInfo}>Contato:</Text>
          <Text style={styles.textoInfo}>{vaga.contato}</Text>
        </View>

        <TouchableOpacity style={styles.botaoCandidatar}>
          <Text style={styles.textoCandidatar}>Candidatar-se</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default function JobVacanciesApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Vagas"
          component={TelaVagas}
          options={{ title: 'App 15 - Vagas de TI' }}
        />
        <Stack.Screen
          name="Detalhes"
          component={TelaDetalhes}
          options={{ title: 'Detalhes da Vaga' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e74c3c',
    padding: 15,
    paddingTop: 20,
    textAlign: 'center',
  },
  listaVagas: {
    padding: 15,
    paddingTop: 10,
  },
  cardVaga: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#3498db',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  tituloVaga: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  salarioVaga: {
    fontSize: 14,
    fontWeight: '600',
    color: '#27ae60',
    marginBottom: 8,
  },
  descricaoPrevia: {
    fontSize: 13,
    color: '#7f8c8d',
    marginBottom: 12,
    lineHeight: 18,
  },
  botaoSaibaMais: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  textoSaibaMais: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 13,
  },
  detalhesContainer: {
    padding: 20,
  },
  tituloBig: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  salarioBig: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#27ae60',
    marginBottom: 20,
  },
  secaoInfo: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  labelInfo: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#34495e',
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  textoInfo: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  botaoCandidatar: {
    backgroundColor: '#e74c3c',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  textoCandidatar: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
