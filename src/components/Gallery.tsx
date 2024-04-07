import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import PhotoItem from './PhotoItem';
import useFetch from '../hook/useFetch';

const GalleryScreen = () => {
  const {data, isloading, error} = useFetch<string>(
    'https://raw.githubusercontent.com/ShevchukSasha/MobileLabs01/main/data/news.json?token=GHSAT0AAAAAACPEU5ILFULOXD5EIN2NBYA6ZQSUC7A',
    
    'images',
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {isloading && <Text>Loading...</Text>}
      {error && <Text>{error}</Text>}
      {data.map((item, index) => {
        return <PhotoItem key={index} sourceImg={item} />;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});

export default GalleryScreen;
