import React, { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BookmarkButton = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmarkHandler = () => {
    setIsBookmarked((prevState) => !prevState);
  };

  return (
    <Pressable
      onPress={toggleBookmarkHandler}
      style={({ pressed }) => [styles.button, pressed ? styles.pressed : null]}
    >
      <Ionicons
        name={isBookmarked ? 'bookmark' : 'bookmark-outline'}
        size={24}
        color="#ffffff"
      />
    </Pressable>
  );
};

export default BookmarkButton;

const styles = StyleSheet.create({
  button: {
    marginRight: 12,
    padding: 4,
  },
  pressed: {
    opacity: 0.6,
  },
});