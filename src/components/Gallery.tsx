import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import PhotoItem from './PhotoItem';
import useFetch from '../hook/useFetch';

const GalleryScreen = () => {
  const {data, isloading, error} = useFetch<string>(
    'https://api.github.com/repos/ShevchukSasha/MobileLabs02/contents/data/images',    
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
