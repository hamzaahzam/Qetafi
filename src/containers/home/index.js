import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { StackActions } from '@react-navigation/native';
import { styles } from './styles';
import { images } from '../../assets/images/index';
import LinearGradient from 'react-native-linear-gradient';
import { isRTL, strings } from '../../i18n';
let Data = [
  {
    id: 1,
    img: images.topListImage1,
  },
  {
    id: 2,
    img: images.topListImage2,
  },
  {
    id: 3,
    img: images.topListImage3,
  },
  {
    id: 4,
    img: images.topListImage4,
  },
];
let Data2 = [
  {
    id: 1,
    img: images.video1,
  },
  {
    id: 2,
    img: images.video2,
  },
];

const index = props => {
  const [active, setActive] = useState(false);
  const [img, setImg] = useState(null);
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ImageBackground
          style={styles.backgroundImg}
          resizeMode="cover"
          source={images.backgroundHome}>
          <View style={styles.header}>
            <TouchableOpacity>
              <Text style={styles.headerText}>{strings('home.main')}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.searchIcon} source={images.search} />
            </TouchableOpacity>
          </View>
          {!active ? (
            <ScrollView>
              <View>
                <View>
                  <FlatList
                    data={Data}
                    horizontal
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                      return (
                        <View>
                          <TouchableOpacity
                            onPress={() => {
                              // setActive(true), setImg(item.img);
                              props.navigation.navigate('Ad')

                            }}>
                            <Image
                              style={{ width: 95, height: 150 }}
                              source={item.img}
                            />
                          </TouchableOpacity>
                        </View>
                      );
                    }}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('Ad');
                  }}
                >
                  <Image
                    style={{ width: '100%', height: 300 }}
                    source={images.centerImg}
                  />
                </TouchableOpacity>
                <View style={{ marginBottom: 60 }}>
                  <FlatList
                    data={Data2}
                    horizontal
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                      return (
                        <View>
                          <TouchableOpacity
                            onPress={() => {
                              props.navigation.navigate('Ad');
                            }}
                          >
                            <Image
                              style={{ width: 200, height: 180 }}
                              source={item.img}
                            />
                          </TouchableOpacity>
                        </View>
                      );
                    }}
                  />
                </View>

              </View>
            </ScrollView>
          ) : (
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={['#C33628', '#FE921A']}
              style={[styles.linearGradient, { marginBottom: Platform.OS == 'ios' ? 120 : 70, }]}>
              <View style={styles.linearGradientHeader}>
                <TouchableOpacity style={{ padding: 10 }}>
                  <Text style={styles.linearGradientHeaderText}>
                    {strings('home.latest_products')}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setActive(false);
                    setImg(null);
                  }}
                  style={{ padding: 10 }}>
                  <Text style={styles.linearGradientHeaderText}>x</Text>
                </TouchableOpacity>
              </View>
              <View>
                <Image source={img} />
              </View>
            </LinearGradient>
          )}
        </ImageBackground>
      </SafeAreaView>
    </View>
  );
};

export default index;
