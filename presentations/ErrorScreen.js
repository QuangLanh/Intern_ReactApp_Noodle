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

const error  = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../image/background.jpg')}
        resizeMode="cover"
        style={styles.container}>
        <View>
          <Image style={styles.logo} source={require('../image/logo.png')} />
          <Text style={styles.text_error}>ERROR</Text>
          <Text style={styles.textQR}>Can not recongnize your ID card. </Text>
          <View style={{alignSelf: 'center', marginTop: 20}}>
            <Image
              style={styles.again}
              source={require('../image/again.png')}
            />
          </View>
          <Image style={styles.error} source={require('../image/error.png')} />
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Text style={styles.textQR}>Follow the arrow to scan card</Text>
          </View>
          <View
            style={{flexDirection: 'row', alignSelf: 'center', marginTop: 60}}>
            <Image
              style={styles.checkQR}
              source={require('../image/checkQR.jpg')}
            />
             <TouchableOpacity
              onPress={() => navigation.navigate('Welcome')}>
            <Image style={styles.next} source={require('../image/next.png')} />
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
  text_error: {
    alignSelf: 'center',
    fontSize: 40,
    fontFamily: 'SVN-Nexa Rust Slab Black Shadow',
    color: '#C71A1A',
  },
  error: {
    alignSelf: 'center',
    width: 90,
    height: 110,
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
    marginTop: 10,
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
  again: {
    width: 150,
    height: 30,
    borderRadius: 10,
  },
});

export default error;
