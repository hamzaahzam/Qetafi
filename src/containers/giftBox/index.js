import React, { useEffect, FunctionComponent, useState } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ScrollView,
  Modal,
  SafeAreaView,
  TextInput,
  Platform,
} from 'react-native';
import { TouchableOpacity as TouchableOpacityGesture } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';
import { images } from '../../assets/images';
import { BlurView } from '@react-native-community/blur';
import { isRTL, strings } from '../../i18n';
import Preference from 'react-native-preference';
const lang = Preference.get('language');

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

let Data = [
  {
    id: 1,
    Img: images.videGiftBox1,
  },
  {
    id: 2,
    Img: images.videGiftBox2,
  },
  {
    id: 3,
    Img: images.videGiftBox1,
  },
  {
    id: 4,
    Img: images.videGiftBox2,
  },
];

const index = props => {
  useEffect(() => {
    let value = Math.random() * 20;
    setTabWidth(value + '%');
  }, []);
  const [tab, setTab] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [tabWidth, setTabWidth] = useState(0);
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ImageBackground
          style={styles.backgroundImg}
          source={images.backgroundUser}>
          <View style={styles.header}>
            <Text style={styles.headerText}>{strings('gift_box.offers')}</Text>
          </View>
          <KeyboardAwareScrollView>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={['#C33628', '#FE921A']}
              style={styles.linearGradient}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 16,
                  writingDirection: lang == 'en' ? 'ltr' : 'rtl',
                }}>
                2000 points = 150 SAR
              </Text>
            </LinearGradient>
            <View style={styles.progressBarView}>
              <View style={styles.tab}>
                <TouchableOpacity
                  onPress={() => {
                    setTab(false);
                  }}
                  style={[
                    styles.tabButton,
                    { backgroundColor: tab ? '#FFFFFF' : '#F7F7F7' },
                  ]}>
                  <Text
                    style={{ writingDirection: lang == 'en' ? 'ltr' : 'rtl' }}>
                    {strings('gift_box.newly_used')}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setTab(true);
                  }}
                  style={[
                    styles.tabButton,
                    { backgroundColor: !tab ? '#FFFFFF' : '#F7F7F7' },
                  ]}>
                  <Text
                    style={{ writingDirection: lang == 'en' ? 'ltr' : 'rtl' }}>
                    {strings('gift_box.validity')}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.progressBarTitlesView}>
                <Text style={styles.progressBarTextTitle}>
                  {strings('gift_box.valid_till')}
                </Text>
                <Text style={styles.progressBarTextTitle2}>
                  {strings('gift_box.points')}
                </Text>
              </View>
              <View style={styles.progressOuterView}>
                <View style={styles.progressInnerView}>
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#C33628', '#FE921A']}
                    style={[
                      styles.progressLinearGradient,
                      { width: tabWidth },
                    ]}></LinearGradient>
                </View>
              </View>
              <TouchableOpacity
                style={{ width: '40%' }}
                onPress={() => {
                  setModal1(true);
                }}>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={['#C33628', '#FE921A']}
                  style={[styles.linearGradient, { width: '100%', height: 50 }]}>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      writingDirection: lang == 'en' ? 'ltr' : 'rtl',
                    }}>
                    {strings('gift_box.replace')}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View style={styles.bottomMainView}>
              <Image
                style={{ width: '100%', height: 160 }}
                source={images.Bottles}
              />
              <View style={{ position: 'absolute', right: 80, top: 80 }}>
                <Text
                  style={{
                    fontSize: 14,
                    writingDirection: lang == 'en' ? 'ltr' : 'rtl',
                  }}>
                  {strings('gift_box.use_the_diss_code')}
                </Text>
                <Text style={styles.innerImgText}>Qetafi10</Text>
              </View>
            </View>
            <View style={styles.flatListView}>
              <Text style={{ writingDirection: lang == 'en' ? 'ltr' : 'rtl' }}>
                {strings('gift_box.exclusive_offers')}
              </Text>
              <FlatList
                data={Data}
                numColumns={2}
                contentContainerStyle={{ width: '100%' }}
                style={{ width: '100%' }}
                keyExtractor={(item, index) => item.id + index}
                renderItem={({ item }) => {
                  return (
                    <View>
                      <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity
                          onPress={() => props.navigation.navigate('Ad')}
                        >
                          <Image
                            style={{
                              width: windowWidth / 2 - 20,
                              height: windowHeight / 4,
                              resizeMode: 'contain',
                            }}
                            source={item.Img}
                          />
                        </TouchableOpacity>
                        <LinearGradient
                          start={{ x: 0, y: 0 }}
                          end={{ x: 1, y: 0 }}
                          colors={['#C33628', '#FE921A']}
                          style={[styles.linearGradientButton]}>
                          <Text
                            style={{
                              color: '#FFFFFF',
                              writingDirection: lang == 'en' ? 'ltr' : 'rtl',
                            }}>
                            {strings('gift_box.learn_more')}
                          </Text>
                        </LinearGradient>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('SearchBrands');
              }}
              style={[
                styles.header,
                {
                  marginTop: 40,
                  alignItems: 'center',
                },
              ]}>
              <Image
                style={[
                  styles.headerImg,
                  {
                    transform: [{ rotate: '180deg' }],
                    tintColor: '#D14D24',
                    marginTop: 5,
                  },
                ]}
                source={images.back}
              />
              <Text style={styles.headerText}>
                {strings('gift_box.qetafi_partners')}
              </Text>
            </TouchableOpacity>
            <View
              style={{ marginBottom: Platform.OS === 'android' ? 70 : 120 }}
            />
            <Modal animationType="slide" transparent={true} visible={modal1}>
              <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <View style={styles.modalMainView}>
                  <BlurView
                    style={styles.absolute}
                    // viewRef={modal1}
                    blurType="light"
                    blurAmount={40}
                    reducedTransparencyFallbackColor="gray"
                    blurRadius={25}
                  // downsampleFactor={10}
                  />
                  <Text
                    style={{ writingDirection: lang == 'en' ? 'ltr' : 'rtl' }}>
                    {strings('gift_box.redeme_points')}
                  </Text>
                  <View style={styles.textBar}>
                    <Text
                      style={{
                        color: '#FE921A',
                        fontSize: 20,
                        writingDirection: lang == 'en' ? 'ltr' : 'rtl',
                      }}>
                      2000 points = 200 SAR
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 11,
                      marginVertical: 10,
                      writingDirection: lang == 'en' ? 'ltr' : 'rtl',
                    }}>
                    {strings('gift_box.points_to_exchange')}
                  </Text>
                  <View style={styles.modalButtonsView}>
                    <View style={styles.modalButtons}>
                      {/* <Text style={{writingDirection: lang == 'en' ? 'ltr' : 'rtl'}}>القيمة</Text> */}
                      <TextInput
                        keyboardType="numeric"
                        style={{
                          writingDirection: lang == 'en' ? 'ltr' : 'rtl',
                          padding: 3,
                        }}
                        placeholderTextColor="black"
                        placeholder={strings('gift_box.value')}
                      />
                    </View>
                    <TouchableOpacity style={styles.modalButtons}>
                      {/* <Text style={{writingDirection: lang == 'en' ? 'ltr' : 'rtl'}}>عدد النقاط</Text> */}
                      <TextInput
                        style={{
                          writingDirection: lang == 'en' ? 'ltr' : 'rtl',
                          padding: 3,
                          fontSize:10,
                        }}
                        keyboardType="numeric"
                        placeholderTextColor="black"
                        placeholder={strings('gift_box.no_of_points')}
                      />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    style={{ width: windowWidth / 3, alignItems: 'center' }}
                    onPress={() => {
                      setModal1(false);
                      setModal2(false);
                    }}>
                    <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      colors={['#C33628', '#FE921A']}
                      style={[styles.linearGradientButton, { width: '100%' }]}>
                      <Text
                        style={{
                          color: '#FFFFFF',
                          writingDirection: lang == 'en' ? 'ltr' : 'rtl',
                        }}>
                        {strings('gift_box.confirm')}
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            <Modal animationType="slide" transparent={true} visible={modal2}>
              <TouchableOpacityGesture
                onPress={() => {
                  setModal2(false);
                }}
                style={styles.madal2}>
                <View style={styles.modalMainView}>
                  <BlurView
                    style={styles.absolute}
                    viewRef={modal2}
                    blurType="light"
                    blurAmount={40}
                    reducedTransparencyFallbackColor="white"
                  />
                  <Image
                    style={{ width: 60, height: 60, resizeMode: 'contain' }}
                    source={images.check}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      marginVertical: 20,
                      writingDirection: lang == 'en' ? 'ltr' : 'rtl',
                    }}>
                    {strings('gift_box.replacement_successful')}
                  </Text>
                  <Text
                    style={{
                      color: 'gray',
                      marginBottom: 20,
                      writingDirection: lang == 'en' ? 'ltr' : 'rtl',
                    }}>
                    {strings('gift_box.remaining_points')}
                  </Text>
                  <View style={styles.textBar}>
                    <Text
                      style={{
                        color: '#FE921A',
                        fontSize: 20,
                        writingDirection: lang == 'en' ? 'ltr' : 'rtl',
                      }}>
                      500 points = 50 SAR
                    </Text>
                  </View>
                </View>
              </TouchableOpacityGesture>
            </Modal>
          </KeyboardAwareScrollView>
        </ImageBackground>
      </SafeAreaView>
    </View>
  );
};

export default index;
