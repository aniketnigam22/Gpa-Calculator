import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppImages } from '../common/AppImages';

const SplashScreen = ({ navigation }) => {

    useEffect(() => {

        const handleNavigate = async () => {
            try {
                const value = await AsyncStorage.getItem('@first_launch')
                console.log("First Launch value: - ", value)
                if (value == null || value == undefined) {
                    await AsyncStorage.setItem('@first_launch', 'false');
                    navigation.replace('OnboardingScreen')
                } else {
                    navigation.replace('HomeScreen')
                }
            } catch (error) {
                console.log("Splach Screen Error: -", error.message)
            }
        }

        setTimeout(() => {
            handleNavigate()
        }, 700);

    }, [])


    return (
        <View style={styles.container}>
            {/* <Text style={styles.mainContent}>SplashScreen</Text> */}
            <Image source={AppImages.logo}  style={styles.mainContent}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainContent: {
       height:200,
       width:200
    }
})

export default SplashScreen
