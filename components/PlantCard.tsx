import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { usePlantContext } from '../context/PlantContext';

interface Plant {
  id: string;
  name: string;
  dateAdded: string;
  imageUri: string;
  notes?: string;
}

interface PlantCardProps {
  plant: Plant;
}

const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {

  const navigation = useNavigation();

  const { setPlant } = usePlantContext();

  const handlePress = () => {
    setPlant(plant);
    navigation.navigate('DetailView' as never);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.card}>
        <Image source={{ uri: plant.imageUri }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.name}>{plant.name}</Text>
          <Text style={styles.date}>Added on: {new Date(plant.dateAdded).toLocaleDateString()}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 16,
  },
  info: {
    flex: 1,
    gap: 10
  },
  name: {
    fontFamily: "ArsenalBold",
    fontSize: 18,
  },
  date: {
    color: '#777',
    fontSize: 14,
    fontFamily: "ArsenalBold",
  },
  notes: {
    marginTop: 4,
    color: '#555',
  },
});

export default PlantCard;
