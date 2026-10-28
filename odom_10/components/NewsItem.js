import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

const NewsItem = ({ headline, date, imageUrl, onSelect }) => {
  return (
    <View style={styles.cardContainer}>
      <Pressable 
        android_ripple={{ color: '#ccc' }} 
        style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
        onPress={onSelect}
      >
        <View style={styles.innerContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.headline} numberOfLines={2}>{headline}</Text>
            <Text style={styles.date}>{date}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    overflow: 'hidden',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.85,
  },
  innerContainer: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
  },
  image: {
    width: 90,
    height: 70,
    borderRadius: 8,
    backgroundColor: '#e1e1e1',
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  headline: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 6,
  },
  date: {
    fontSize: 12,
    color: '#888888',
  },
});