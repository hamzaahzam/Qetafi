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

const lang = Preference.get('language');

const index = props => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={images.backgroundImgAuth}>
        <View style={styles.mainView}>
          <Text style={styles.titleText}>{strings('log_in.enter_personal_info')}</Text>
          <View style={styles.otpView}>
            <TextInput
              style={styles.textInput}
              placeholderTextColor="#FFFFFF90"
              placeholder={strings('log_in.full_name')}
            />
            <TextInput
              style={styles.textInput}
              placeholderTextColor="#FFFFFF90"
              placeholder={strings('log_in.email')}
              keyboardType="email-address"
            />
          </View>
          <TouchableOpacity 
          style={styles.button}
          onPress={()=>props.navigation.navigate('RegistrationDetail')}
          >

            <Text style={styles.buttonText}>{strings('register_now.register')}</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default index;
