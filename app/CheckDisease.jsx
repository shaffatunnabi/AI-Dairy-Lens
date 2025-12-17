import React, { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
  Alert,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import * as ImagePicker from 'expo-image-picker';

const { width } = Dimensions.get('window');

const CheckDisease = ({ navigation }) => {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(null); // Stores the URI of the selected image
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // --- Handlers (Placeholder for Image Picker/Camera and API Call) ---

  const handleTakePicure = () => {
    // Placeholder for Camera logic (e.g., using expo-camera)
    Alert.alert('Camera', 'Opening camera to take a picture...');
    // After taking picture, set the URI
    // setSelectedImage({ uri: 'path/to/captured/image.jpg' }); 
  };

  const handleUploadPicture = () => {
    (async () => {
      try {
        const permission = await ImagePicker.getMediaLibraryPermissionsAsync();
        if (!permission.granted) {
          const request = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (!request.granted) {
            Alert.alert('Permission required', 'Permission to access photos is required to upload images.');
            return;
          }
        }

        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          quality: 0.8,
        });

        if (!result.cancelled && !result.canceled) {
          // new API returns `assets`, older may return `uri` or `cancelled`
          const uri = result.assets && result.assets[0] ? result.assets[0].uri : result.uri;
          if (uri) setSelectedImage({ uri });
        } else if (result.canceled && result.assets && result.assets[0]) {
          setSelectedImage({ uri: result.assets[0].uri });
        }
      } catch (e) {
        console.warn('ImagePicker error:', e);
        Alert.alert('Error', 'Could not open image picker.');
      }
    })();
  };

  const handleAnalyzePicture = () => {
    if (!selectedImage) {
      Alert.alert('Error', 'Please select an image first.');
      return;
    }
    
    setIsAnalyzing(true);
    console.log('Analyzing image:', selectedImage.uri);

    // Simulate an API call delay
    setTimeout(() => {
      setIsAnalyzing(false);
      // In a real app, you would navigate to a results screen here
      Alert.alert('Analysis Complete', 'Disease detection result is ready!');
    }, 2000);
  };
  
  const handleGoBack = () => {
    router.back();
  };

  // --- Utility Button Component (Inline Styles) ---
  const ActionButton = ({ icon, text, onPress, color, disabled = false }) => (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || isAnalyzing}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: disabled ? '#A9D9D5' : color, 
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
      }}
    >
      <Text style={{ 
        fontSize: 18, 
        color: '#fff', 
        fontWeight: 'bold', 
        marginRight: 10 
      }}>
        {icon}
      </Text>
      <Text style={{ 
        color: '#fff', 
        fontSize: 18, 
        fontWeight: 'bold' 
      }}>
        {text}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#006D5B' }}>
      <ScrollView 
        contentContainerStyle={{ 
          flexGrow: 1, 
          backgroundColor: '#F7F4EB', 
          paddingHorizontal: 20,
          paddingTop: Platform.OS === 'android' ? 10 : 0, 
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* --- Header --- */}
        <View style={{ 
          flexDirection: 'row', 
          alignItems: 'center', 
          justifyContent: 'center', 
          paddingVertical: 15,
          marginBottom: 20,
        }}>
          <TouchableOpacity onPress={handleGoBack} style={{ 
              position: 'absolute', 
              left: 0, 
              padding: 10, 
              zIndex: 10 
          }}>
            <Text style={{ fontSize: 28, color: '#006D5B' }}>←</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#006D5B' }}>Check Disease</Text>
        </View>

        {/* --- Instruction Text --- */}
        <Text style={{ 
          fontSize: 18, 
          color: '#333', 
          textAlign: 'center', 
          marginBottom: 30 
        }}>
          Capture or upload an image for AI analysis
        </Text>

        {/* --- Image Selection Area --- */}
        <View style={{
          backgroundColor: '#fff',
          borderRadius: 15,
          padding: 30,
          marginBottom: 40,
          alignItems: 'center',
          borderWidth: 2,
          borderColor: selectedImage ? '#40B5AD' : '#A9D9D5',
          borderStyle: 'dashed',
          minHeight: width * 0.6, // Ensures a good size for the box
          justifyContent: 'center',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
          elevation: 3,
        }}>
          {selectedImage ? (
            // Display selected image
            <View style={{ 
              width: '100%', 
              height: '100%', 
              justifyContent: 'center', 
              alignItems: 'center' 
            }}>
              {/* Note: Image component requires a valid source object/URI */}
              <View style={{
                width: '90%', 
                height: width * 0.5, 
                backgroundColor: '#eee', 
                borderRadius: 10, 
                justifyContent: 'center', 
                alignItems: 'center' 
              }}>
                 <Text style={{color: '#666', fontSize: 16}}>Image Display Area</Text>
                 <Text style={{color: '#666', fontSize: 12}}>{selectedImage.uri ? 'Image Selected' : 'Error loading image'}</Text>
              </View>
            </View>
          ) : (
            // Placeholder when no image is selected
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 48, color: '#A9D9D5' }}>📷</Text>
              <Text style={{ fontSize: 16, color: '#666', marginTop: 10 }}>No image selected</Text>
            </View>
          )}
        </View>

        {/* --- Action Buttons --- */}
        <View>
          <ActionButton
            icon="📸"
            text="Take Picture"
            onPress={handleTakePicure}
            color="#40B5AD"
            disabled={isAnalyzing}
          />
          
          <ActionButton
            icon="📂"
            text="Upload Picture"
            onPress={handleUploadPicture}
            color="#40B5AD"
            disabled={isAnalyzing}
          />

          <ActionButton
            icon={isAnalyzing ? '⏳' : '🔬'}
            text={isAnalyzing ? 'Analyzing...' : 'Analyze Picture'}
            onPress={handleAnalyzePicture}
            color="#006D5B"
            disabled={!selectedImage || isAnalyzing}
          />
        </View>
        
        <View style={{height: 50}} /> 
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckDisease;