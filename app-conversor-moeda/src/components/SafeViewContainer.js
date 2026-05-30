import React from 'react';
import { SafeAreaView, StatusBar, Platform } from 'react-native';

const SafeViewContainer = ({ children }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: '#f9fafb',
      }}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />
      {children}
    </SafeAreaView>
  );
};

export default SafeViewContainer;
