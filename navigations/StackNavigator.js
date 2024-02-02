import {createStackNavigator} from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { InfoScreen } from '../screens/InfoScreen';

const Stack = createStackNavigator();

export const StackNavigator= ()=>(
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Info' component={InfoScreen}/>
    </Stack.Navigator>
);