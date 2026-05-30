import React from 'react';
import SafeViewContainer from './src/components/SafeViewContainer';
import CurrencyConverter from './src/screens/CurrencyConverter';

export default function App() {
  return (
    <SafeViewContainer>
      <CurrencyConverter />
    </SafeViewContainer>
  );
}
