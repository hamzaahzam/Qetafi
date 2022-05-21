import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {images} from '../../assets/images';
import {styles} from './styles';
import {isRTL, strings} from '../../i18n';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const index = props => {
  return (
    <ImageBackground
      style={{
        width: windowWidth,
        height: windowHeight - 20,
        backgroundColor: 'white',
      }}
      source={images.backgroundMenu}>
      <View style={styles.container}>
        <Image source={images.profilePic} />
        <Text style={styles.profileName}>عبد الله</Text>
        <Text style={styles.profileName}>بن مسعود</Text>
        <View style={styles.headings}>
          <TouchableOpacity style={styles.titleView}>
            <Image style={styles.icons} source={images.bookmark} />
            <Text style={styles.titleFont}>{strings('menu.favorite')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.titleView}>
            <Image
              style={[styles.icons, {width: 30, height: 30, marginRight: -2}]}
              source={images.question}
            />
            <Text style={styles.titleFont}>{strings('menu.help')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Setting');
            }}
            style={styles.titleView}>
            <Image style={styles.icons} source={images.setting} />
            <Text style={styles.titleFont}>{strings('menu.settings')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.titleView}>
            <Image style={styles.icons} source={images.wallet} />
            <Text style={styles.titleFont}>{strings('menu.my_points')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.titleView}>
            <Image style={styles.icons} source={images.Outline} />
            <Text style={styles.titleFont}>
              {strings('menu.terms_conidionts')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.titleView}>
            <Image
              style={[styles.icons, {width: 28, height: 28, marginRight: -2}]}
              source={images.twoUser}
            />
            <Text style={styles.titleFont}>
              {strings('menu.invite_a_friend')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>props.navigation.navigate('RegisterNow')}
            style={[styles.titleView, {marginTop: 80, marginBottom: 70}]}>
            <Image
              style={[styles.icons, {marginTop: 2}]}
              source={images.logOut}
            />
            <Text style={styles.titleFont}>{strings('menu.log_out')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default index;
