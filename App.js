import { Image, StyleSheet, Text, TouchableOpacity, View, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screen/SplashScreen';
import HomeScreen from './src/screen/HomeScreen';
import OnboardingScreen from './src/screen/OnboardingScreen';
import SpgaToP from './src/screen/SpgaToP';
import CgpaToP from './src/screen/CgpaToP';
import FindCpga from './src/screen/FindCpga';
import PercentageToGpa from './src/screen/PercentageToGpa';
import ToUsd from './src/screen/Currency/ToUsd';
import ToEurope from './src/screen/Currency/ToEurope';
import ToJapan from './src/screen/Currency/ToJapan';
import ToSwiss from './src/screen/Currency/ToSwiss';
import Discount from './src/screen/General/Discount';
import GeneralPer from './src/screen/General/GeneralPer';
import Saved from './src/screen/Saved';
import { fetchData, initDatabase, insertData } from './src/common/database';
import EuropeTime from './src/screen/TimeZone/EuropeTime';
import JapanTime from './src/screen/TimeZone/JapanTime';
import SwissTime from './src/screen/TimeZone/SwissTime';
import UsaTime from './src/screen/TimeZone/UsaTime';

const App = () => {
  // const [signInInProgress, setSignInInProgress] = useState(false);

  // useEffect(() => {

  //   GoogleSignin.configure(
  //     {

  //       androidClientId: '316996859876-tbkoovbjjaljj7qsfumhh46bqtov9ru9.apps.googleusercontent.com',
  //       iosClientId: "",
  //       scopes: ['profile', 'email']
  //     });
  // }, []);

  // const signIn = async () => {
  //   if (signInInProgress) return; // Prevent multiple sign-in attempts

  //   setSignInInProgress(true);
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();
  //     await GoogleSignin.revokeAccess();
  //     console.warn(userInfo);
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       // User cancelled the login flow
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       console.log(error);
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       console.log(error);
  //     } else {
  //       console.log(error);
  //     }
  //   } finally {
  //     setSignInInProgress(false); // Reset the flag after the sign-in attempt is complete
  //   }
  // };

  useEffect(() => {
    initDatabase()
    // insertData('aniket',8)
    // fetchData()
  }, [])
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SpgaToP" component={SpgaToP} />
        <Stack.Screen name="CgpaToP" component={CgpaToP} />
        <Stack.Screen name="FindCpga" component={FindCpga} />
        <Stack.Screen name="PercentageToGpa" component={PercentageToGpa} />
        <Stack.Screen name="ToUsd" component={ToUsd} />
        <Stack.Screen name="ToEurope" component={ToEurope} />
        <Stack.Screen name="ToJapan" component={ToJapan} />
        <Stack.Screen name="ToSwiss" component={ToSwiss} />
        <Stack.Screen name="Discount" component={Discount} />
        <Stack.Screen name="GeneralPer" component={GeneralPer} />
        <Stack.Screen name="Saved" component={Saved} />
        <Stack.Screen name="EuropeTime" component={EuropeTime} />
        <Stack.Screen name="JapanTime" component={JapanTime} />
        <Stack.Screen name="SwissTime" component={SwissTime} />
        <Stack.Screen name="UsaTime" component={UsaTime} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({

});
