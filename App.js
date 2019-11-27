import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import AppNavigation from './AppNavigation';
import ListReducer from './Redux/ListReducer'
import RootReducer from './RootReducer';

const store = createStore(RootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}


