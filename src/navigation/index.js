import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useColorScheme } from 'nativewind';
import { StatusBar } from 'expo-status-bar';
import Contracts from '../pages/Contracts';
import CustomHeader from './CustomHeader';
import CustomDrawerContent from './CustomDrawerContent';
import ContractDetails from '../pages/ContractDetails';

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

      <Drawer.Screen
        options={{ title: 'Contratos' }}
        name="Contracts"
        component={Contracts}
      />

      <Drawer.Screen
        options={{
          drawerItemStyle: { display: 'none' },
          title: 'Detalles del contrato',
        }}
        name="ContractDetails"
        component={ContractDetails}
      />
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
