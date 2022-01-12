import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

const Done = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../image/background.jpg')}
        resizeMode="cover"
        style={styles.container}>
        <View>
          <Image style={styles.logo} source={require('../image/logo.png')} />
          <Text style={styles.textDone}>DONE</Text>
          <ImageBackground
            source={require('../image/done.png')}
            resizeMode="cover"
            style={styles.done}></ImageBackground>
          <View
            style={{flexDirection: 'row', alignSelf: 'center', marginTop: 20}}>
            <Text style={styles.textEnjoy}> Enjoy your noodles</Text>
            <Image style={styles.tim} source={require('../image/tim.png')} />
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
              <Image
                style={styles.tohome}
                source={require('../image/tohome.png')}
              />
            </TouchableOpacity>
            <Text style={styles.text_below}>Get them below</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Outof')}>
            <Image
              style={styles.down}
              source={require('../image/down.png')}
            />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 150,
    height: 120,
    alignSelf: 'center',
    marginTop: 10,
  },
  textDone: {
    alignSelf: 'center',
    fontSize: 40,
    marginTop: 10,
    fontFamily: 'SVN-Nexa Rust Slab Black Shadow',
    color: '#C71A1A',
  },
  done: {
    width: 140,
    height: 160,
    alignSelf: 'center',
    marginVertical: 10,
  },
  textEnjoy: {
    color: '#C71A1A',
    fontFamily: 'PaytoneOne',
    fontSize: 25,
  },
  tim: {
    width: 30,
    height: 25,
    marginLeft: 10,
    marginTop: 10,
  },
  tohome: {
    width: 300,
    height: 50,
    alignSelf: 'center',
    marginTop: 70,
  },
  text_below: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    color: '#F8C135',
  },
  down: {
    width: 25,
    height: 40,
    alignSelf: 'center',
  },
});

export default Done;
