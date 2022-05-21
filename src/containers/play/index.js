import React, {useEffect, FunctionComponent} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {StackActions} from '@react-navigation/native';
import {styles} from './styles';
import {images} from '../../assets/images';
import {isRTL, strings} from '../../i18n';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const index = props => {
  return (
    <View style={[styles.container,{marginBottom:0}]}>
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.headerText}>{strings('play.categories')}</Text>
        </View>
        <ImageBackground
          style={styles.ImageBackground}
          source={images.backgroundPlay}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('CategoryDetail');
                  }}>
                  <Image
                    resizeMode="contain"
                    style={{height: 150, width: windowWidth / 2-35, marginTop: 25}}
                    source={images.centerImg}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('CategoryDetail');
                  }}>
                  <Image
                    resizeMode="contain"
                    style={{height: 150, width: windowWidth / 2-35}}
                    source={images.category2}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('CategoryDetail');
                  }}>
                  <Image
                    resizeMode="cover"
                    style={{height: 350, width: windowWidth / 2}}
                    source={images.category3}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('CategoryDetail');
                  }}>
                  <Image
                    resizeMode="cover"
                    style={{height: 350, width: windowWidth / 2}}
                    source={images.category4}
                  />
                </TouchableOpacity>
              </View>
              <View style={{marginBottom: 70}}>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('CategoryDetail');
                  }}>
                  <Image
                    resizeMode="contain"
                    style={{height: 150, width: windowWidth / 2-35, marginTop: 25}}
                    source={images.category5}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('CategoryDetail');
                  }}>
                  <Image
                    resizeMode="contain"
                    style={{height: 150, width: windowWidth / 2-35}}
                    source={images.category6}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    </View>
  );
};

export default index;
