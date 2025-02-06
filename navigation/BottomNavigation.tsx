import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 
import ListView from '../screens/ListView';
import ScanView from '../screens/ScanView';
import { createStackNavigator } from '@react-navigation/stack';
import DetailView from '../screens/DetailView'; 
import { View, Text } from 'react-native';

// Create Tab Navigator
const Tab = createBottomTabNavigator();

// Create Stack Navigator
const Stack = createStackNavigator();

const PlantStack = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    >
      <Stack.Screen name="ListView" component={ListView} />
      <Stack.Screen name="DetailView" component={DetailView} />
    </Stack.Navigator>
  );
};

const SettingsScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{fontFamily: "ArsenalRegular"}}>Settings placeholder text</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{fontFamily: "ArsenalRegular"}}>Profile placeholder text</Text>
  </View>
);

const BottomNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap;

            switch (route.name) {
              case 'Plant List':
                iconName = 'leaf-outline';
                break;
              case 'Scan':
                iconName = 'qr-code-outline';
                break;
              case 'Settings':
                iconName = 'settings-outline';
                break;
              case 'Profile':
                iconName = 'person-outline';
                break;
              default:
                iconName = 'ellipse-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#4CAF50',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: '#ffffff', paddingBottom: 5 },
          tabBarLabelStyle: {fontFamily: "ArsenalRegular", fontSize: 13},
          headerStyle: { backgroundColor: '#4CAF50', height: 120 },
          headerTintColor: '#ffffff',
          headerTitleStyle: { fontSize: 40, fontFamily: "ArsenalBold", textAlign: "center" },
          headerTitle: 'PLANT APP', // Set the main header for the app
        })}
      >
        <Tab.Screen name="Plant List" component={PlantStack} />
        <Tab.Screen name="Scan" component={ScanView} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigation;
