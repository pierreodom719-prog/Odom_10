import React, { useLayoutEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { DUMMY_NEWS } from '../data/dummy-data';
import BookmarkButton from '../components/BookmarkButton';

const NewsDetailScreen = ({ route, navigation }) => {
  const newsId = route.params.newsId;
  const selectedNews = DUMMY_NEWS.find((item) => item.id === newsId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedNews ? selectedNews.headline : 'News Detail',
      headerRight: () => <BookmarkButton />,
    });
  }, [navigation, selectedNews]);

  if (!selectedNews) {
    return (
      <View style={styles.container}>
        <Text>Article not found!</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.screen}>
      <Image source={{ uri: selectedNews.imageUrl }} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.headline}>{selectedNews.headline}</Text>
        
        <View style={styles.metaRow}>
          <Text style={styles.agency}>{selectedNews.agency}</Text>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.author}>By {selectedNews.author}</Text>
        </View>

        <Text style={styles.date}>{selectedNews.date}</Text>

        <View style={styles.divider} />

        <Text style={styles.description}>{selectedNews.description}</Text>
      </View>
    </ScrollView>
  );
};

export default NewsDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 240,
  },
  contentContainer: {
    padding: 20,
  },
  headline: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a1a1a',
    lineHeight: 30,
    marginBottom: 12,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  agency: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0066cc',
  },
  bullet: {
    marginHorizontal: 8,
    color: '#888888',
  },
  author: {
    fontSize: 14,
    color: '#555555',
  },
  date: {
    fontSize: 12,
    color: '#888888',
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#e2e8f0',
    marginVertical: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 26,
    color: '#333333',
  },
});