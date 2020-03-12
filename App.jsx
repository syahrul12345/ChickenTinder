import React from 'react';
import { Text, View, Button } from 'react-native';

// Redux modules
import { Provider } from 'react-redux';
import { store } from './redux-modules';

export default function App() {
  return (
    <Provider store={store}>
      <View style={{ paddingTop: 100 }}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button
          title="Click me!"
        />
      </View>
    </Provider>
  );
}
