import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GameWorld from './components/GameWorld';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{textAlign: 'center'}}>
        <Text>________________________________________Viriphobia______________________________________</Text>
      </View>
      <GameWorld/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#fff'
  },
});
