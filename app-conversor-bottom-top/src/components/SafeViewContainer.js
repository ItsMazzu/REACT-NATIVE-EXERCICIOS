import React from 'react';
import { SafeAreaView } from 'react-native';
import styles from '../styles/global';

export default function SafeViewContainer({ children }) {
  return (
    <SafeAreaView style={styles.container}>
      {children}
    </SafeAreaView>
  );
}
