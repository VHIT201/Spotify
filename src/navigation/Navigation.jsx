import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../screens/auth/Login';
import LoginOftionsScreen from '../screens/auth/LoginOftionsScreen';
import Register from '../screens/auth/Register';
import FreeRegister from '../screens/auth/FreeRegister';
import PhoneNumberRegister from '../screens/auth/PhoneNumberRegister';
import LoginWithAccount from '../screens/auth/LoginWithAccount';
import LoginWithOutPassword from '../screens/auth/LoginWithOutPassword';
import Home from '../screens/Home/Home';
import Search from '../screens/Home/Search';
import Library from '../screens/Home/Library';
import Premium from '../screens/Home/Premium';
import { Ionicons } from '@expo/vector-icons';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
  const TabHome = () => (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Search') {
          iconName = focused ? 'search' : 'search-outline';
        } else if (route.name === 'Library') {
          iconName = focused ? 'library' : 'library-outline';
        } else if (route.name === 'Premium') {
          iconName = focused ? 'star' : 'star-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      headerShown:false,
      tabBarActiveTintColor: '#1DB954', // Màu của tab được chọn
      tabBarInactiveTintColor: '#FFFFFF', // Màu của tab không được chọn
      tabBarStyle: {
        backgroundColor: '#000000', // Màu nền của tab bar
        borderTopColor: 'transparent', // Loại bỏ đường viền phía trên tab bar
      },
      tabBarLabelStyle: {
        fontSize: 12,
      },
    })}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Search" component={Search} />
    <Tab.Screen name="Library" component={Library} />
    <Tab.Screen name="Premium" component={Premium} />
  </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="LoginOftionsScreen" component={LoginOftionsScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="FreeRegister" component={FreeRegister} />
        <Stack.Screen name="PhoneNumberRegister" component={PhoneNumberRegister} />
        <Stack.Screen name="LoginWithAccount" component={LoginWithAccount} />
        <Stack.Screen name="LoginWithOutPassword" component={LoginWithOutPassword} />
        <Stack.Screen name="TabHome" component={TabHome} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})