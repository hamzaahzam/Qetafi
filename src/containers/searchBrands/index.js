import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {images} from '../../assets/images';
import {styles} from './styles';
import {isRTL, strings} from '../../i18n';
import Preference from 'react-native-preference';
const lang = Preference.get('language');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

let Data = [
  {
    id: 1,
    Img: images.searchedCategory1,
  },
  {
    id: 2,
    Img: images.searchedCategory2,
  },
  {
    id: 3,
    Img: images.searchedCategory3,
  },
  {
    id: 4,
    Img: images.searchedCategory4,
  },
  {
    id: 5,
    Img: images.searchedCategory5,
  },
  {
    id: 6,
    Img: images.searchedCategory1,
  },
];

const index = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImg}
          source={images.backgroundUser}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}
            style={styles.header}>
            <Image style={styles.headerImg} source={images.back} />
            <Text style={styles.headerText}>
              {strings('gift_box.qetafi_partners')}
            </Text>
          </TouchableOpacity>
          <View style={styles.bottomView}>
            <View style={styles.searchBarView}>
              <DropDownPicker
                items={[
                  {label: 'North America', value: 'na', untouchable: true}, // North America
                  {label: 'United States', value: 'us', parent: 'na'},
                  {label: 'Canada', value: 'canada', parent: 'na'},
                  {label: 'Mexico', value: 'mexico', parent: 'na'},
                  {label: 'Europe', value: 'eu', untouchable: true}, // Europe
                  {label: 'UK', value: 'uk', parent: 'eu'},
                  {label: 'Germany', value: 'germany', parent: 'eu'},
                  {label: 'Russia', value: 'russia', parent: 'eu'},
                ]}
                containerStyle={{
                  height: 40,
                  width: '75%',
                  alignSelf: 'center',
                }}
                style={{
                  backgroundColor: 'white',
                  borderWidth: 1,
                  borderColor: '#EE963D',
                  flexDirection: 'row-reverse',
                  borderTopLeftRadius: 15,
                  borderTopRightRadius: 15,
                  borderBottomLeftRadius: 15,
                  borderBottomRightRadius: 15,
                }}
                labelStyle={{
                  textAlign: 'right',
                }}
                arrowColor="#EE963D"
                itemStyle={{
                  justifyContent: 'flex-start',
                  writingDirection: lang == 'en' ? 'ltr' : 'rtl',
                  fontSize: 16,
                }}
                dropDownStyle={{backgroundColor: 'white'}}
                // onChangeItem={(item) => {
                //   this.setCities(item.value);
                //   this.setState({
                //     countries: item.value,
                //   });
                // }}
                placeholder={strings('gift_box.choose_category')}
                placeholderStyle={{
                  fontSize: 16,
                  color: '#979191',
                }}
              />
              <Image style={styles.searchIcon} source={images.search} />
            </View>
            <View>
              <FlatList
                data={Data}
                numColumns={2}
                contentContainerStyle={{width: '100%'}}
                style={{width: '100%'}}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                  return (
                    <View>
                      <TouchableOpacity
                        onPress={() => {
                          props.navigation.navigate('CompanyDetails');
                        }}>
                        <Image
                          style={{
                            width: windowWidth / 2 - 20,
                            height: windowHeight / 4,
                            resizeMode: 'contain',
                          }}
                          source={item.Img}
                        />
                      </TouchableOpacity>
                    </View>
                  );
                }}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default index;
