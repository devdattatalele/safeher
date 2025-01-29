import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';

export default function ContactsScreen() {
  const contacts = [
    { id: 1, name: 'Emergency Contact 1', phone: '+1 234 567 8900' },
    { id: 2, name: 'Emergency Contact 2', phone: '+1 234 567 8901' },
    { id: 3, name: 'Emergency Contact 3', phone: '+1 234 567 8902' },
  ];

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <ThemedText style={styles.title}>Trusted Contacts</ThemedText>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add-circle" size={24} color="#FF4D79" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.contactList}>
        {contacts.map(contact => (
          <View key={contact.id} style={styles.contactCard}>
            <View style={styles.contactInfo}>
              <ThemedText style={styles.contactName}>{contact.name}</ThemedText>
              <ThemedText style={styles.contactPhone}>{contact.phone}</ThemedText>
            </View>
            <View style={styles.contactActions}>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="call" size={20} color="#FF4D79" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="mail" size={20} color="#FF4D79" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="trash" size={20} color="#FF4D79" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
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
  contactList: {
    flex: 1,
  },
  contactCard: {
    backgroundColor: '#FFE4E4',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF4D79',
    marginBottom: 4,
  },
  contactPhone: {
    fontSize: 14,
    color: '#666',
  },
  contactActions: {
    flexDirection: 'row',
    gap: 12,
  },
  actionButton: {
    padding: 8,
  },
});