import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Preference from 'react-native-preference';
import {StackActions} from '@react-navigation/native';
import {images} from '../../assets/images';
import {styles} from './styles';
import OTPInput from '../../components/OTPInput';
import {isRTL, strings} from '../../i18n';

const index = props => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={images.backgroundImgAuth}>
        <View style={styles.mainView}>
          <Text style={styles.titleText}>{strings('otp.enter_code')}</Text>
          <View style={styles.otpView}>
            <OTPInput />
          </View>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('bottomTab');
            }}
            style={styles.button}>
            <Text style={styles.buttonText}>{strings('register_now.register')}</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default index;
