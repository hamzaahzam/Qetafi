import React, {useEffect, FunctionComponent} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Platform,
} from 'react-native';
import {StackActions} from '@react-navigation/native';
import {styles} from './styles';
import {images} from '../../assets/images';
import {isRTL, strings} from '../../i18n';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

let Data = [
  {id: 1, img: images.categoryDetail1},
  {id: 2, img: images.categoryDetail2},
  {id: 3, img: images.categoryDetail3},
  {id: 4, img: images.categoryDetail4},
  {id: 5, img: images.categoryDetail5},
  {id: 6, img: images.categoryDetail6},
  {id: 7, img: images.categoryDetail7},
  {id: 8, img: images.categoryDetail3},
];

const index = props => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}
          style={styles.header}>
            <Image style={styles.backIcon} source={images.back} />
          <Text style={styles.headerText}>{strings('play.digital_products')}</Text>
        </TouchableOpacity>
        <ImageBackground
          style={styles.ImageBackground}
          source={images.backgroundCategoryDetail}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
            <View>
              <FlatList
                data={Data}
                numColumns={2}
                contentContainerStyle={{width: '100%'}}
                style={{width: '100%'}}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        props.navigation.navigate('Ad');
                      }}>
                      <Image
                        style={{
                          width: windowWidth / 2-40,
                          height: windowHeight / 4,
                          marginHorizontal:20,
                          borderRadius:20
                        }}
                        source={item.img}
                      />
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
            <View style={{marginBottom:Platform.OS == 'ios'? 120:70}} />
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    </View>
  );
};

export default index;
