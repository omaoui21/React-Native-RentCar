import { StatusBar } from 'expo-status-bar';
import {} from 'react-native';
import { NavigatotMain } from './navigations/TabNavigator';
import {NavigationContainer} from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
      <NavigatotMain/>
    </NavigationContainer>
  );
}


