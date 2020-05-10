import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GameWorld from './components/GameWorld';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{justifyContent: 'center'}}>Chess Board</Text>
      <GameWorld/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#777'
  },
});
