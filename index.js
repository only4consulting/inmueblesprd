import React from 'react';
import { AppRegistry, YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import { configureStore } from './src/store/configureStore';
import { setTabLabels } from './src/actions/dashboardActions';
import { name as appName } from './app.json';
import App from './App';

//Ignorar el warning de isMounted
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])
YellowBox.ignoreWarnings(['ListView is deprecated']);

// Crear store
const store = configureStore();

// Obtener labels de las pestañas
store.dispatch(setTabLabels());

//Create a Component
const AppContainer = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppContainer);
