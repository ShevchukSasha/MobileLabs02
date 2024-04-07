import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import NewsItem from './NewsItem';
import useFetch from '../hook/useFetch';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
}

const News: React.FC = () => {
  const {data, isLoading, error} = useFetch<NewsItem>(
    'https://raw.githubusercontent.com/ShevchukSasha/MobileLabs02/main/data/news.json'
  );
  console.log(data);
  return (
    <ScrollView>
      {isLoading && <Text>Loading...</Text>}
      {error && <Text>{error}</Text>}
      {data.map((item, index) => {
        return (
          <View key={index}>
            <NewsItem
              title={item.title}
              description={item.description}
              date={item.date}
              img={`https://raw.githubusercontent.com/ShevchukSasha/MobileLabs02/main/data/${item.image}`}
            />
          </View>
        );
      })}
    </ScrollView>
  );
};
export default News;
