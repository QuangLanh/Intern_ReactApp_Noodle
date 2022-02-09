import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import Video from 'react-native-video';

const welcome = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../image/background.jpg')}
        resizeMode="cover"
        style={styles.container}>
        <View>
          <Image style={styles.logo} source={require('../image/logo.png')} />
          <Text style={styles.textwelcome}>WELCOME</Text>
          <Image style={styles.media} source={require('../image/media.png')} />
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Image style={styles.imageQR} source={require('../image/QR.png')} />
            <Text style={styles.textQR}>Follow the arrow to scan card</Text>
          </View>
          <View
            style={{flexDirection: 'row', alignSelf: 'center', marginTop: 50}}>
              <TouchableOpacity
              onPress={() => navigation.navigate('ErrorScreen')}>
            <Image
              style={styles.checkQR}
              source={require('../image/checkQR.jpg')}
            />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Infor')}>
              <Image
                style={styles.next}
                source={require('../image/next.png')}
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
  imagebackgroud: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 150,
    height: 120,
    alignSelf: 'center',
    marginTop: 20,
  },
  textwelcome: {
    alignSelf: 'center',
    fontSize: 40,
    fontFamily: 'SVN-Nexa Rust Slab Black Shadow',
    color: '#C71A1A',
  },
  media: {
    alignSelf: 'center',
    width: 320,
    height: 190,
    marginTop: 15,
  },
  imageQR: {
    width: 40,
    height: 50,
  },
  textQR: {
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 18,
    alignSelf: 'center',
    color: '#ae0808',
  },
  checkQR: {
    width: 110,
    height: 140,
    borderRadius: 10,
    marginLeft: 120,
  },
  next: {
    width: 80,
    height: 50,
    alignSelf: 'center',
    marginLeft: 40,
    marginTop: 40,
  },
});

export default welcome;
