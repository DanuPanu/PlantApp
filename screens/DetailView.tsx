import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { usePlantContext } from '../context/PlantContext';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const DetailView: React.FC = () => {

  const { plant } = usePlantContext();
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>

        <Text style={styles.labelHead}>{plant?.name}</Text>

        <Image source={{ uri: plant?.imageUri }} style={styles.image} />

        <View style={styles.notesContainer}>
          <Text style={{fontSize: 20, fontFamily: "ArsenalBold"}}>NOTES</Text>
          <MaterialIcons name="notes" size={24} color="black" />
        </View>
          <Text style={styles.labelText}>{plant?.notes}</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F9F9F9',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  notesContainer: {
    display: "flex", 
    flexDirection: "row", 
    gap: 4, 
    alignItems: "center", 
    justifyContent: "center", 
    marginTop: 15
  },
  labelHead: {
    fontSize: 28,
    fontFamily: "ArsenalBold",
    textTransform: "uppercase",
    marginTop: 8,
    textAlign: "center",
  },
  labelText: {
    fontSize: 16,
    fontFamily: "ArsenalRegular",
    textAlign: "center",
    padding: 15, 
    marginTop: 10, 
    borderWidth: 1, 
    borderRadius: 10
  },
  image: {
    width: '100%',
    height: 400,
    marginTop: 16,
    borderRadius: 10,
    borderWidth: 2
  },
  backButton: {
    backgroundColor: '#4CAF50',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    position: 'absolute',
    bottom: 16,
    left: '25%',
    right: '25%',
  },
  backButtonText: {
    color: '#FFF',
    fontFamily: "ArsenalBold",
    fontSize: 17,
  },
});

export default DetailView;
