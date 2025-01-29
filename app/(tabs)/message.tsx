import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';

export default function MessageScreen() {
  const messages = [
    { id: 1, title: 'Emergency Alert', content: 'I need help! My location is...', time: '5 min ago' },
    { id: 2, title: 'Safe Arrival', content: 'I have reached safely.', time: '1 hour ago' },
    { id: 3, title: 'Location Share', content: 'Sharing my live location...', time: '2 hours ago' },
  ];

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <ThemedText style={styles.title}>Emergency Messages</ThemedText>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add-circle" size={24} color="#FF4D79" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.messageList}>
        {messages.map(message => (
          <TouchableOpacity key={message.id} style={styles.messageCard}>
            <View style={styles.messageHeader}>
              <ThemedText style={styles.messageTitle}>{message.title}</ThemedText>
              <ThemedText style={styles.messageTime}>{message.time}</ThemedText>
            </View>
            <ThemedText style={styles.messageContent}>{message.content}</ThemedText>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.sosButton}>
        <Ionicons name="alert-circle" size={24} color="#FFF" />
        <ThemedText style={styles.sosButtonText}>Send SOS</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  addButton: {
    padding: 8,
  },
  messageList: {
    flex: 1,
  },
  messageCard: {
    backgroundColor: '#FFE4E4',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  messageTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF4D79',
  },
  messageTime: {
    fontSize: 12,
    color: '#666',
  },
  messageContent: {
    fontSize: 14,
    color: '#333',
  },
  sosButton: {
    backgroundColor: '#FF4D79',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 25,
    marginTop: 16,
  },
  sosButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});