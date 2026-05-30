import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const vagasData = [
  {
    id: '1',
    titulo: 'Desenvolvedor Backend',
    empresa: 'Tech Solutions',
    salario: 'R$ 6.000,00',
    localizacao: 'São Paulo, SP',
    descricao: 'Procuramos desenvolvedor backend experiente com conhecimentos em Node.js, Python e AWS.',
    requisitos: 'Ensino Superior em Computação, 3+ anos de experiência, conhecimento em APIs REST e bancos de dados',
    contato: '(11) 3000-1111',
  },
  {
    id: '2',
    titulo: 'Desenvolvedor Frontend',
    empresa: 'Web Dynamics',
    salario: 'R$ 5.500,00',
    localizacao: 'Rio de Janeiro, RJ',
    descricao: 'Buscamos desenvolvedor frontend com expertise em React, Vue ou Angular.',
    requisitos: 'JavaScript, HTML/CSS, 2+ anos de experiência, noções de UX/UI',
    contato: '(21) 3000-2222',
  },
  {
    id: '3',
    titulo: 'DevOps Engineer',
    empresa: 'Cloud Systems',
    salario: 'R$ 7.500,00',
    localizacao: 'Belo Horizonte, MG',
    descricao: 'Profissional de DevOps com experiência em infraestrutura em nuvem e CI/CD.',
    requisitos: 'Docker, Kubernetes, Jenkins, AWS/Azure, 4+ anos de experiência',
    contato: '(31) 3000-3333',
  },
  {
    id: '4',
    titulo: 'Analista de Dados',
    empresa: 'Data Insights',
    salario: 'R$ 5.800,00',
    localizacao: 'Curitiba, PR',
    descricao: 'Analista de dados para trabalhar com big data e machine learning.',
    requisitos: 'Python, SQL, R, conhecimento em análise estatística, 2+ anos',
    contato: '(41) 3000-4444',
  },
  {
    id: '5',
    titulo: 'Arquiteto de Sistemas',
    empresa: 'Enterprise Solutions',
    salario: 'R$ 9.000,00',
    localizacao: 'São Paulo, SP',
    descricao: 'Responsável por projetar arquitetura de sistemas escaláveis e de alta disponibilidade.',
    requisitos: 'Engenharia de Software, 8+ anos de experiência, liderança técnica',
    contato: '(11) 3000-5555',
  },
];

function TelaVagas({ navigation }) {
  const renderVaga = ({ item }) => (
    <TouchableOpacity
      style={styles.cardVaga}
      onPress={() => navigation.navigate('DetalhesVaga', { vaga: item })}
    >
      <Text style={styles.tituloVaga}>{item.titulo}</Text>
      <Text style={styles.empresa}>{item.empresa}</Text>
      <Text style={styles.localizacao}>{item.localizacao}</Text>
      <Text style={styles.salario}>{item.salario}</Text>
      <TouchableOpacity style={styles.botaoSaibaMais}>
        <Text style={styles.textoSaibaMais}>Saiba mais</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Vagas de TI</Text>
      <FlatList
        data={vagasData}
        renderItem={renderVaga}
        keyExtractor={(item) => item.id}
        scrollEnabled={true}
        contentContainerStyle={styles.listaVagas}
      />
    </View>
  );
}

function TelaDetalhesVaga({ route }) {
  const { vaga } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerVaga}>
        <Text style={styles.tituloBig}>{vaga.titulo}</Text>
        <Text style={styles.empresaBig}>{vaga.empresa}</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoBox}>
          <Text style={styles.labelInfo}>Localização:</Text>
          <Text style={styles.textoInfo}>{vaga.localizacao}</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.labelInfo}>Salário:</Text>
          <Text style={styles.salarioBig}>{vaga.salario}</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.labelInfo}>Descrição da Vaga:</Text>
          <Text style={styles.textoInfo}>{vaga.descricao}</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.labelInfo}>Requisitos:</Text>
          <Text style={styles.textoInfo}>{vaga.requisitos}</Text>
        </View>

        <View style={styles.infoBox}>
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

export default function JobListingsApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Vagas"
          component={TelaVagas}
          options={{ title: 'App 14 - Vagas de Emprego em TI' }}
        />
        <Stack.Screen
          name="DetalhesVaga"
          component={TelaDetalhesVaga}
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
    textAlign: 'center',
  },
  listaVagas: {
    padding: 15,
    paddingTop: 0,
  },
  cardVaga: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: '#3498db',
  },
  tituloVaga: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  empresa: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 5,
    fontWeight: '600',
  },
  localizacao: {
    fontSize: 13,
    color: '#95a5a6',
    marginBottom: 5,
  },
  salario: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#27ae60',
    marginBottom: 10,
  },
  botaoSaibaMais: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  textoSaibaMais: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 13,
  },
  headerVaga: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
  },
  tituloBig: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  empresaBig: {
    fontSize: 16,
    color: '#7f8c8d',
    fontWeight: '600',
  },
  infoContainer: {
    padding: 15,
  },
  infoBox: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
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
  salarioBig: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#27ae60',
  },
  botaoCandidatar: {
    backgroundColor: '#e74c3c',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  textoCandidatar: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
