import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {images} from '../../assets/images';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {isRTL, strings} from '../../i18n';
import Preference from 'react-native-preference';
const lang = Preference.get('language');

const index = props => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImg}
        source={images.backgroundUser}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: 'contain',
            marginTop: 80,
          }}
          source={images.adIcon2}
        />
        <Text style={{width: '60%', textAlign: 'center', marginVertical: 40,writingDirection: lang == 'en' ? 'ltr' : 'rtl',}}>
          لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو
          أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت
          انيم أد مينيم فينايم,كيواس نوستريد
        </Text>
        <Text style={{marginVertical: 20,writingDirection: lang == 'en' ? 'ltr' : 'rtl',}}>هل لديك أي استفسار أو أسئلة؟</Text>
        <Text style={{marginVertical: 20,writingDirection: lang == 'en' ? 'ltr' : 'rtl',}}>خدمة العملاء: 920009601</Text>
        <Text
          onPress={() => {
            Linking.openURL('https://daffah.sa');
          }}
          style={{marginVertical: 20,writingDirection: lang == 'en' ? 'ltr' : 'rtl',}}>
          https://daffah.sa
        </Text>
      </ImageBackground>
    </View>
  );
};

export default index;
