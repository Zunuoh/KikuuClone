import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

import HomeScreen from './src/screens/HomeScreen';
import CategoriesScreen from './src/screens/CategoriesScreen';
import OutletScreen from './src/screens/OutletScreen';
import CartScreen from './src/screens/CartScreen';
import MykikuuScreen from './src/screens/MykikuuScreen';




export default function App() {
  return (
    <NavigationContainer>
       <Tab.Navigator 
  >
    <Tab.Screen name ="Home" component={HomeScreen}/>
    <Tab.Screen name="Categories" component={CategoriesScreen}/>
    <Tab.Screen name="Outlet" component={OutletScreen}/>
    <Tab.Screen name="Cart" component={CartScreen}/>
    <Tab.Screen name="My Kikuu" component={MykikuuScreen}/>
  </Tab.Navigator>
    </NavigationContainer>
 
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
