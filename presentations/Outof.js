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

const Outof = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../image/background.jpg')}
        resizeMode="cover"
        style={styles.container}>
        <View>
          <Image style={styles.logo} source={require('../image/logo.png')} />
          <Text style={styles.text_Outof}>OUT OF NOODLES</Text>
          <View
            style={{flexDirection: 'row', alignSelf: 'center', marginTop: 30}}>
            <Text style={styles.text_content}>There is</Text>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>
              {' '}
              0
            </Text>
            <Text style={styles.text_content}> cup of noodles left in the</Text>
          </View>
          <Text
            style={{
              alignSelf: 'center',
              color: '#C71A1A',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            {' '}
            machine. Please fill in to continue.
          </Text>
          <Image
            style={styles.image_lymohinh}
            source={require('../image/lymohinh.png')}
          />
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
  text_Outof: {
    alignSelf: 'center',
    fontSize: 30,
    marginTop: 10,
    color: '#C71A1A',
    fontFamily: 'SVN-Nexa Rust Slab Black Shadow',
  },
  text_content: {
    color: '#C71A1A',
    fontSize: 20,
    fontWeight: 'bold',
  },
  image_lymohinh: {
    width: 225,
    height: 150,
    alignSelf: 'center',
    marginTop: 30,
  },
});

export default Outof;
