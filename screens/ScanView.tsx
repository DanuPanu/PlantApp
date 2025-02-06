import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import { CameraView, useCameraPermissions, CameraCapturedPicture } from 'expo-camera'; 
import { usePlantContext } from '../context/PlantContext';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const ScanView = () => {
  const [name, setName] = useState('');
  const [notes, setNotes] = useState('');
  const [imageUri, setImageUri] = useState('');
  const [permission, requestPermission] = useCameraPermissions();
  const [cameraMode, setCameraMode] = useState(false);
  const { addPlant } = usePlantContext();  
  const navigation = useNavigation();
  const cameraRef = useRef<CameraCapturedPicture | any>(null);

  useEffect(() => {
    (async () => {
      const { granted } = await requestPermission();
      if (!granted) {
        alert('Camera permission is required!');
      }
    })();
  }, [requestPermission]);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setImageUri(photo.uri);
      setCameraMode(false);
    }
  };

  const handleSave = () => {
    if (name && imageUri) {
      addPlant(name, imageUri, notes);
      setImageUri('');
      setName('');
      setNotes('');
      navigation.navigate('Plant List' as never);
    } else {
      alert('Please provide a name and photo!');
    }
  };

  const testi = () => {
    setImageUri("") 
  }

  if (!permission) {
    return <View style={styles.container}><Text>Loading camera permissions...</Text></View>;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {cameraMode ? (
            <CameraView style={styles.camera} ref={cameraRef}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setCameraMode(false)}
              >
                <Ionicons name="close-circle" size={35} color="#fff" />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.captureButton}
                onPress={takePicture}
              >
                <Ionicons style={{alignSelf: "center"}} name="camera" size={40} color="#fff" />
              </TouchableOpacity>
            </CameraView>
          ) : (
            <View style={styles.form}>
              <Text style={styles.label}>Plant Name</Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Enter plant name"
              />

              <Text style={styles.label}>Notes (Optional)</Text>
              <TextInput
                style={styles.input}
                value={notes}
                onChangeText={setNotes}
                placeholder="Enter notes"
              />

              {imageUri ? (
                <>
                  <Image source={{ uri: imageUri }} style={styles.image} />
                  <TouchableOpacity style={styles.changeButton} onPress={testi}>
                    <Text style={styles.saveButtonText}>Take another</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <TouchableOpacity style={styles.cameraButton} onPress={() => setCameraMode(true)}>
                  <Ionicons style={{alignSelf: "center"}} name="camera-outline" size={40} color="#4CAF50" />
                  <Text style={{fontFamily: "ArsenalRegular"}}>Open Camera</Text>
                </TouchableOpacity>
              )}

              <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Save Plant</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f7f7f7',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
    fontSize: 18,
    color: '#333',
    fontFamily: "ArsenalBold"
  },
  camera: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 10,
    borderRadius: 50,
  },
  captureButton: {
    width: "20%",
    borderRadius: 40,
    alignSelf: "center",
    position: "absolute",
    bottom: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 20,
  },
  form: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start'
  },
  label: {
    fontSize: 16,
    marginVertical: 8,
    fontFamily: "ArsenalBold",
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    padding: 12,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 350,
    marginVertical: 20,
    borderRadius: 10,
  },
  cameraButton: {
    alignSelf: 'center',
    backgroundColor: '#E8F5E9',
    padding: 20,
    borderRadius: 50,
    marginBottom: 20,
    marginTop: 10
  },
  changeButton: {
    backgroundColor: 'grey',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: 'center',
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 15,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: "ArsenalBold"
  },
});

export default ScanView;
