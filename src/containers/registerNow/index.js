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
import {isRTL, strings} from '../../i18n';

const lang = Preference.get('language');
const index = props => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={images.backgroundImgAuth}>
        <View style={styles.mainView}>
          <Text style={styles.titleText}>{strings('register_now.register_now')}</Text>
          <Text style={styles.textInputTitle}>{strings('register_now.tel_num')}</Text>
          <TextInput
            style={styles.textInput}
            placeholderTextColor="#FFFFFF90"
            keyboardType="number-pad"
            placeholder={strings('register_now.tel_num_placeholder')}
          />
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('LogIn');
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
