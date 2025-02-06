import React, { useContext } from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { PlantContext } from '../context/PlantContext';
import PlantCard from '../components/PlantCard';
import { useNavigation } from '@react-navigation/native';

const ListView = () => {
  const { plants } = useContext(PlantContext) || {};
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={plants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PlantCard plant={item} />}
        ListEmptyComponent={<Text style={styles.emptyText}>No plants added yet!</Text>}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Scan' as never)}
      >
        <Text style={styles.addButtonText}>Add Plant</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F9F9F9',
  },
  emptyText: {
    textAlign: 'center',
    color: '#555',
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    position: 'absolute',
    bottom: 16,
    left: '25%',
    right: '25%',
  },
  addButtonText: {
    color: '#FFF',
    fontFamily: "ArsenalBold",
    fontSize: 17,
  },
});

export default ListView;
