import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Home from './src/views/Home';

const App = () => {
  return (
    <SafeAreaView style={styles.areaView}>
      <Home />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  areaView: { flex: 1 },
});

export default App;
