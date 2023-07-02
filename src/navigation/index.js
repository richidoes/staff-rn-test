import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useColorScheme } from 'nativewind';
import { StatusBar } from 'expo-status-bar';
import Contracts from '../pages/Contracts';
import CustomHeader from './CustomHeader';
import CustomDrawerContent from './CustomDrawerContent';
// import ContractDetails from '../pages/ContractDetails';

// const Stack = createNativeStackNavigator();

// function ContractsDetailsStackNavigator() {
//   return (
//     <Stack.Navigator
//       initialRouteName="ContractsDetails"
//       screenOptions={{
//       }}
//     >
//       <Stack.Screen name="ContractsDetails" component={ContractsDetails} />
//     </Stack.Navigator>
//   );
// }

const Drawer = createDrawerNavigator();

function DrawerStackNavigator() {
  const { colorScheme } = useColorScheme();

  const isDarkTheme = colorScheme === 'dark';
  const textColor = isDarkTheme ? '#FFFFFF' : '#000000';

  return (
    <Drawer.Navigator
      initialRouteName="Contracts"
      drawerContent={CustomDrawerContent}
      screenOptions={{
        header: CustomHeader,
        drawerActiveBackgroundColor: '#4F46E5',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: textColor,
      }}
    >
      <Drawer.Screen name="Contracts" component={Contracts} />
    </Drawer.Navigator>
  );
}

function MainNavigation() {
  const { colorScheme } = useColorScheme();

  const isDarkTheme = colorScheme === 'dark';
  const backgroundColor = isDarkTheme ? '#000000' : '#FFFFFF';

  return (
    <NavigationContainer>
      <StatusBar
        animated
        style={isDarkTheme ? 'light' : 'dark'}
        backgroundColor={backgroundColor}
      />
      <DrawerStackNavigator />
    </NavigationContainer>
  );
}

export default MainNavigation;
