import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@preferences';

export async function savePreferences(data) {

  try {

    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(data)
    );

  } catch (error) {

    console.log(error);
  }
}

export async function getPreferences() {

  try {

    const data = await AsyncStorage.getItem(STORAGE_KEY);

    return data ? JSON.parse(data) : [];

  } catch (error) {

    console.log(error);

    return [];
  }
}