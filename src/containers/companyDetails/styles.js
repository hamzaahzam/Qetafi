import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
  },
  backgroundImg: {
    // padding: 60,
    alignItems:"center",
    // flex: 1,
    height: windowHeight+20,
    width: windowWidth,
  },
});
