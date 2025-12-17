import React from 'react';
import { useRouter } from 'expo-router';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Records = ({ navigation }) => {
  const router = useRouter();

  // --- Dummy Data (Modified to include percentages and colors from the image) ---
  const diseaseData = [
    { 
      id: 1, 
      name: "Lumpy Skin Disease", 
      percentage: 55, // Represents the highest fall/percentage
      icon: "❗️", 
      color: "#F65261", // Red/Pink from the design
      records: 12,
    },
    { 
      id: 2, 
      name: "Foot and Mouth Disease", 
      percentage: 25, 
      icon: "🩺", // Using a placeholder that looks like a health icon
      color: "#FF9800", // Orange from the design
      records: 8,
    },
    { 
      id: 3, 
      name: "Skin Rashes", 
      percentage: 20, 
      icon: "📄", // Document icon from the design
      color: "#8BC34A", // Green from the design
      records: 15,
    },
    // The percentages (55+25+20) sum up to 100 for a realistic display
  ];

  // --- Handlers ---
  
  const handleViewDetails = (diseaseName) => {
    Alert.alert('Detailed History', `Navigating to detailed history for ${diseaseName}.`);
  };

  const handleGoBack = () => {
    router.back();
  };

  // --- Reusable Disease Card Component (Inline Styles) ---
  const DiseaseCard = ({ name, percentage, icon, color, records }) => (
    <View style={{
      backgroundColor: color,
      borderRadius: 15,
      padding: 20,
      marginBottom: 20,
      // Shadow styles
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 5,
    }}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
      }}>
        {/* Left Side: Icon and Disease Name */}
        <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
          <Text style={{ 
            fontSize: 30, 
            marginRight: 10, 
            color: '#fff' 
          }}>
            {icon}
          </Text>
          <View style={{flex: 1}}>
            <Text style={{ 
              fontSize: 20, 
              fontWeight: 'bold', 
              color: '#fff' 
            }}>
              {name}
            </Text>
            <Text style={{ 
              fontSize: 14, 
              color: '#fff', 
              opacity: 0.8 
            }}>
              {percentage}% of detected cases
            </Text>
          </View>
        </View>

        {/* Right Side: Percentage (Large Text) */}
        <Text style={{
          fontSize: 48,
          fontWeight: 'bold',
          color: '#fff',
          marginLeft: 10,
        }}>
          {percentage}%
        </Text>
      </View>

      {/* Separator */}
      <View style={{ 
        height: 1, 
        backgroundColor: '#fff', 
        opacity: 0.3, 
        marginVertical: 10 
      }} />

      {/* Bottom Button/Action */}
      <TouchableOpacity 
        onPress={() => handleViewDetails(name)}
        style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 5 }}
      >
        <Text style={{ 
          fontSize: 14, 
          color: '#fff', 
          fontWeight: '600' 
        }}>
          Tap to view detailed history ({records} total records)
        </Text>
        <Text style={{ fontSize: 20, color: '#fff' }}>→</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#006D5B' }}>
      <ScrollView 
        contentContainerStyle={{ 
          flexGrow: 1, 
          backgroundColor: '#F7F4EB', // Light cream/beige background
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
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#006D5B' }}>View Records</Text>
        </View>

        {/* --- Instruction/Title Text --- */}
        <Text style={{ 
          fontSize: 18, 
          color: '#333', 
          textAlign: 'center', 
          marginBottom: 30 
        }}>
          View percentage of detected diseases
        </Text>

        {/* --- Disease Cards --- */}
        <View>
          {diseaseData.map((disease) => (
            <DiseaseCard
              key={disease.id}
              name={disease.name}
              percentage={disease.percentage}
              icon={disease.icon}
              color={disease.color}
              records={disease.records}
            />
          ))}
        </View>
        
        <View style={{height: 50}} /> 
      </ScrollView>
    </SafeAreaView>
  );
};

export default Records;