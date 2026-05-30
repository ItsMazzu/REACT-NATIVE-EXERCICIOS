import React, {
  useEffect,
  useState,
} from 'react';

import {
  View,
  Text,
  Alert,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import styles from '../styles/global-styles';

import CustomInput from '../components/custom-inputs';
import CustomButton from '../components/custom-button';

import {
  savePreferences,
  getPreferences,
} from '../storage/storage';

export default function Preferences() {

  const [name, setName] = useState('');
  const [theme, setTheme] = useState('');

  const [preferences, setPreferences] =
    useState([]);

  useEffect(() => {

    loadPreferences();

  }, []);

  async function loadPreferences() {

    const data = await getPreferences();

    setPreferences(data || []);
  }

  async function handleSave() {

    if (!name || !theme) {

      Alert.alert(
        'Erro',
        'Preencha todos os campos'
      );

      return;
    }

    const newPreference = {
      id: Date.now().toString(),
      name,
      theme,
    };

   const updatedPreferences = [
  ...(Array.isArray(preferences)
    ? preferences
    : []),
  newPreference,
];

    setPreferences(updatedPreferences);
   
    await savePreferences(updatedPreferences);

    setName('');
    setTheme('');

    Alert.alert(
      'Sucesso',
      'Preferência salva'
    );
  }

  async function handleDelete(id) {

    const updatedPreferences =
      preferences.filter(
        item => item.id !== id
      );

    setPreferences(updatedPreferences);

    await savePreferences(updatedPreferences);
  }

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Preferências
      </Text>

      <CustomInput
        placeholder="Digite seu nome"
        value={name}
        onChangeText={setName}
      />

      <CustomInput
        placeholder="Tema favorito"
        value={theme}
        onChangeText={setTheme}
      />

      <CustomButton
        title="Salvar Preferência"
        onPress={handleSave}
      />

      <FlatList
        style={{ marginTop: 20 }}
        data={preferences}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            Nenhuma preferência salva
          </Text>
        }
        renderItem={({ item }) => (

          <View style={styles.card}>

            <Text style={styles.resultText}>
              Nome: {item.name}
            </Text>

            <Text style={styles.resultText}>
              Tema: {item.theme}
            </Text>

            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() =>
                handleDelete(item.id)
              }
            >

              <Text style={styles.deleteButtonText}>
                Excluir
              </Text>

            </TouchableOpacity>

          </View>

        )}
      />

    </View>
  );
}