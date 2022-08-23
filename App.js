import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GameWorld from './components/GameWorld';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import scoreReducer from './reducers/ScoreReducer';
import ScoreBoard from './components/ScoreBoard';
import ErrorBoundary from './components/ErrorBoundary';


export default function App() {
  const store = createStore(scoreReducer);
  return (
        <Provider store={store}>
  <ErrorBoundary>

    <View style={styles.container}>
      <View style={{textAlign: 'center'}}>
        <Text>________________Viri Attack_________________</Text>
      </View>
      <GameWorld/>
      <ScoreBoard/>
    </View>
    </ErrorBoundary>
        </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#fff'
  },
});
