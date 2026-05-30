import React from 'react';
import { TextInput } from 'react-native';
import styles from '../styles/global-styles';

export default function CustomInput(props) {

  return (
    <TextInput
      style={styles.input}
      {...props}
    />
  );
}