import * as React from 'react';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Homescreen from '../screens/homescreen/Homescreen';
import MovieDetails from '../screens/moviedetails/MovieDetails';
import {StyleSheet} from 'react-native';

export default function Tab() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName={Homescreen}
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#8C8B97',
          },
        }}>
        <Tab.Screen
          options={{
            tabBarLabel: 'Home',
          }}
          name="Home"
          component={Homescreen}
        />
        <Tab.Screen name="Details" component={MovieDetails} />
        <Tab.Screen name="Explore" component={Homescreen} />
        <Tab.Screen name="User" component={Homescreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
