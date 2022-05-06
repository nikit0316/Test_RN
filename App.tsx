import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";import LinkingConfiguration from "../Test_RN/navigation/LinkingConfiguration";


import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer
      linking={LinkingConfiguration}
      theme={DarkTheme}
      >
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </NavigationContainer>
    );
  }
}
