import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get("screen");

export default function App() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.boxContainer}>
        <Image
          source={{uri: 'https://pbs.twimg.com/profile_images/1331901757643866112/lYi-JL6i_400x400.jpg'}}
          style={styles.img}
        />
        <Text style={styles.textName}>Agung Mubarok</Text>
      </View>
      <View style={styles.boxMoney}>
        <Text style={styles.textValue}>Total Value</Text>
        <Text style={styles.textMoney}>Rp2.500.000,00</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  boxContainer: {
    width: width,
    height: height * 0.4,
    backgroundColor: '#7367f0',
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: width * 0.3,
    height: height * 0.3,
    borderRadius: width
  },
  textName: {
    marginTop: 15,
    fontWeight: 'bold'
  },
  boxMoney: {
    width: width * 0.8,
    height: 80,
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 0.5,
    alignSelf: 'center',
    marginTop: -40,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textMoney: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24
  },
  textValue: {
    color: '#7367f0',
    fontSize: 12,
    fontWeight: 'normal'
  }
});