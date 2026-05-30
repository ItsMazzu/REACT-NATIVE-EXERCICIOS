import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SafeViewContainer from './src/components/SafeViewContainer';
import GenericConverterScreen from './src/screens/GenericConverterScreen';

const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

export default function App() {
  // Estado para alternar entre App 18 (bottom) e App 19 (top)
  const [isBottomTab, setIsBottomTab] = useState(true);

  return (
    <SafeViewContainer>
      {/* Botão de controle para o desenvolvedor alternar os exercícios */}
      <View style={styles.switchContainer}>
        <TouchableOpacity 
          style={[styles.switchButton, isBottomTab ? styles.activeBtn : styles.inactiveBtn]} 
          onPress={() => setIsBottomTab(!isBottomTab)}
        >
          <Text style={styles.switchText}>
            {isBottomTab ? "Visualizando: App 18 (Bottom Tabs) ➡️ Mudar p/ Top" : "Visualizando: App 19 (Top Tabs) ➡️ Mudar p/ Bottom"}
          </Text>
        </TouchableOpacity>
      </View>

      <NavigationContainer>
        {isBottomTab ? (
          // RENDERIZAÇÃO DO APP 18 (BOTTOM TABS)
          <BottomTab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: '#dc2626',
              tabBarInactiveTintColor: '#666',
              tabBarStyle: { backgroundColor: '#fff', height: 60, paddingBottom: 8 },
            }}
          >
            <BottomTab.Screen 
              name="Dólar" 
              component={GenericConverterScreen} 
              initialParams={{ currencyName: 'Dólar', rate: 5.00, symbol: '$', decimals: 2 }}
            />
            <BottomTab.Screen 
              name="Euro" 
              component={GenericConverterScreen} 
              initialParams={{ currencyName: 'Euro', rate: 5.50, symbol: '€', decimals: 2 }}
            />
            <BottomTab.Screen 
              name="Bitcoin" 
              component={GenericConverterScreen} 
              initialParams={{ currencyName: 'Bitcoin', rate: 350000.00, symbol: 'BTC', decimals: 8 }}
            />
          </BottomTab.Navigator>
        ) : (
          // RENDERIZAÇÃO DO APP 19 (TOP TABS)
          <TopTab.Navigator
            screenOptions={{
              tabBarActiveTintColor: '#dc2626',
              tabBarInactiveTintColor: '#666',
              tabBarIndicatorStyle: { backgroundColor: '#dc2626' },
              tabBarStyle: { backgroundColor: '#fff', marginTop: 10 },
            }}
          >
            <TopTab.Screen 
              name="Dólar" 
              component={GenericConverterScreen} 
              initialParams={{ currencyName: 'Dólar', rate: 5.00, symbol: '$', decimals: 2 }}
            />
            <TopTab.Screen 
              name="Euro" 
              component={GenericConverterScreen} 
              initialParams={{ currencyName: 'Euro', rate: 5.50, symbol: '€', decimals: 2 }}
            />
            <TopTab.Screen 
              name="Bitcoin" 
              component={GenericConverterScreen} 
              initialParams={{ currencyName: 'Bitcoin', rate: 350000.00, symbol: 'BTC', decimals: 8 }}
            />
          </TopTab.Navigator>
        )}
      </NavigationContainer>
    </SafeViewContainer>
  );
}

const styles = StyleSheet.create({
  switchContainer: {
    padding: 10,
    backgroundColor: '#f3f4f6',
    borderBottomWidth: 1,
    borderColor: '#e5e7eb',
    alignItems: 'center',
  },
  switchButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
  },
  activeBtn: {
    backgroundColor: '#1e3a8a',
  },
  inactiveBtn: {
    backgroundColor: '#15803d',
  },
  switchText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
});