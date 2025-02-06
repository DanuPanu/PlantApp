import React, { createContext, useState, ReactNode, useContext } from 'react';
import uuid from 'react-native-uuid';

interface Plant {
  id: string;
  name: string;
  dateAdded: string;
  imageUri: string;
  notes?: string;
}

interface PlantContextProps {
  plants: Plant[];
  plant: Plant | null; 
  addPlant: (name: string, imageUri: string, notes?: string) => void;
  setPlant: (plant: Plant | null) => void; 
}

export const PlantContext = createContext<PlantContextProps | undefined>(undefined);

export const PlantProvider = ({ children }: { children: ReactNode }) => {
  const [plants, setPlants] = useState<Plant[]>([]); 
  const [plant, setPlant] = useState<Plant | null>(null); 

  const addPlant = (name: string, imageUri: string, notes?: string) => {
    const newPlant: Plant = {
      id: (uuid.v4() as string),
      name,
      dateAdded: new Date().toISOString(),
      imageUri,
      notes,
    };
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  };

  return (
    <PlantContext.Provider value={{ plants, addPlant, plant, setPlant }}>
      {children}
    </PlantContext.Provider>
  );
};

// Custom hook for cleaner context consumption
export const usePlantContext = (): PlantContextProps => {
  const context = useContext(PlantContext);
  if (!context) {
    throw new Error('usePlantContext must be used within a PlantProvider');
  }
  return context;
};
