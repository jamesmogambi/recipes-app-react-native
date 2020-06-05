import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './src/navigations/AppNavigation';
import { createStore,applyMiddleware } from 'redux';
import reducers from './src/reducers/Index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAL-bsaalYUqt88eexFlEz_Zyt2TFju-OQ",
    authDomain: "menu-app-9a51d.firebaseapp.com",
    databaseURL: "https://menu-app-9a51d.firebaseio.com",
    projectId: "menu-app-9a51d",
    storageBucket: "menu-app-9a51d.appspot.com",
    messagingSenderId: "748330350280",
    appId: "1:748330350280:web:2cc6615e1c3d1f340bd7fd",
    measurementId: "G-TRXLNV353T"
  };

  firebase.initializeApp(firebaseConfig);

export default function App() {
 
const appStore = createStore(
  reducers,
  applyMiddleware(thunk)
);
  return (
     <Provider store={appStore}>
     <AppContainer />
     </Provider>
  );
}
