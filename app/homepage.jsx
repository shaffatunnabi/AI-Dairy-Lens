import React from 'react';
import { Link, useRouter } from 'expo-router';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Homepage = ({ navigation }) => {
  const router = useRouter();

  const userName = "John Doe";

  const handleLogout = () => {
    router.replace('/');
  };

  const goToProfile = () => {
    router.push('/Profile');
  };

  const goToCheckDisease = () => {
    router.push('/CheckDisease');
  };

  const goToViewRecords = () => {
    router.push('/Records');
  };

  const NavCard = ({ iconText, title, subtitle, href, onPress }) => {
    const CardContent = (
      <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 15, padding: 20, marginBottom: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 5, elevation: 3}} onPress={onPress}>
        <View style={{width: 60, height: 80, borderRadius: 30, backgroundColor: '#E0F4F2', justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#40B5AD'}}>
          <Text style={{fontSize: 30}}>{iconText}</Text>
        </View>
        <View style={{marginLeft: 15, flex: 1}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: '#006D5B', marginBottom: 4}}>{title}</Text>
          <Text style={{fontSize: 14, color: '#666'}}>{subtitle}</Text>
        </View>
      </TouchableOpacity>
    );

    if (href) {
      return (
        <Link href={href} asChild>
          {CardContent}
        </Link>
      );
    }

    return CardContent;
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}
      >
        <ScrollView contentContainerStyle={{flexGrow: 1, backgroundColor: '#F7F4EB', paddingHorizontal: 20, paddingVertical: 20}}>

          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30, marginTop: Platform.OS === 'android' ? 10 : 0}}>
            <TouchableOpacity onPress={goToProfile} style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{width: 50, height: 50, borderRadius: 25, backgroundColor: '#40B5AD', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', padding: 5, borderWidth: 1, borderColor: '#006D5B'}}>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>J</Text>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>D</Text>
              </View>
              <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#333'}}>{userName}</Text>
                <Text style={{fontSize: 14, color: '#666'}}>View Profile</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleLogout} style={{padding: 12, backgroundColor: '#FF6B6B', borderRadius: 8, paddingHorizontal: 16}}>
              <Text style={{fontSize: 14, color: '#fff', fontWeight: 'bold'}}>Logout</Text>
            </TouchableOpacity>
          </View>

          <View style={{marginBottom: 40}}>
            <Text style={{fontSize: 24, fontWeight: 'bold', color: '#006D5B', marginBottom: 8}}>
              Welcome to AI Dairy-Lens
            </Text>
          </View>

          <View>
            
            <NavCard
              iconText="👤"
              title="Profile"
              subtitle="Manage your account"
              href="/Profile"
              onPress={goToProfile}
            />
            
            <NavCard
              iconText="🔎"
              title="Check Disease"
              subtitle="Scan and detect diseases"
              href="/CheckDisease"
              onPress={goToCheckDisease}
            />
            
            <NavCard
              iconText="📋"
              title="View Records"
              subtitle="Browse disease history"
              href="/Records"
              onPress={goToViewRecords}
            />

          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Homepage;