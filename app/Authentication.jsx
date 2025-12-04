import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import Logo from '../assets/img/dairy.png';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert
} from 'react-native';

const Authentication = ({ navigation }) => {
  const router = useRouter();

  // Login states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  
  // Signup states
  const [isSignUp, setIsSignUp] = useState(false);
  const [signupUsername, setSignupUsername] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSignupPasswordVisible, setIsSignupPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  
  // Forgot Password states
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isResetPassword, setIsResetPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const [isConfirmNewPasswordVisible, setIsConfirmNewPasswordVisible] = useState(false);

  // Screen management
  const [currentScreen, setCurrentScreen] = useState('login'); // 'login', 'signup', 'forgot', 'reset'

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    
    console.log('Logging in with:', { email, password });
    Alert.alert('Success', 'Login successful!');
    
    // Navigate to homepage after successful login
    router.replace('/homepage');
  };

  const handleSignup = () => {
    if (!signupUsername || !signupEmail || !signupPassword || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    
    if (signupPassword !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    
    console.log('Signing up with:', { 
      username: signupUsername, 
      email: signupEmail, 
      password: signupPassword 
    });
    Alert.alert('Success', 'Account created successfully!');

    // Optional: navigate to homepage after signup
    router.replace('/homepage');
  };

  const handleForgotPassword = () => {
    if (!forgotEmail) {
      Alert.alert('Error', 'Please enter your email');
      return;
    }
    
    console.log('Sending verification code to:', forgotEmail);
    Alert.alert('Verification Sent', 'A verification code has been sent to your email');
    
    // Move to reset password screen
    setCurrentScreen('reset');
  };

  const handleResetPassword = () => {
    if (!verificationCode || !newPassword || !confirmNewPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    
    if (newPassword !== confirmNewPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    
    console.log('Resetting password with:', { 
      email: forgotEmail, 
      code: verificationCode, 
      newPassword: newPassword 
    });
    Alert.alert('Success', 'Password reset successfully!');
    
    // Return to login screen
    setCurrentScreen('login');
    // Reset all form fields
    setForgotEmail('');
    setVerificationCode('');
    setNewPassword('');
    setConfirmNewPassword('');
  };

  const goToLogin = () => {
    setCurrentScreen('login');
    resetAllForms();
  };

  const goToSignup = () => {
    setCurrentScreen('signup');
    resetAllForms();
  };

  const goToForgotPassword = () => {
    setCurrentScreen('forgot');
    resetAllForms();
  };

  const resetAllForms = () => {
    setEmail('');
    setPassword('');
    setSignupUsername('');
    setSignupEmail('');
    setSignupPassword('');
    setConfirmPassword('');
    setForgotEmail('');
    setVerificationCode('');
    setNewPassword('');
    setConfirmNewPassword('');
  };

  const renderLoginScreen = () => (
    <View style={{flex:2, backgroundColor:'#ffff', borderTopLeftRadius:30, borderTopRightRadius:30, paddingHorizontal:25, paddingVertical:30}}>
      
      {/* Email Input */}
      <View style={{marginBottom:20}}>
        <Text style={{fontSize:16, color:'#006D5B', fontWeight:'bold', marginBottom:8}}>Username</Text>
        <TextInput
          style={{backgroundColor:'#F0F0F0', borderRadius:10, paddingHorizontal:15, paddingVertical:12, fontSize:16, color:'#333', borderWidth:1, borderColor:'#40B5AD'}}
          placeholder="Enter your email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
      </View>

      {/* Password Input */}
      <View style={{marginBottom:15}}>
        <Text style={{fontSize:16, color:'#006D5B', fontWeight:'bold', marginBottom:8}}>Password</Text>
        <View style={{flexDirection:'row', alignItems:'center', backgroundColor:'#F0F0F0', borderRadius:10, borderWidth:1, borderColor:'#40B5AD'}}>
          <TextInput
            style={{flex:1, paddingHorizontal:15, paddingVertical:12, fontSize:16, color:'#333'}}
            placeholder="Enter your password"
            placeholderTextColor="#888"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity 
            style={{paddingHorizontal:15}}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <Text style={{fontSize:20}}>{isPasswordVisible ? '🙈' : '👁️'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Forgot Password */}
      <TouchableOpacity 
        style={{alignSelf:'center', marginBottom:25}}
        onPress={goToForgotPassword}
      >
        <Text style={{color:'#40B5AD', fontSize:14, fontWeight:'bold'}}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity 
        style={{backgroundColor:(!email || !password) ? '#006D5B' : '#40B5AD', borderRadius:15, padding:15, alignItems:'center', marginBottom:20}}
        onPress={handleLogin}
        disabled={!email || !password}
      >
        <Text style={{color:'#ffff', fontSize:20, fontWeight:'bold'}}>Login</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={{flexDirection:'row', alignItems:'center', marginBottom:20}}>
        <View style={{flex:1, height:1, backgroundColor:'#E0E0E0'}} />
        <Text style={{paddingHorizontal:15, color:'#888', fontSize:14}}>or</Text>
        <View style={{flex:1, height:1, backgroundColor:'#E0E0E0'}} />
      </View>

      {/* Create Account */}
      <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', marginBottom:20}}>
        <Text style={{fontSize:16, color:'#666'}}>Don't have an account? </Text>
        <TouchableOpacity onPress={goToSignup}>
          <Text style={{fontSize:16, color:'#40B5AD', fontWeight:'bold'}}>Create Account</Text>
        </TouchableOpacity>
      </View>

     
    </View>
  );

  const renderSignupScreen = () => (
    <View style={{flex:2, backgroundColor:'#ffff', borderTopLeftRadius:30, borderTopRightRadius:30, paddingHorizontal:25, paddingVertical:30}}>
      
      {/* Username Input */}
      <View style={{marginBottom:20}}>
        <Text style={{fontSize:16, color:'#006D5B', fontWeight:'bold', marginBottom:8}}>Username</Text>
        <TextInput
          style={{backgroundColor:'#F0F0F0', borderRadius:10, paddingHorizontal:15, paddingVertical:12, fontSize:16, color:'#333', borderWidth:1, borderColor:'#40B5AD'}}
          placeholder="Choose a username"
          placeholderTextColor="#888"
          value={signupUsername}
          onChangeText={setSignupUsername}
          autoCapitalize="none"
        />
      </View>

      {/* Email Input */}
      <View style={{marginBottom:20}}>
        <Text style={{fontSize:16, color:'#006D5B', fontWeight:'bold', marginBottom:8}}>Email</Text>
        <TextInput
          style={{backgroundColor:'#F0F0F0', borderRadius:10, paddingHorizontal:15, paddingVertical:12, fontSize:16, color:'#333', borderWidth:1, borderColor:'#40B5AD'}}
          placeholder="Enter your email"
          placeholderTextColor="#888"
          value={signupEmail}
          onChangeText={setSignupEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
      </View>

      {/* Password Input */}
      <View style={{marginBottom:20}}>
        <Text style={{fontSize:16, color:'#006D5B', fontWeight:'bold', marginBottom:8}}>Password</Text>
        <View style={{flexDirection:'row', alignItems:'center', backgroundColor:'#F0F0F0', borderRadius:10, borderWidth:1, borderColor:'#40B5AD'}}>
          <TextInput
            style={{flex:1, paddingHorizontal:15, paddingVertical:12, fontSize:16, color:'#333'}}
            placeholder="Create a password"
            placeholderTextColor="#888"
            value={signupPassword}
            onChangeText={setSignupPassword}
            secureTextEntry={!isSignupPasswordVisible}
          />
          <TouchableOpacity 
            style={{paddingHorizontal:15}}
            onPress={() => setIsSignupPasswordVisible(!isSignupPasswordVisible)}
          >
            <Text style={{fontSize:20}}>{isSignupPasswordVisible ? '🙈' : '👁️'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Confirm Password Input */}
      <View style={{marginBottom:25}}>
        <Text style={{fontSize:16, color:'#006D5B', fontWeight:'bold', marginBottom:8}}>Confirm Password</Text>
        <View style={{flexDirection:'row', alignItems:'center', backgroundColor:'#F0F0F0', borderRadius:10, borderWidth:1, borderColor:'#40B5AD'}}>
          <TextInput
            style={{flex:1, paddingHorizontal:15, paddingVertical:12, fontSize:16, color:'#333'}}
            placeholder="Confirm your password"
            placeholderTextColor="#888"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!isConfirmPasswordVisible}
          />
          <TouchableOpacity 
            style={{paddingHorizontal:15}}
            onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
          >
            <Text style={{fontSize:20}}>{isConfirmPasswordVisible ? '🙈' : '👁️'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Create Account Button */}
      <TouchableOpacity 
        style={{
          backgroundColor: (!signupUsername || !signupEmail || !signupPassword || !confirmPassword) 
            ? '#006D5B' 
            : '#40B5AD', 
          borderRadius:15, 
          padding:15, 
          alignItems:'center', 
          marginBottom:20
        }}
        onPress={handleSignup}
        disabled={!signupUsername || !signupEmail || !signupPassword || !confirmPassword}
      >
        <Text style={{color:'#ffff', fontSize:20, fontWeight:'bold'}}>Create Account</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={{flexDirection:'row', alignItems:'center', marginBottom:20}}>
        <View style={{flex:1, height:1, backgroundColor:'#E0E0E0'}} />
        <Text style={{paddingHorizontal:15, color:'#888', fontSize:14}}>or</Text>
        <View style={{flex:1, height:1, backgroundColor:'#E0E0E0'}} />
      </View>

      {/* Already have an account */}
      <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', marginBottom:20}}>
        <Text style={{fontSize:16, color:'#666'}}>Already have an account? </Text>
        <TouchableOpacity onPress={goToLogin}>
          <Text style={{fontSize:16, color:'#40B5AD', fontWeight:'bold'}}>Login</Text>
        </TouchableOpacity>
      </View>

    
    </View>
  );

  const renderForgotPasswordScreen = () => (
    <View style={{flex:2, backgroundColor:'#ffff', borderTopLeftRadius:30, borderTopRightRadius:30, paddingHorizontal:25, paddingVertical:30}}>
      
      {/* Info Text */}
      <View style={{marginBottom:30, alignItems:'center'}}>
        <Text style={{fontSize:18, color:'#006D5B', fontWeight:'bold', textAlign:'center', marginBottom:10}}>
          Reset Your Password
        </Text>
        <Text style={{fontSize:14, color:'#666', textAlign:'center', lineHeight:20}}>
          Enter your email address and we'll send you a verification code to reset your password.
        </Text>
      </View>

      {/* Email Input */}
      <View style={{marginBottom:25}}>
        <Text style={{fontSize:16, color:'#006D5B', fontWeight:'bold', marginBottom:8}}>Email Address</Text>
        <TextInput
          style={{backgroundColor:'#F0F0F0', borderRadius:10, paddingHorizontal:15, paddingVertical:12, fontSize:16, color:'#333', borderWidth:1, borderColor:'#40B5AD'}}
          placeholder="Enter your email"
          placeholderTextColor="#888"
          value={forgotEmail}
          onChangeText={setForgotEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
      </View>

      {/* Send Verification Button */}
      <TouchableOpacity 
        style={{
          backgroundColor: !forgotEmail ? '#006D5B' : '#40B5AD', 
          borderRadius:15, 
          padding:15, 
          alignItems:'center', 
          marginBottom:20
        }}
        onPress={handleForgotPassword}
        disabled={!forgotEmail}
      >
        <Text style={{color:'#ffff', fontSize:20, fontWeight:'bold'}}>Send Verification Code</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={{flexDirection:'row', alignItems:'center', marginBottom:20}}>
        <View style={{flex:1, height:1, backgroundColor:'#E0E0E0'}} />
        <Text style={{paddingHorizontal:15, color:'#888', fontSize:14}}>or</Text>
        <View style={{flex:1, height:1, backgroundColor:'#E0E0E0'}} />
      </View>

      {/* Back to Login */}
      <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', marginBottom:20}}>
        <Text style={{fontSize:16, color:'#666'}}>Remember your password? </Text>
        <TouchableOpacity onPress={goToLogin}>
          <Text style={{fontSize:16, color:'#40B5AD', fontWeight:'bold'}}>Login</Text>
        </TouchableOpacity>
       
      </View>

    
    </View>
  );

  const renderResetPasswordScreen = () => (
    <View style={{flex:2, backgroundColor:'#ffff', borderTopLeftRadius:30, borderTopRightRadius:30, paddingHorizontal:25, paddingVertical:30}}>
      
      {/* Info Text */}
      <View style={{marginBottom:30, alignItems:'center'}}>
        <Text style={{fontSize:18, color:'#006D5B', fontWeight:'bold', textAlign:'center', marginBottom:10}}>
          Create New Password
        </Text>
        <Text style={{fontSize:14, color:'#666', textAlign:'center', lineHeight:20}}>
          Enter the verification code sent to your email and create a new password.
        </Text>
      </View>

      {/* Verification Code Input */}
      <View style={{marginBottom:20}}>
        <Text style={{fontSize:16, color:'#006D5B', fontWeight:'bold', marginBottom:8}}>Verification Code</Text>
        <TextInput
          style={{backgroundColor:'#F0F0F0', borderRadius:10, paddingHorizontal:15, paddingVertical:12, fontSize:16, color:'#333', borderWidth:1, borderColor:'#40B5AD'}}
          placeholder="Enter 6-digit code"
          placeholderTextColor="#888"
          value={verificationCode}
          onChangeText={setVerificationCode}
          autoCapitalize="none"
          keyboardType="number-pad"
          maxLength={6}
        />
      </View>

      {/* New Password Input */}
      <View style={{marginBottom:20}}>
        <Text style={{fontSize:16, color:'#006D5B', fontWeight:'bold', marginBottom:8}}>New Password</Text>
        <View style={{flexDirection:'row', alignItems:'center', backgroundColor:'#F0F0F0', borderRadius:10, borderWidth:1, borderColor:'#40B5AD'}}>
          <TextInput
            style={{flex:1, paddingHorizontal:15, paddingVertical:12, fontSize:16, color:'#333'}}
            placeholder="Create new password"
            placeholderTextColor="#888"
            value={newPassword}
            onChangeText={setNewPassword}
            secureTextEntry={!isNewPasswordVisible}
          />
          <TouchableOpacity 
            style={{paddingHorizontal:15}}
            onPress={() => setIsNewPasswordVisible(!isNewPasswordVisible)}
          >
            <Text style={{fontSize:20}}>{isNewPasswordVisible ? '🙈' : '👁️'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Confirm New Password Input */}
      <View style={{marginBottom:25}}>
        <Text style={{fontSize:16, color:'#006D5B', fontWeight:'bold', marginBottom:8}}>Confirm New Password</Text>
        <View style={{flexDirection:'row', alignItems:'center', backgroundColor:'#F0F0F0', borderRadius:10, borderWidth:1, borderColor:'#40B5AD'}}>
          <TextInput
            style={{flex:1, paddingHorizontal:15, paddingVertical:12, fontSize:16, color:'#333'}}
            placeholder="Confirm new password"
            placeholderTextColor="#888"
            value={confirmNewPassword}
            onChangeText={setConfirmNewPassword}
            secureTextEntry={!isConfirmNewPasswordVisible}
          />
          <TouchableOpacity 
            style={{paddingHorizontal:15}}
            onPress={() => setIsConfirmNewPasswordVisible(!isConfirmNewPasswordVisible)}
          >
            <Text style={{fontSize:20}}>{isConfirmNewPasswordVisible ? '🙈' : '👁️'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Reset Password Button */}
      <TouchableOpacity 
        style={{
          backgroundColor: (!verificationCode || !newPassword || !confirmNewPassword) 
            ? '#006D5B' 
            : '#40B5AD', 
          borderRadius:15, 
          padding:15, 
          alignItems:'center', 
          marginBottom:20
        }}
        onPress={handleResetPassword}
        disabled={!verificationCode || !newPassword || !confirmNewPassword}
      >
        <Text style={{color:'#ffff', fontSize:20, fontWeight:'bold'}}>Reset Password</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={{flexDirection:'row', alignItems:'center', marginBottom:20}}>
        <View style={{flex:1, height:1, backgroundColor:'#E0E0E0'}} />
        <Text style={{paddingHorizontal:15, color:'#888', fontSize:14}}>or</Text>
        <View style={{flex:1, height:1, backgroundColor:'#E0E0E0'}} />
      </View>

      {/* Back to Login */}
      <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', marginBottom:20}}>
        <Text style={{fontSize:16, color:'#666'}}>Back to </Text>
        <TouchableOpacity onPress={goToLogin}>
          <Text style={{fontSize:16, color:'#40B5AD', fontWeight:'bold'}}>Login</Text>
        </TouchableOpacity>
      </View>

      
    </View>
  );

  const getScreenTitle = () => {
    switch(currentScreen) {
      case 'signup': return 'Create Account';
      case 'forgot': return 'Forgot Password';
      case 'reset': return 'Reset Password';
      default: return 'Welcome';
    }
  };

  const getScreenSubtitle = () => {
    switch(currentScreen) {
      case 'signup': return 'Join AI Dairy Lens';
      case 'forgot': return 'Reset your password';
      case 'reset': return 'Create new password';
      default: return 'Login to continue';
    }
  };

  const renderFormSection = () => {
    switch(currentScreen) {
      case 'signup': return renderSignupScreen();
      case 'forgot': return renderForgotPasswordScreen();
      case 'reset': return renderResetPasswordScreen();
      default: return renderLoginScreen();
    }
  };

  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#006D5B'}}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex:1}}
      >
        <ScrollView 
          contentContainerStyle={{flexGrow:1, justifyContent:'center'}}
          showsVerticalScrollIndicator={false}
        >
          {/* Header Section */}
          <View style={{flex:1, justifyContent:'center', alignItems:'center', paddingVertical:30}}>
            
            {/* Back Arrow for non-login screens */}
            {currentScreen !== 'login' && (
              <TouchableOpacity 
                style={{position: 'absolute', left: 25, top: 40, zIndex: 10}}
                onPress={() => {
                  if (currentScreen === 'reset') {
                    setCurrentScreen('forgot');
                  } else {
                    setCurrentScreen('login');
                  }
                }}
              >
                <Text style={{fontSize: 28, color: '#ffff'}}>←</Text>
              </TouchableOpacity>
            )}
            
            <Image source={Logo} style={{width:150, height:150, marginTop:70}} />
            <Text style={{fontSize:32, color:'#ffff', fontWeight:'bold', marginBottom:10,marginTop:15}}>AI Dairy-Lens</Text>
            <Text style={{fontSize:24, color:'#ffff', fontWeight:'bold'}}>
              {getScreenTitle()}
            </Text>
            <Text style={{fontSize:18, color:'#ffff', marginTop:15}}>
              {getScreenSubtitle()}
            </Text>
          </View>

          {/* Form Section */}
          {renderFormSection()}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Authentication;