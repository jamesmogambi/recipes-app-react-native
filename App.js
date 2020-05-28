import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './src/navigations/AppNavigation';
import { createStore} from 'redux';
import reducers from './src/reducers/Index';
import { Provider } from 'react-redux';

export default function App() {
  return (
     <Provider store={createStore(reducers)}>
     <AppContainer />
     </Provider>
  );
}
