import React, {useEffect, useState} from 'react';
import ReactNative, {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Switch,
  Modal,
} from 'react-native';
import {StackActions} from '@react-navigation/native';
import {images} from '../../assets/images';
import {styles} from './styles';
import Bar from '../../components/Bar';
import Preference from 'react-native-preference';
import RNRestart from 'react-native-restart';
import {isRTL, strings} from '../../i18n';
const lang = Preference.get('language');

const index = props => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisibleLang, setIsVisibleLang] = useState(false);
  const [radio, setRadio] = useState(false);
  useEffect(() => {
    lang == 'en' ? setRadio(false) : setRadio(true)
  },[])
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const inAppLanguageChange = () => {
    if (radio == true) {
      ReactNative.I18nManager.forceRTL(true);
      Preference.set('language', 'ar');
      RNRestart.Restart();
      console.log(Preference.get('language'));
    } else {
      Preference.set('language', 'en');
      ReactNative.I18nManager.forceRTL(false);
      RNRestart.Restart();
      console.log(Preference.get('language'));
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={images.backgroundMenu}>
        <ScrollView style={styles.scroll}>
          <View style={{paddingHorizontal:20,paddingTop:30}}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}
            style={styles.header}>
            <Image style={styles.headerImg} source={images.back} />
            <Text style={styles.headerText}>{strings('menu.settings')}</Text>
          </TouchableOpacity>
          <Text style={styles.title}>{strings('setting.personal_acc')}</Text>
          <Bar
            titleText={strings('setting.personal_pic')}
            Img={images.back}
            ImgStyle={styles.forwardImg}
          />
          <Bar
            titleText={strings('setting.name')}
            Img={images.back}
            ImgStyle={styles.forwardImg}
            descText={'عبد الله بن مسعود'}
            descTextStyle={styles.barDesc}
          />
          <Bar
            titleText={strings('setting.tel_num')}
            Img={images.back}
            ImgStyle={styles.forwardImg}
            descText={'+966-545-5526-31'}
            descTextStyle={styles.barDesc}
          />
          <Bar
            titleText={strings('setting.email')}
            Img={images.back}
            ImgStyle={styles.forwardImg}
            descText={'abdallah@gm…'}
            descTextStyle={styles.barDesc}
          />
          <Bar
            titleText={strings('setting.password')}
            Img={images.back}
            ImgStyle={styles.forwardImg}
            descText={'*****'}
            descTextStyle={styles.barDesc}
          />
          <View style={styles.line} />
          <Text style={styles.bottomTitle}>
            {strings('setting.application')}
          </Text>
          <Bar
            titleText={strings('setting.country')}
            Img={images.back}
            ImgStyle={styles.forwardImg}
            descText={'السعودية'}
            descTextStyle={styles.barDesc}
          />
          <Bar
            titleText={strings('setting.city')}
            Img={images.back}
            ImgStyle={styles.forwardImg}
            descText={'جدة'}
            descTextStyle={styles.barDesc}
          />
          <Bar
            onPress={() => {
              setIsVisibleLang(true);
            }}
            titleText={strings('setting.language')}
            Img={images.back}
            ImgStyle={styles.forwardImg}
            descText={'العربية'}
            descTextStyle={styles.barDesc}
          />
          <View style={styles.switch}>
            <Text>{strings('setting.notifications')}</Text>
            <Switch
              trackColor={{false: '#767577', true: '#77B800'}}
              thumbColor={isEnabled ? '#767577' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={isVisibleLang}>
            <TouchableOpacity
              onPress={() => {
                setIsVisibleLang(false);
              }}
              style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalTitleText}>Choose Language</Text>
                <TouchableOpacity
                  onPress={() => setRadio(true)}
                  style={styles.radioBar}>
                  <Text>Arabic</Text>
                  <View
                    style={[
                      styles.radio,
                      {backgroundColor: radio ? 'red' : 'white'},
                    ]}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setRadio(false)}
                  style={styles.radioBar}>
                  <Text>English</Text>
                  <View
                    style={[
                      styles.radio,
                      {backgroundColor: radio ? 'white' : 'red'},
                    ]}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setIsVisibleLang(false);
                    inAppLanguageChange();
                  }}>
                  <Text style={styles.modalOk}>OK</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </Modal>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default index;
