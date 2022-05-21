import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  Share
} from 'react-native';
import { images } from '../../assets/images';
import ProgressCircle from 'react-native-progress-circle-rtl'
import { styles } from './styles';
import { isRTL, strings } from '../../i18n';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Preference from 'react-native-preference';
const lang = Preference.get('language');

const index = props => {
  const [state, setstate] = useState(false);
  const [setting, setSetting] = useState(false);
  // const [progress,setProgress]=useState(0)
  

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'This is my advertisemnt watch it and enjoy!',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ImageBackground style={{ flex: 1 }} source={images.backgroundAd}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.goBack();
              }}
              style={{ paddingVertical: 20 }}>
              <Image style={styles.bacIcon} source={images.back} />
            </TouchableOpacity>
            {setting ? (

              <View
                style={[styles.detailBar, { flexDirection: 'row', paddingHorizontal: 10, backgroundColor: 'white', marginTop: 18, marginBottom: 18, borderRadius: 20,justifyContent:'space-between' }]}
              >
                <View style={{padding:2}}>
                  <ProgressCircle
                    percent={20}
                    radius={10}
                    borderWidth={2}
                    color='orange'

                  >
                  <Text style={{color:'orange',fontWeight:'bold',fontSize:16,paddingBottom:2}}>i</Text>
                  </ProgressCircle>
                </View>
                <Text style={{ writingDirection: 'rtl', textAlign: 'center',marginTop:2 }}>{strings('play.get_off')}</Text>
              </View>

            ) : (
              <View />
            )}
          </View>
          <View style={styles.bottomIconsView}>
            <TouchableOpacity
              onPress={() => {
                setSetting(!setting);
              }}>
              <Image style={styles.bottomIcons} source={images.setting2} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('CompanyDetails')}
            >
              <Image style={styles.bottomIcons} source={images.adIcon} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setstate(!state);
              }}>
              <Image
                style={styles.bottomIcons}
                source={state ? images.bookmarkActive : images.bookmarkInactive}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={onShare}>
              <Image style={styles.bottomIcons} source={images.share} />
            </TouchableOpacity>
          </View>
          <View style={styles.bottomTextView}>
            <Text style={styles.Text}>{strings('play.ad_desc_1')}</Text>
            <Text style={styles.Text}>{strings('play.ad_desc_2')}</Text>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default index;
