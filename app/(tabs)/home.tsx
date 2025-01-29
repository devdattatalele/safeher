import React from 'react';
import { StyleSheet, View, TouchableOpacity, Alert } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '@/components/ThemedText';

export default function HomeScreen() {
  const sendEmergencyAlert = () => {
    Alert.alert(
      'Emergency Alert',
      'Notification Sent to all emergency contacts!',
      [{ text: 'OK' }]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <ThemedText style={styles.welcomeText}>Welcome to Safe Her</ThemedText>
        <ThemedText style={styles.subtitleText}>Your safety is our priority</ThemedText>
      </View>
      
      <TouchableOpacity
        style={styles.emergencyButton}
        onPress={sendEmergencyAlert}
      >
        <BlurView intensity={100} tint="light" style={styles.emergencyBlur}>
          <Ionicons name="alert-circle" size={24} color="#FF4D79" />
          <ThemedText style={styles.emergencyButtonText}>EMERGENCY</ThemedText>
        </BlurView>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitleText: {
    fontSize: 16,
    color: '#666',
  },
  emergencyButton: {
    position: 'absolute',
    bottom: 32,
    alignSelf: 'center',
    borderRadius: 30,
    overflow: 'hidden',
  },
  emergencyBlur: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    gap: 8,
  },
  emergencyButtonText: {
    color: '#FF4D79',
    fontSize: 16,
    fontWeight: 'bold',
  },
});