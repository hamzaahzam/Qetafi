import {StyleSheet, Dimensions} from 'react-native';
import Preference from 'react-native-preference';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const lang = Preference.get('language');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainView: {
    // height: windowHeight / 2,
    width: windowWidth - 80,
    backgroundColor: '#FFFFFF50',
    borderWidth: 0.3,
    borderColor: '#FFE5B9',
    borderRadius: 5,
    padding: 40,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    writingDirection: lang == 'en' ? 'ltr' : 'rtl'
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#EE963D',
  },
  buttonText: {
    fontSize: 18,
    color: '#D72119',
    writingDirection: lang == 'en' ? 'ltr' : 'rtl'
  },
  otpView: {
    marginVertical: 20,
  },
  textInput: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 20,
    marginBottom: 10,
    writingDirection: lang == 'en' ? 'ltr' : 'rtl'
  },
});
