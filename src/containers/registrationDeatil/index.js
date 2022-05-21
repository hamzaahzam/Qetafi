import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Modal,
  Platform,
} from 'react-native';
import Preference from 'react-native-preference';
import { StackActions } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { images } from '../../assets/images';
import { styles } from './styles';
import OTPInput from '../../components/OTPInput';
import { isRTL, strings } from '../../i18n';
import RNPickerSelect from 'react-native-picker-select';

const lang = Preference.get('language');


let Data = [
  { id: 1, title: strings('registraton_detail.sport') },
  { id: 2, title: strings('registraton_detail.health') },
  { id: 3, title: strings('registraton_detail.education') },
  { id: 4, title: strings('registraton_detail.culture') },
  { id: 5, title: strings('registraton_detail.technology') },
  { id: 6, title: strings('registraton_detail.fashion') },
  { id: 7, title: strings('registraton_detail.sport') },
  { id: 8, title: strings('registraton_detail.beautifing') },
  { id: 9, title: strings('registraton_detail.tourism') },
];

const index = props => {
  const [dateTimePickerVisible, setDateTimePickerVisible] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [dateOrTimeValue, setDateOrTimeValue] = useState(new Date());
  const [updatedData, setUpdatedData] = useState([]);
  const [city, setCity] = useState('')


  const pickerStyle = {
    inputIOS: {
      color: 'white',
      paddingTop: 13,
      paddingHorizontal: 10,
      paddingBottom: 12,
    },
    inputAndroid: {
      color: 'white',
    },
    placeholderColor: 'white',
    underline: { borderTopWidth: 0 },
   
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={images.backgroundImgAuth}>
        <View style={styles.mainView}>
          <Text style={styles.titleText}>{strings('log_in.enter_personal_info')}</Text>
          <TouchableOpacity
            onPress={() => {
              setDateTimePickerVisible(true);
            }}
            style={styles.dob}>
            <Text style={{ color: 'white', writingDirection: lang == 'en' ? 'ltr' : 'rtl' }}>
              {showDate && !!dateOrTimeValue
                ? dateOrTimeValue.toLocaleDateString()
                : strings('registraton_detail.dob')}
            </Text>
            <Image style={styles.calender} source={images.calendar} />
          </TouchableOpacity>
          {/* <TextInput
            style={styles.textInput}
            placeholderTextColor="#FFFFFF"
            placeholder={strings('registraton_detail.city')}
          /> */}
          <View style={{ borderColor: 'white', borderWidth: 1, borderRadius: 5, marginBottom: 15,paddingLeft:3, }}>
            {/* <Picker
              mode="dropdown"
              placeholder={city}
              style={{ color: 'white',backgroundColor:'transparent', width: '120%', height: 45,padding:0,margin:0 }}
              selectedValue={strings('setting.city')}
              onValueChange={(value) => {
                setCity(value);
              }}>
              <Picker.Item label={strings('setting.city')} value={strings('setting.city')} />
              <Picker.Item label={strings('selectCity.mecca')} value={strings('selectCity.mecca')} />
              <Picker.Item label={strings('selectCity.riyadh')} value={strings('selectCity.riyadh')} />
              <Picker.Item label={strings('selectCity.jeddah')} value={strings('selectCity.jeddah')} />
            </Picker> */}


            <RNPickerSelect
              placeholder={{ label: strings('setting.city'), value: '' }}
              inputAndroid={{ color: 'white', backgroundColor: 'red' }}
              style={{ color: 'white', backgroundColor: 'transparent' }}
              value={city}
              style={pickerStyle}
              useNativeAndroidPickerStyle={false}
              onValueChange={(newValue) => {
                if (newValue !== city)
                  setCity(newValue)
              }}
              items={[
                { label: strings('selectCity.mecca'), value: strings('selectCity.mecca') },
                { label: strings('selectCity.riyadh'), value: strings('selectCity.riyadh') },
                { label: strings('selectCity.jeddah'), value: strings('selectCity.jeddah') },
              ]}
            />

          </View>
          <View style={styles.flatlistView}>
            {updatedData.length > 0 ? (
              <View style={{ width: '100%', flexDirection: 'row' }}>
                <ScrollView horizontal>
                  {updatedData.map((item, index) => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          let temp = updatedData;
                          temp.splice(index, 1);
                          setUpdatedData([...temp]);
                        }}
                        style={[
                          styles.boxView,
                          { width: 90, flexDirection: 'row' },
                        ]}>
                        <Text style={{ writingDirection: lang == 'en' ? 'ltr' : 'rtl', fontSize: 10 }}>
                          {item.title}
                        </Text>
                        <Text
                          style={{
                            marginLeft: 10,
                            color: 'white',
                            writingDirection: lang == 'en' ? 'ltr' : 'rtl'
                          }}>
                          x
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              </View>
            ) : (
              <Text
                style={{
                  color: '#FFFFFF70',
                  marginRight: 10,
                  paddingLeft:7,
                  writingDirection: lang == 'en' ? 'ltr' : 'rtl'
                }}>
                {strings('registraton_detail.ur_interestes')}
              </Text>
            )}
          </View>
          <View style={styles.threeColumView}>
            {Data.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    let newList = [...updatedData];
                    const Value = newList.includes(item);
                    if (!Value) {
                      newList.push(item);
                      setUpdatedData(newList);
                    }
                  }}
                  style={styles.boxView}>
                  <Text style={{ writingDirection: lang == 'en' ? 'ltr' : 'rtl', fontSize: 10 }}>{item.title}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Otp');
            }}
            style={styles.button}>
            <Text style={styles.buttonText}>{strings('register_now.register')}</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      {
        (Platform.OS === 'android' ? (
          dateTimePickerVisible && (
            <DateTimePicker
              maximumDate={new Date()}
              mode="date"
              display="spinner"
              value={dateOrTimeValue}
              onChange={(event, value) => {
                setDateOrTimeValue(value);
                setDateTimePickerVisible(Platform.OS === 'ios' ? true : false);
                setShowDate(true);
              }}
            />
          )
        ) : (
          <Modal
            animationType="slide"
            transparent={true}
            visible={dateTimePickerVisible}>
            <TouchableOpacity
              onPress={() => {
                setDateTimePickerVisible(false);
              }}
              style={styles.modalMainView}>
              <View style={styles.datePickerView}>
                <DateTimePicker
                  maximumDate={new Date()}
                  mode="date"
                  display="spinner"
                  value={dateOrTimeValue}
                  onChange={(event, value) => {
                    setDateOrTimeValue(value);
                    setDateTimePickerVisible(
                      Platform.OS === 'ios' ? true : false,
                    );
                    setShowDate(true);
                  }}
                />
              </View>
            </TouchableOpacity>
          </Modal>
        ))
      }
    </View>
  );
};

export default index;
