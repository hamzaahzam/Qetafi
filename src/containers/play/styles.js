import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Preference from 'react-native-preference';
const lang = Preference.get('language');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    // marginTop: 20,
    marginBottom: 20,
    padding: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: '600',
    writingDirection: lang == 'en' ? 'ltr' : 'rtl',
  },
  ImageBackground: {
    // flex:1
    height: windowHeight - 110,
    width: windowWidth,
    paddingHorizontal: 20,  
  },
});
