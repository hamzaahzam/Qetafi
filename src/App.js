import 'react-native-gesture-handler';
import * as React from 'react';
import {View, SafeAreaView, Image, StyleSheet, LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {images} from './assets/images/index';
import Splash from './containers/splash/index';
import Menu from './containers/menu/index';
import Home from './containers/home/index';
import Play from './containers/play/index';
import GiftBox from './containers/giftBox/index';
import User from './containers/user/index';
import Information from './containers/information/index';
import RegisterNow from './containers/registerNow/index';
import Otp from './containers/otp/index';
import LogIn from './containers/logIn/index';
import RegistrationDetail from './containers/registrationDeatil/index';
import CategoryDetail from './containers/categoryDetail/index';
import Ad from './containers/ad/index';
import SearchBrands from './containers/searchBrands/index';
import CompanyDetails from './containers/companyDetails/index';
import Setting from './containers/setting/index';

const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();
// console.disableYellowBox = true;
LogBox.ignoreAllLogs(true);

const HomeStack = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          options={{
            title: '',
            headerShown: false,
          }}
          name="splash"
          component={Splash}
        />
        <RootStack.Screen
          options={{
            title: '',
            headerShown: false,
          }}
          name="Information"
          component={Information}
        />
        <RootStack.Screen
          options={{
            title: '',
            headerShown: false,
          }}
          name="RegisterNow"
          component={RegisterNow}
        />
        <RootStack.Screen
          options={{
            title: '',
            headerShown: false,
          }}
          name="Otp"
          component={Otp}
        />
        <RootStack.Screen
          options={{
            title: '',
            headerShown: false,
          }}
          name="LogIn"
          component={LogIn}
        />
        <RootStack.Screen
          options={{
            title: '',
            headerShown: false,
          }}
          name="RegistrationDetail"
          component={RegistrationDetail}
        />
        <RootStack.Screen
          options={{
            title: '',
            headerShown: false,
          }}
          name="CategoryDetail"
          component={CategoryDetail}
        />
        <RootStack.Screen
          options={{
            title: '',
            headerShown: false,
          }}
          name="Ad"
          component={Ad}
        />
        <RootStack.Screen
          options={{
            title: '',
            headerShown: false,
          }}
          name="SearchBrands"
          component={SearchBrands}
        />
        <RootStack.Screen
          options={{
            title: '',
            headerShown: false,
          }}
          name="CompanyDetails"
          component={CompanyDetails}
        />
        <RootStack.Screen
          options={{
            title: '',
            headerShown: false,
          }}
          name="Setting"
          component={Setting}
        />
        <RootStack.Screen
          options={{headerShown: false}}
          name="bottomTab"
          component={bottomTab}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
const bottomTab = props => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        style: {
          // borderTopColor: '#141414',
          borderTopEndRadius: 15,
          borderTopStartRadius: 15,
          height: 60,
          // backgroundColor: '#141414',
        },
        keyboardHidesTabBar: 'true',
        activeTintColor: '#C4501B',
        showLabel: false,
      }}>
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarIcon: ({color, focused}) => {
            return (
              <View style={styles.tabContainer}>
                <Image
                  source={focused ? images.menuActive : images.menuInactive}
                  style={styles.tabIcon}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, focused}) => {
            return (
              <View style={styles.tabContainer}>
                <Image
                  source={focused ? images.homeActive : images.homeInactive}
                  style={styles.tabIcon}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Play"
        component={Play}
        options={{
          tabBarIcon: ({color, focused}) => {
            return (
              <View style={styles.tabContainer}>
                <Image
                  source={focused ? images.playActive : images.playInactive}
                  style={styles.tabIcon}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="GiftBox"
        component={GiftBox}
        options={{
          tabBarIcon: ({color, focused}) => {
            return (
              <View style={styles.tabContainer}>
                <Image
                  source={
                    focused ? images.giftBoxActive : images.giftBoxInactive
                  }
                  style={styles.tabIcon}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: ({color, focused}) => {
            return (
              <View style={styles.tabContainer}>
                <Image
                  source={focused ? images.userActive : images.userInactive}
                  style={styles.tabIcon}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default HomeStack;
const styles = StyleSheet.create({
  tabContainer: {
    width: 45,
    height: 45,
    padding: 5,
    borderRadius: 5,
    justifyContent: 'center',
  },
  tabIcon: {
    height: '65%',
    width: '65%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
