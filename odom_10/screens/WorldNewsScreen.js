import React from 'react';
import NewsList from '../components/NewsList';
import { DUMMY_NEWS } from '../data/dummy-data';

const WorldNewsScreen = ({ navigation }) => {
  const worldNewsItems = DUMMY_NEWS.filter((item) => item.category === 'World');
  return <NewsList items={worldNewsItems} navigation={navigation} />;
};

export default WorldNewsScreen;