import React from 'react';
import NewsList from '../components/NewsList';
import { DUMMY_NEWS } from '../data/dummy-data';

const TechNewsScreen = ({ navigation }) => {
  const techNewsItems = DUMMY_NEWS.filter((item) => item.category === 'Tech');
  return <NewsList items={techNewsItems} navigation={navigation} />;
};

export default TechNewsScreen;