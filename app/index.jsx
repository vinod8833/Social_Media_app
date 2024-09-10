import { View, Text, Button } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { theme } from '../constants/theme'; 
import { Icon } from '../assets/icons'
import ScreenWrapper from '../components/ScreenWrapper';
import BackButton from '../components/BackButton';
import { StatusBar } from 'expo-status-bar';
  
const Index = () => {
  const router = useRouter();

  return (
    <ScreenWrapper>
      <Text>Index</Text>
      <Button 
        title="Welcome" 
        onPress={() => router.push('welcome')} 
      />
    </ScreenWrapper>
  );
};

export default Index;
