import React from 'react';
import NewsList from '../components/NewsList';
import { DUMMY_NEWS } from '../data/dummy-data';

const USNewsScreen = ({ navigation }) => {
  const usNewsItems = DUMMY_NEWS.filter((item) => item.category === 'US');
  return <NewsList items={usNewsItems} navigation={navigation} />;
};

export default USNewsScreen;