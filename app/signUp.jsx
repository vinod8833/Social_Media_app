import { Alert, Pressable, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'; 
import React, { useState } from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import { theme } from '../constants/theme'; 
import { hp, wp } from '../helpers/common'; 
import Icon from '../assets/icons'; 
import { useRouter } from 'expo-router';
import BackButton from '../components/BackButton';

const SignUp = () => {
  const router = useRouter(); 
  const [email, setEmail] = useState('');  
  const [name, setName] = useState('');  
  const [password, setPassword] = useState('');  
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (!email || !name || !password) {
      Alert.alert('Sign Up', "Please fill in all the fields!");
      return;
    }
    // Add sign-up logic here
    console.log('Email:', email, 'Name:', name, 'Password:', password);
  };

  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <BackButton router={router} /> 

        {/* Welcome */}
        <View>
          <Text style={styles.welcomeText}>Let's</Text> 
          <Text style={styles.welcomeText}>Get Started</Text> 
        </View>

        {/* Form */}
        <View style={styles.form}>
          <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>
            Please fill the details to create a new account
          </Text>      
          <View style={styles.inputContainer}>
            <Icon name="mail" size={26} strokeWidth={1.6} />
            <TextInput
              style={styles.input}
              placeholder='Enter your email'
              value={email}
              onChangeText={setEmail}  
            />
          </View>
          <View style={styles.inputContainer}>
            <Icon name="user" size={26} strokeWidth={1.6} />
            <TextInput
              style={styles.input}
              placeholder='Enter your name'
              value={name}
              onChangeText={setName}  
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon name="lock" size={26} strokeWidth={1.6} />
            <TextInput
              style={styles.input}
              placeholder='Enter your password'
              secureTextEntry  
              value={password}
              onChangeText={setPassword}  
            />
          </View>
          
         {/* Button */}
         <Pressable 
           style={({ pressed }) => [
             styles.signUpButton,
             { backgroundColor: pressed ? theme.colors.primaryLight : theme.colors.primary }
           ]}
           onPress={onSubmit}
           disabled={loading}
         >
           <Text style={styles.signUpButtonText}>
             {loading ? 'Loading...' : 'Sign Up'}
           </Text>
         </Pressable>
        </View>
        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Already have an account?
          </Text>
          <Pressable onPress={()=> router.push('login')}>
            <Text style={[styles.footerText, { color: theme.colors.primaryDark, fontWeight: theme.fonts.semibold }]}>
              Login
            </Text>
          </Pressable>
        </View> 
      </View>
    </ScreenWrapper>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5), 
  },
  welcomeText: {  
    fontSize: hp(4), 
    fontWeight: theme.fonts.bold,  
    color: theme.colors.text,  
  },
  form: {
    gap: 25,  
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.text,
    borderRadius: theme.radius.md,
    paddingHorizontal: 10,
    paddingVertical: 8,
    gap: 10,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    fontSize: hp(2),
    color: theme.colors.text,
  },
  forgetPassword: {
    textAlign: 'right',
    fontWeight: theme.fonts.semibold,
    color: theme.colors.text,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  footerText: { 
    textAlign: 'center',
    color: theme.colors.text,
    fontSize: hp(1.6), 
  },
  signUpButton: {
    paddingVertical: hp(1.6),      // More padding for larger button
    paddingHorizontal: wp(30),   // Adjust width based on screen size
    backgroundColor: theme.colors.primary, // Primary theme color for the button
    borderRadius: theme.radius.md,   // Rounded corners for modern look
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,   // Shadow effect for button
  },
  signUpButtonText: {
    fontSize: hp(2.2),   // Slightly larger font for readability
    color: 'white',      // White text for contrast
    fontWeight: theme.fonts.bold,   // Bold text for emphasis
  }
});
