import {
  Image, StyleSheet, Text, TouchableOpacity,
  View, Pressable
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { GoogleSignin, statusCodes } from
  '@react-native-google-signin/google-signin';

const App = () => {
  const [signInInProgress, setSignInInProgress] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '316996859876-vbiprj63pep7avdesqbljjh60bdeqee2.apps.googleusercontent.com',
    });
  }, []);

  const signIn = async () => {
    if (signInInProgress) return; // Prevent multiple sign-in attempts

    setSignInInProgress(true);
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      await GoogleSignin.revokeAccess();
      console.warn(userInfo.user);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // User cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(error);
      } else {
        console.log(error);
      }
    } finally {
      setSignInInProgress(false); // Reset the flag after the sign-in attempt is complete
    }
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.signupbutton} onPress={signIn}>
        <Text style={{ color: 'blue', fontSize: 20 }}>Google</Text>
      </Pressable>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#1f1f1f',
    alignItems: 'center',
  },
  signupbutton: {
    justifyContent: 'center',
    backgroundColor: 'pink',
    width: 300,
    height: 46,
    borderRadius: 15,
    marginTop: 25,
    alignItems: 'center',
  },
});
