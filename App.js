import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState } from 'react';
import {
  Alert,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigation from './src/navigation';

function renderApp() {
  return (
    <SafeAreaProvider>
      <MainNavigation />
    </SafeAreaProvider>
  );
}

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  /**
* Load app resources
 */
  const loadAppResources = async () => {
    try {
      await SplashScreen.preventAutoHideAsync();
    } catch (e) {
      Alert.alert(
        'Something went wrong!',
        'There was an error loading the app, please restart the app or try again later.',
      );
      // Show error on devEnv to debug the issue.
      console.log('Error while loading resources: ', e);
    } finally {
      setAppIsReady(true);
      await SplashScreen.hideAsync();
    }
  };

  useEffect(() => {
    loadAppResources();
  }, []);

  return !appIsReady ? null : renderApp();
}
