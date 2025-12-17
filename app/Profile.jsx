import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  Platform,
  KeyboardAvoidingView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// --- Placeholder Images (Replace with your actual imports) ---
// Note: In a real app, you'd need actual image files. 
// For this example, we use generic placeholders.
const CowPreset1 = { uri: 'cow_preset_1_uri' }; 
const CowPreset2 = { uri: 'cow_preset_2_uri' };
const CowPreset3 = { uri: 'cow_preset_3_uri' }; 
const DefaultProfile = { uri: 'default_cow_profile_uri' }; 

// --- Dummy Data ---
const DUMMY_USER_DATA = {
  username: "John Doe",
  email: "john.doe@example.com",
  farmName: "Green Valley Farm",
  currentProfilePic: DefaultProfile, 
};

const Profile = ({ navigation }) => {
  const router = useRouter();
  // --- States for User Data ---
  const [username, setUsername] = useState(DUMMY_USER_DATA.username);
  const [email, setEmail] = useState(DUMMY_USER_DATA.email);
  const [farmName, setFarmName] = useState(DUMMY_USER_DATA.farmName);
  const [profileImage, setProfileImage] = useState(DUMMY_USER_DATA.currentProfilePic);

  // --- States for Password Change ---
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isCurrentPasswordVisible, setIsCurrentPasswordVisible] = useState(false);
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  // --- Data for Presets ---
  const presets = [
    { id: 1, image: CowPreset1 },
    { id: 2, image: CowPreset2 },
    { id: 3, image: CowPreset3 },
  ];

  // --- Handlers (Placeholder for API/Logic) ---

  const handleUpdatePassword = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all password fields.');
      return;
    }
    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'New password and confirmation do not match.');
      return;
    }
    Alert.alert('Success', 'Password updated successfully!');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const handleLogout = () => {
    Alert.alert(
      'Logout', 
      'Are you sure you want to log out?', 
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Logout', onPress: () => {
          // Add navigation logic to go back to login screen here
        }, style: 'destructive'},
      ]
    );
  };

  const handleUploadPhoto = () => {
    Alert.alert('Upload Photo', 'Image picker would open here.');
  };

  const handleSelectPreset = (image) => {
    setProfileImage(image);
  };

  const handleGoBack = () => {
    router.push('/homepage');
  };
  
  // --- Reusable Input Component (Inline Styles) ---
  const LabeledInput = ({ label, value, onChangeText, editable = true, autoCapitalize = 'none', keyboardType = 'default' }) => (
    <View style={{ marginBottom: 15 }}>
      <Text style={{ fontSize: 14, color: '#666', marginBottom: 5 }}>{label}</Text>
      <TextInput
        style={{
          backgroundColor: editable ? '#F0F0F0' : '#E8E8E8',
          borderRadius: 10,
          paddingHorizontal: 15,
          paddingVertical: 12,
          fontSize: 16,
          color: editable ? '#333' : '#888',
          borderWidth: 1,
          borderColor: '#40B5AD',
        }}
        value={value}
        onChangeText={onChangeText}
        editable={editable}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        placeholderTextColor="#888"
      />
    </View>
  );

  // --- Reusable Password Input Component (Inline Styles) ---
  const PasswordInput = ({ label, value, onChangeText, isVisible, toggleVisibility }) => (
    <View style={{ marginBottom: 15 }}>
      <Text style={{ fontSize: 14, color: '#666', marginBottom: 5 }}>{label}</Text>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#40B5AD',
      }}>
        <TextInput
          style={{
            flex: 1,
            paddingHorizontal: 15,
            paddingVertical: 12,
            fontSize: 16,
            color: '#333',
          }}
          placeholder={`Enter ${label.toLowerCase()}`}
          placeholderTextColor="#888"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={!isVisible}
        />
        <TouchableOpacity 
          style={{ paddingHorizontal: 15 }}
          onPress={toggleVisibility}
        >
          <Text style={{ fontSize: 20 }}>{isVisible ? '🙈' : '👁️'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#006D5B' }}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
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
            marginBottom: 10,
          }}>
            <TouchableOpacity onPress={handleGoBack} style={{ 
                position: 'absolute', 
                left: 0, 
                padding: 10, 
                zIndex: 10 
            }}>
              <Text style={{ fontSize: 28, color: '#006D5B' }}>←</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#006D5B' }}>Profile</Text>
          </View>

          {/* --- Profile Photo Section --- */}
          <View style={{
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: 15,
            padding: 20,
            marginBottom: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 5,
            elevation: 3,
          }}>
            <Image source={profileImage} style={{
              width: 120,
              height: 120,
              borderRadius: 60,
              marginBottom: 15,
              borderWidth: 3,
              borderColor: '#40B5AD',
            }} />
            
            <TouchableOpacity 
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 8,
                paddingHorizontal: 15,
                marginBottom: 15,
                backgroundColor: '#E0F4F2',
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#40B5AD',
              }}
              onPress={handleUploadPhoto}
            >
              <Text style={{ fontSize: 16, color: '#006D5B', fontWeight: '600' }}>⬆️ Upload Photo</Text>
            </TouchableOpacity>

            <Text style={{ fontSize: 14, color: '#666', marginBottom: 10 }}>Or choose preset:</Text>
            
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '80%',
              paddingHorizontal: 10,
            }}>
              {presets.map((item) => (
                <TouchableOpacity 
                  key={item.id}
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    borderWidth: 3,
                    borderColor: profileImage === item.image ? '#40B5AD' : 'transparent',
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                  onPress={() => handleSelectPreset(item.image)}
                >
                  <Image source={item.image} style={{ width: '100%', height: '100%' }} />
                  {profileImage === item.image && (
                    <View style={{
                       position: 'absolute',
                       top: 5,
                       right: 5,
                       backgroundColor: '#40B5AD',
                       borderRadius: 10,
                       width: 20,
                       height: 20,
                       justifyContent: 'center',
                       alignItems: 'center',
                    }}>
                       <Text style={{ color: '#fff', fontSize: 12, fontWeight: 'bold' }}>✔</Text>
                    </View>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* --- User Information Section --- */}
          <View style={{
            backgroundColor: '#fff',
            borderRadius: 15,
            padding: 20,
            marginBottom: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 5,
            elevation: 3,
          }}>
            <LabeledInput 
              label="Username" 
              value={username} 
              onChangeText={setUsername} 
            />
            <LabeledInput 
              label="Email" 
              value={email} 
              editable={false}
            />
            <LabeledInput 
              label="Farm Name" 
              value={farmName} 
              onChangeText={setFarmName} 
            />
          </View>
          
          {/* --- Change Password Section --- */}
          <View style={{
            backgroundColor: '#fff',
            borderRadius: 15,
            padding: 20,
            marginBottom: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 5,
            elevation: 3,
          }}>
            <Text style={{ 
                fontSize: 18, 
                fontWeight: 'bold', 
                color: '#006D5B', 
                marginBottom: 15 
            }}>
                Change Password
            </Text>
            
            <PasswordInput
              label="Current Password"
              value={currentPassword}
              onChangeText={setCurrentPassword}
              isVisible={isCurrentPasswordVisible}
              toggleVisibility={() => setIsCurrentPasswordVisible(!isCurrentPasswordVisible)}
            />
            <PasswordInput
              label="New Password"
              value={newPassword}
              onChangeText={setNewPassword}
              isVisible={isNewPasswordVisible}
              toggleVisibility={() => setIsNewPasswordVisible(!isNewPasswordVisible)}
            />
            <PasswordInput
              label="Confirm Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              isVisible={isConfirmPasswordVisible}
              toggleVisibility={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
            />

            <TouchableOpacity 
              style={{
                backgroundColor: '#40B5AD',
                borderRadius: 10,
                padding: 15,
                alignItems: 'center',
                marginTop: 15,
              }}
              onPress={handleUpdatePassword}
            >
              <Text style={{ 
                  color: '#fff', 
                  fontSize: 18, 
                  fontWeight: 'bold' 
              }}>
                Update Password
              </Text>
            </TouchableOpacity>
          </View>

          {/* --- Logout Button --- */}
          <TouchableOpacity 
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#FF6B6B', 
              borderRadius: 10,
              padding: 15,
              marginTop: 10,
              marginBottom: 50,
              shadowColor: '#FF6B6B',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 5,
              elevation: 5,
            }}
            onPress={handleLogout}
          >
            <Text style={{
              fontSize: 24,
              color: '#fff',
              fontWeight: 'bold',
              transform: [{ rotate: '180deg' }], 
              marginRight: 10,
            }}>
              &#8594;
            </Text>
            <Text style={{
              color: '#fff',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
                Logout
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Profile;