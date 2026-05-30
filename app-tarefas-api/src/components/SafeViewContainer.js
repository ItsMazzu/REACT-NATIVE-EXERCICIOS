import React from 'react';
import { SafeAreaView } from 'react-native';

export const SafeViewContainer = ({ children, style }) => {
  return (
    <SafeAreaView style={[{ flex: 1, backgroundColor: '#fff' }, style]}>
      {children}
    </SafeAreaView>
  );
};
