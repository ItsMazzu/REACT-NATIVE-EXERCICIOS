import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeViewContainer } from './src/components/SafeViewContainer';
import { TaskListScreen } from './src/screens/TaskListScreen';

export default function App() {
  return (
    <SafeViewContainer>
      <TaskListScreen />
      <StatusBar style="auto" />
    </SafeViewContainer>
  );
}
