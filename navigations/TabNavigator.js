import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {MapScreen} from '../screens/MapScreen';
import {SavedScreen} from '../screens/SavedScreen';
import { StackNavigator } from './StackNavigator';
import { View } from 'react-native';
import { SettingScreen } from '../screens/SettingScreen';


const Tab = createBottomTabNavigator();

export const NavigatotMain=()=>(

    <Tab.Navigator
    screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { 
            position: "absolute",
            backgroundColor:  'black',
            borderTopStartRadius: 40,
            borderTopEndRadius: 40,
         },
        tabBarIcon: ({ focused, color }) => {
          let iconName;
  
          if (route.name === 'home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Map') {
            iconName = focused ? 'map' : 'map-outline';
          } else if (route.name === 'Saved') {
            iconName = focused ? 'save' : 'save-outline';
          } else if (route.name === 'Setting') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
  
          return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: -30 }}>
              <Ionicons name={iconName} size={30} color={color} />
            </View>
            );
        },
      })}
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: 'grey',
        showLabel: false,
        style: {
            backgroundColor: 'black', 
          },
      }}

        >
        <Tab.Screen name='home' component={StackNavigator}/>
        <Tab.Screen name='Map' component={MapScreen}/>
        <Tab.Screen name='Saved' component={SavedScreen}/>
        <Tab.Screen name='Setting' component={SettingScreen}/>
    </Tab.Navigator>
);