import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  StyleSheet
} from 'react-native';
import {StackActions} from '@react-navigation/native';
import {images} from '../../assets/images';

const Bar = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <View>
      <Text>{props.titleText}</Text>
      </View>
      <View style={styles.secView}>
      <Text style={props.descTextStyle}>{props.descText}</Text>
      <Image style={props.ImgStyle} source={props.Img}/>
      </View>
    </TouchableOpacity>
  );
};

export default Bar;


const styles = StyleSheet.create({
container:{
 flexDirection:"row",
 justifyContent:"space-between",
 marginTop:30
},
secView:{
    flexDirection:"row"
}
});