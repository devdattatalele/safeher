import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Image, Animated } from 'react-native';
import { BlurView } from 'expo-blur';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';

export default function SafetyArticlesScreen() {
  const articles = [
    {
      id: 1,
      title: 'Stay Safe While Walking Alone',
      preview: 'Learn essential tips for personal safety when walking alone...',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'Self-Defense Basics',
      preview: 'Simple but effective self-defense techniques every woman should know...',
      readTime: '8 min read',
    },
    {
      id: 3,
      title: 'Emergency Response Guide',
      preview: 'What to do in case of an emergency and how to get help quickly...',
      readTime: '6 min read',
    },
  ];

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <ThemedText style={styles.title}>Safety Articles</ThemedText>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="filter" size={24} color="#FF4D79" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.articleList}>
        {articles.map(article => (
          <Animated.View
            key={article.id}
            style={[styles.articleCard]}
          >
            <TouchableOpacity
              style={styles.articleTouchable}
              activeOpacity={0.8}
            >
              <View style={styles.articleContent}>
              <ThemedText style={styles.articleTitle}>{article.title}</ThemedText>
              <ThemedText style={styles.articlePreview}>{article.preview}</ThemedText>
              <View style={styles.articleMeta}>
                <ThemedText style={styles.readTime}>{article.readTime}</ThemedText>
                <Ionicons name="bookmark-outline" size={20} color="#FF4D79" />
              </View>
            </View>
            </TouchableOpacity>
          </Animated.View>
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
  filterButton: {
    padding: 8,
  },
  articleList: {
    flex: 1,
  },
  articleCard: {
    borderRadius: 16,
    marginBottom: 16,
    backgroundColor: '#FFF',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 4,
  },
  articleTouchable: {
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#FFE4E4',
  },
  articleContent: {
    gap: 8,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF4D79',
  },
  articlePreview: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  articleMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  readTime: {
    fontSize: 12,
    color: '#666',
  },
});