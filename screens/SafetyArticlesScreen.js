import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function SafetyArticlesScreen() {
  const renderArticleCard = (title, description, icon) => (
    <TouchableOpacity style={styles.articleCard}>
      <View style={styles.articleIcon}>
        <Ionicons name={icon} size={32} color="#FF4D79" />
      </View>
      <View style={styles.articleContent}>
        <Text style={styles.articleTitle}>{title}</Text>
        <Text style={styles.articleDescription}>{description}</Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#FF4D79" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Safety Articles</Text>
        <Text style={styles.headerSubtitle}>Stay informed, stay safe</Text>
      </View>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {renderArticleCard(
          'Personal Safety Tips',
          'Learn essential tips for staying safe in various situations',
          'shield-checkmark'
        )}
        {renderArticleCard(
          'Self Defense Basics',
          'Simple but effective self-defense techniques',
          'fitness'
        )}
        {renderArticleCard(
          'Emergency Response',
          'How to respond in emergency situations',
          'warning'
        )}
        {renderArticleCard(
          'Safe Travel Guide',
          'Tips for safe travel and navigation',
          'map'
        )}
        {renderArticleCard(
          'Digital Safety',
          'Protect yourself in the digital world',
          'lock-closed'
        )}
        {renderArticleCard(
          'Community Guidelines',
          'Working together for a safer community',
          'people'
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    backgroundColor: '#FF4D79',
    padding: 20,
    paddingTop: 60,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#FFE4E4',
    marginTop: 5,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  articleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#FFE4E4',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  articleIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFE4E4',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  articleContent: {
    flex: 1,
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  articleDescription: {
    fontSize: 14,
    color: '#666',
  },
});