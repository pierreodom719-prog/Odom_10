import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BookmarkedNewsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bookmarked News Screen</Text>
      <Text style={styles.subtext}>This page is left empty for future implementation.</Text>
    </View>
  );
};

export default BookmarkedNewsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f6f8',
    padding: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  subtext: {
    fontSize: 14,
    color: '#777777',
    textAlign: 'center',
  },
});