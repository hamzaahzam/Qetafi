import React, { useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { images } from '../../assets/images';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { isRTL, strings } from '../../i18n';
import Preference from 'react-native-preference';
const lang = Preference.get('language');

let Data = [
  {
    id: 1,
    Img: images.listImgUser1,
  },
  {
    id: 2,
    Img: images.listImgUser2,
  },
  {
    id: 3,
    Img: images.listImgUser3,
  },
  {
    id: 4,
    Img: images.listImgUser4,
  },
];

const index = props => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ImageBackground
          style={styles.backgroundImg}
          source={images.backgroundUser}>
          <ScrollView>
            <View style={styles.userDetail}>
              <Image
                style={{
                  width: 90,
                  height: 90,
                  resizeMode: 'contain',
                  marginTop: 10,
                }}
                source={images.profilePic}
              />
              <View style={{flex:1}}/>
              <View style={styles.userDetailTextView}>
                <Text style={styles.nameTitle}>عبد الله بن مسعود</Text>
                <View style={styles.playImageView}>
                  <Image style={styles.playImage} source={images.playInactive} />
                  <Text style={{ marginHorizontal: 10, writingDirection: lang == 'en' ? 'ltr' : 'rtl', }}>
                    {strings('user.video')}
                  </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontWeight:'bold',marginTop: 5, writingDirection: lang == 'en' ? 'ltr' : 'rtl', }}>
                    {strings('user.tel_num') + ' :'}
                  </Text>
                  <Text style={{ marginTop: 5, writingDirection: lang == 'en' ? 'ltr' : 'rtl', }}>
                    {' +966-545-5526-31'}
                  </Text>
                </View>
                <View style={{flexDirection:'row'}}>
                  <Text style={{ fontWeight:'bold',marginTop: 5, writingDirection: lang == 'en' ? 'ltr' : 'rtl', }}>
                    {strings('user.email') + " :"}
                  </Text>
                  <Text style={{ marginTop: 5, writingDirection: lang == 'en' ? 'ltr' : 'rtl', }}>
                    {" abdallah@gmail.com"}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.giftBox}>
              <View style={styles.giftBoxImgView}>
                <Image style={styles.giftBoxImg} source={images.giftBox} />
                <Text style={styles.giftBoxText}>
                  {'2000 Points \n= 150 SAR'}
                </Text>
              </View>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#C33628', '#FE921A']}
                style={styles.linearGradient}>
                <Text style={{ color: '#FFFFFF', writingDirection: lang == 'en' ? 'ltr' : 'rtl', }}>
                  {strings('gift_box.replace')}
                </Text>
              </LinearGradient>
            </View>
            <View style={{ marginTop: 40 }}>
              <Text style={styles.titleText}>{strings('menu.favorite')}</Text>
              <FlatList
                data={Data}
                horizontal
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                  return (
                    <View>
                      <TouchableOpacity
                        onPress={() => {
                          props.navigation.navigate('Ad');
                        }}>
                        <Image
                          style={{ width: 95, height: 95, borderRadius: 10 }}
                          source={item.Img}
                        />
                      </TouchableOpacity>
                    </View>
                  );
                }}
              />
            </View>
            <View style={{ marginTop: 40, marginBottom: 60 }}>
              <Text style={styles.titleText}>{strings('user.latest_views')}</Text>
              <FlatList
                data={Data}
                horizontal
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                  return (
                    <View>
                      <TouchableOpacity
                        onPress={() => {
                          props.navigation.navigate('Ad');
                        }}>
                        <Image
                          style={{ width: 95, height: 95, borderRadius: 10 }}
                          source={item.Img}
                        />
                      </TouchableOpacity>
                    </View>
                  );
                }}
              />
            </View>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    </View>
  );
};

export default index;
