import React, { useEffect } from 'react';
import { PlantProvider } from './context/PlantContext'; 
import BottomNavigation from './navigation/BottomNavigation';
import * as Font from 'expo-font';

const fetchFonts = () => {
  return Font.loadAsync({
    'ArsenalBold': require('./assets/fonts/Arsenal/Arsenal-Bold.ttf'),
    'ArsenalRegular': require('./assets/fonts/Arsenal/Arsenal-Regular.ttf'),
  });
};

const App = () => {

  useEffect(() => {
    fetchFonts(); 
  }, []);
  
  return (
    <PlantProvider>
      <BottomNavigation/>
    </PlantProvider>
  );
};

export default App;
