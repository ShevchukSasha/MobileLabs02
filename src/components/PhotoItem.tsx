import React, {FC} from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';

interface PhotoItemInterdace {
  sourceImg: any;
}

const {width} = Dimensions.get('window');
const imageWidth = (width - 30) / 2;

const PhotoItem: FC<PhotoItemInterdace> = ({sourceImg}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: sourceImg}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    width: imageWidth,
    aspectRatio: 1,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default PhotoItem;
