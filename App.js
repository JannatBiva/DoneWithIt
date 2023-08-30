import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './routes/Navigation'; // Import your navigation stack
import { AppRegistry } from 'react-native'; // Import AppRegistry
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <NavigationStack />
      )}
    </NavigationContainer>
  );
}
