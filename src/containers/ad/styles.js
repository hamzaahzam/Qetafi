import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Preference from 'react-native-preference';
const lang = Preference.get('language');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bacIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: 'white',
    transform: lang == 'en' ? [{rotate: '180deg'}] : [{rotate: '0deg'}],
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  bottomIcons: {width: 50, height: 50, resizeMode: 'contain', marginTop: 20},
  bottomIconsView: {
    position: 'absolute',
    bottom: 80,
    right: lang == 'en' ? 20 : null,
    left: lang == 'en' ? null : 20,
  },
  bottomTextView: {
    position: 'absolute',
    bottom: 80,
    right: lang == 'en' ? null : 20,
    left: lang == 'en' ? 20 : null,
  },
  Text: {color: 'white', writingDirection: lang == 'en' ? 'ltr' : 'rtl'},
  detailBar: {
    width: windowWidth / 3 + 30,
    marginLeft: 20,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});
