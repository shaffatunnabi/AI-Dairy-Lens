 import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,

  KeyboardAvoidingView,
  Platform,
  Alert
} from 'react-native';

import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert
} from 'react-native';

const Homepage = ({ navigation }) => {
  
  const userName = "John Doe";
  
  const handleLogout = () => {
    Alert.alert('Logout', 'You have been logged out.');
  };

  const goToProfile = () => {
    console.log('Navigating to Profile Screen');
  };

  const goToCheckDisease = () => {
    console.log('Navigating to Check Disease Screen');
  };

  const goToViewRecords = () => {
    console.log('Navigating to View Records Screen');
  };

  const NavCard = ({ iconText, title, subtitle, onPress }) => (
    <TouchableOpacity 
      style={styles.card}
      onPress={onPress}
    >
      <View style={styles.cardIconContainer}>
        <Text style={styles.cardIconText}>{iconText}</Text>
      </View>
      <View style={styles.cardTextContainer}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardSubtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}
      >
        <ScrollView contentContainerStyle={styles.container}>

          <View style={styles.header}>
            <TouchableOpacity onPress={goToProfile} style={styles.userInfoContainer}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>J</Text>
                <Text style={styles.avatarText}>D</Text>
              </View>
              <View style={styles.profileTextContainer}>
                <Text style={styles.userNameText}>{userName}</Text>
                <Text style={styles.viewProfileText}>View Profile</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
              <Text style={styles.logoutIcon}>&#8594;</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeTitle}>
              Welcome to AI Dairy-Lens
            </Text>
            <Text style={styles.welcomeSubtitle}>
              Choose an option to get started
            </Text>
          </View>

          <View style={styles.navCardsContainer}>
            
            <NavCard
              iconText="👤"
              title="Profile"
              subtitle="Manage your account"
              onPress={goToProfile}
            />
            
            <NavCard
              iconText="🔎"
              title="Check Disease"
              subtitle="Scan and detect diseases"
              onPress={goToCheckDisease}
            />
            
            <NavCard
              iconText="📋"
              title="View Records"
              subtitle="Browse disease history"
              onPress={goToViewRecords}
            />

          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#F7F4EB',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: Platform.OS === 'android' ? 10 : 0,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#40B5AD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    borderWidth: 1,
    borderColor: '#006D5B',
  },
  avatarText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileTextContainer: {
    marginLeft: 10,
  },
  userNameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  viewProfileText: {
    fontSize: 14,
    color: '#666',
  },
  logoutButton: {
    padding: 10,
  },
  logoutIcon: {
    fontSize: 24,
    color: '#006D5B',
    fontWeight: 'bold',
    transform: [{ rotate: '180deg' }],
  },
  welcomeSection: {
    marginBottom: 40,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#006D5B',
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#666',
  },
  navCardsContainer: {
  },
  card: {
    flexDirection: 'row',
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
  },
  cardIconContainer: {
    width: 60,
    height: 80,
    borderRadius: 30,
    backgroundColor: '#E0F4F2',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#40B5AD',
  },
  cardIconText: {
    fontSize: 30,
  },
  cardTextContainer: {
    marginLeft: 15,
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#006D5B',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
  },
});

export default Homepage;import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert
} from 'react-native';

const Homepage = ({ navigation }) => {
  
  const userName = "John Doe";
  
  const handleLogout = () => {
    Alert.alert('Logout', 'You have been logged out.');
  };

  const goToProfile = () => {
    console.log('Navigating to Profile Screen');
  };

  const goToCheckDisease = () => {
    console.log('Navigating to Check Disease Screen');
  };

  const goToViewRecords = () => {
    console.log('Navigating to View Records Screen');
  };

  const NavCard = ({ iconText, title, subtitle, onPress }) => (
    <TouchableOpacity 
      style={styles.card}
      onPress={onPress}
    >
      <View style={styles.cardIconContainer}>
        <Text style={styles.cardIconText}>{iconText}</Text>
      </View>
      <View style={styles.cardTextContainer}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardSubtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}
      >
        <ScrollView contentContainerStyle={styles.container}>

          <View style={styles.header}>
            <TouchableOpacity onPress={goToProfile} style={styles.userInfoContainer}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>J</Text>
                <Text style={styles.avatarText}>D</Text>
              </View>
              <View style={styles.profileTextContainer}>
                <Text style={styles.userNameText}>{userName}</Text>
                <Text style={styles.viewProfileText}>View Profile</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
              <Text style={styles.logoutIcon}>&#8594;</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeTitle}>
              Welcome to AI Dairy-Lens
            </Text>
            <Text style={styles.welcomeSubtitle}>
              Choose an option to get started
            </Text>
          </View>

          <View style={styles.navCardsContainer}>
            
            <NavCard
              iconText="👤"
              title="Profile"
              subtitle="Manage your account"
              onPress={goToProfile}
            />
            
            <NavCard
              iconText="🔎"
              title="Check Disease"
              subtitle="Scan and detect diseases"
              onPress={goToCheckDisease}
            />
            
            <NavCard
              iconText="📋"
              title="View Records"
              subtitle="Browse disease history"
              onPress={goToViewRecords}
            />

          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#F7F4EB',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: Platform.OS === 'android' ? 10 : 0,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#40B5AD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    borderWidth: 1,
    borderColor: '#006D5B',
  },
  avatarText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileTextContainer: {
    marginLeft: 10,
  },
  userNameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  viewProfileText: {
    fontSize: 14,
    color: '#666',
  },
  logoutButton: {
    padding: 10,
  },
  logoutIcon: {
    fontSize: 24,
    color: '#006D5B',
    fontWeight: 'bold',
    transform: [{ rotate: '180deg' }],
  },
  welcomeSection: {
    marginBottom: 40,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#006D5B',
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#666',
  },
  navCardsContainer: {
  },
  card: {
    flexDirection: 'row',
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
  },
  cardIconContainer: {
    width: 60,
    height: 80,
    borderRadius: 30,
    backgroundColor: '#E0F4F2',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#40B5AD',
  },
  cardIconText: {
    fontSize: 30,
  },
  cardTextContainer: {
    marginLeft: 15,
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#006D5B',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
  },
});

export default Homepage;import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert
} from 'react-native';

const Homepage = ({ navigation }) => {
  
  const userName = "John Doe";
  
  const handleLogout = () => {
    Alert.alert('Logout', 'You have been logged out.');
  };

  const goToProfile = () => {
    console.log('Navigating to Profile Screen');
  };

  const goToCheckDisease = () => {
    console.log('Navigating to Check Disease Screen');
  };

  const goToViewRecords = () => {
    console.log('Navigating to View Records Screen');
  };

  const NavCard = ({ iconText, title, subtitle, onPress }) => (
    <TouchableOpacity 
      style={styles.card}
      onPress={onPress}
    >
      <View style={styles.cardIconContainer}>
        <Text style={styles.cardIconText}>{iconText}</Text>
      </View>
      <View style={styles.cardTextContainer}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardSubtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}
      >
        <ScrollView contentContainerStyle={styles.container}>

          <View style={styles.header}>
            <TouchableOpacity onPress={goToProfile} style={styles.userInfoContainer}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>J</Text>
                <Text style={styles.avatarText}>D</Text>
              </View>
              <View style={styles.profileTextContainer}>
                <Text style={styles.userNameText}>{userName}</Text>
                <Text style={styles.viewProfileText}>View Profile</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
              <Text style={styles.logoutIcon}>&#8594;</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeTitle}>
              Welcome to AI Dairy-Lens
            </Text>
            <Text style={styles.welcomeSubtitle}>
              Choose an option to get started
            </Text>
          </View>

          <View style={styles.navCardsContainer}>
            
            <NavCard
              iconText="👤"
              title="Profile"
              subtitle="Manage your account"
              onPress={goToProfile}
            />
            
            <NavCard
              iconText="🔎"
              title="Check Disease"
              subtitle="Scan and detect diseases"
              onPress={goToCheckDisease}
            />
            
            <NavCard
              iconText="📋"
              title="View Records"
              subtitle="Browse disease history"
              onPress={goToViewRecords}
            />

          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#F7F4EB',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: Platform.OS === 'android' ? 10 : 0,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#40B5AD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    borderWidth: 1,
    borderColor: '#006D5B',
  },
  avatarText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileTextContainer: {
    marginLeft: 10,
  },
  userNameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  viewProfileText: {
    fontSize: 14,
    color: '#666',
  },
  logoutButton: {
    padding: 10,
  },
  logoutIcon: {
    fontSize: 24,
    color: '#006D5B',
    fontWeight: 'bold',
    transform: [{ rotate: '180deg' }],
  },
  welcomeSection: {
    marginBottom: 40,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#006D5B',
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#666',
  },
  navCardsContainer: {
  },
  card: {
    flexDirection: 'row',
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
  },
  cardIconContainer: {
    width: 60,
    height: 80,
    borderRadius: 30,
    backgroundColor: '#E0F4F2',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#40B5AD',
  },
  cardIconText: {
    fontSize: 30,
  },
  cardTextContainer: {
    marginLeft: 15,
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#006D5B',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
  },
});

export default Homepage;
const Homepage = ({ navigation }) => {
  
  // --- Dummy Data ---
  const userName = "John Doe";
  // Assuming a function for logging out/navigating away
  const handleLogout = () => {
    Alert.alert('Logout', 'You have been logged out.');
    // navigation.navigate('Authentication'); // Example navigation to login screen
  };

  // --- Navigation Handlers ---
  const goToProfile = () => {
    console.log('Navigating to Profile Screen');
    // navigation.navigate('Profile');
  };

  const goToCheckDisease = () => {
    console.log('Navigating to Check Disease Screen');
    // navigation.navigate('CheckDisease');
  };

  const goToViewRecords = () => {
    console.log('Navigating to View Records Screen');
    // navigation.navigate('ViewRecords');
  };

  // --- Reusable Navigation Card Component ---
  const NavCard = ({ iconText, title, subtitle, onPress }) => (
    <TouchableOpacity 
      style={styles.card}
      onPress={onPress}
    >
      <View style={styles.cardIconContainer}>
        <Text style={styles.cardIconText}>{iconText}</Text>
      </View>
      <View style={styles.cardTextContainer}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardSubtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}
      >
        <ScrollView contentContainerStyle={styles.container}>

          {/* --- Header: User Info and Logout --- */}
          <View style={styles.header}>
            <TouchableOpacity onPress={goToProfile} style={styles.userInfoContainer}>
              {/* Profile Image/Avatar */}
              <View style={styles.avatar}>
                {/*  */}
                {/* This is a simple text placeholder for the profile image as seen in the mockup */}
                <Text style={styles.avatarText}>J</Text>
                <Text style={styles.avatarText}>D</Text>
              </View>
              <View style={styles.profileTextContainer}>
                <Text style={styles.userNameText}>{userName}</Text>
                <Text style={styles.viewProfileText}>View Profile</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
              {/* Logout Icon placeholder: '→' */}
              <Text style={styles.logoutIcon}>&#8594;</Text>
            </TouchableOpacity>
          </View>

          {/* --- Welcome Section --- */}
          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeTitle}>
              Welcome to AI Dairy-Lens
            </Text>
            <Text style={styles.welcomeSubtitle}>
              Choose an option to get started
            </Text>
          </View>

          {/* --- Navigation Cards --- */}
          <View style={styles.navCardsContainer}>
            
            <NavCard
              iconText="👤" // Icon placeholder for Profile
              title="Profile"
              subtitle="Manage your account"
              onPress={goToProfile}
            />
            
            <NavCard
              iconText="🔎" // Icon placeholder for Check Disease (scan/detect)
              title="Check Disease"
              subtitle="Scan and detect diseases"
              onPress={goToCheckDisease}
            />
            
            <NavCard
              iconText="📋" // Icon placeholder for View Records
              title="View Records"
              subtitle="Browse disease history"
              onPress={goToViewRecords}
            />

          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

// --- Stylesheet ---
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff', // White background for the safe area
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#F7F4EB', // Light cream/beige background from the mockup
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: Platform.OS === 'android' ? 10 : 0, // A little extra margin for Android
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#40B5AD', // Secondary green color
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    borderWidth: 1,
    borderColor: '#006D5B', // Primary green border
  },
  avatarText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileTextContainer: {
    marginLeft: 10,
  },
  userNameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  viewProfileText: {
    fontSize: 14,
    color: '#666',
  },
  logoutButton: {
    padding: 10,
  },
  logoutIcon: {
    fontSize: 24,
    color: '#006D5B', // Primary green color
    fontWeight: 'bold',
    transform: [{ rotate: '180deg' }], // To make the arrow point right
  },
  welcomeSection: {
    marginBottom: 40,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#006D5B', // Primary green color
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#666',
  },
  navCardsContainer: {
    // Container for the cards, no specific styling needed unless we wanted grid layout
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // For Android shadow
  },
  cardIconContainer: {
    width: 60,
    height:80,
    borderRadius: 30,
    backgroundColor: '#E0F4F2', // Very light teal/green background for the icon
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#40B5AD', // Secondary green border
  },
  cardIconText: {
    fontSize: 30,
  },
  cardTextContainer: {
    marginLeft: 15,
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#006D5B', // Primary green color
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
  },
});

export default Homepage;
