import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import NewsItem from './NewsItem';

const NewsList = ({ items, navigation }) => {
  const renderNewsItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate('NewsDetail', {
        newsId: itemData.item.id,
        headline: itemData.item.headline,
      });
    };

    return (
      <NewsItem
        headline={itemData.item.headline}
        date={itemData.item.date}
        imageUrl={itemData.item.imageUrl}
        onSelect={pressHandler}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderNewsItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default NewsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
  },
  listContent: {
    paddingVertical: 8,
  },
});