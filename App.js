import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

import HomeScreen from './src/screens/HomeScreen';
import CategoriesScreen from './src/screens/CategoriesScreen';
import OutletScreen from './src/screens/OutletScreen';
import CartScreen from './src/screens/CartScreen';
import MykikuuScreen from './src/screens/MykikuuScreen';
import ClothingScreen from './src/newPages/clothingScreen';
import ShoeScreen from './src/newPages/shoeScreen';
import BagScreen from './src/newPages/bagScreen';
import DetailsScreen from './src/screens/details';
import SettingsScreen from './src/newPages/settingsScreen';




export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
    <Tab.Screen name ="Home" component={HomeScreen}/>
    <Tab.Screen name="Categories" component={CategoriesScreen}/>
    <Tab.Screen name="Outlet" component={OutletScreen}/>
    <Tab.Screen name="Cart" component={CartScreen}/>
    <Tab.Screen name="My Kikuu" component={MykikuuScreen}/> 
    {/* <Tab.Screen name="Clothing" component={ClothingScreen}/> */}
    <Tab.Screen name="Details" component={DetailsScreen}/>
    <Tab.Screen name="Settings" component={SettingsScreen}/>
    {/* <Tab.Screen name="Shoe" component={ShoeScreen}/> */}
    {/* <Tab.Screen name="Bag" component={BagScreen}/> */}
  </Tab.Navigator>



  {/* <HomeScreen/> */}
  {/* <CategoriesScreen/> */}
    {/* <Stack.Navigator>
    <Stack.Screen name="Cloth" component={ClothingScreen}/>
     <Stack.Screen name="Main" component={HomeScreen}/> 
  </Stack.Navigator>   */}
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
