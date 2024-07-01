import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { AppImages } from '../common/AppImages';
import { useNavigation } from '@react-navigation/native';


const OnboardingScreen = () => {
    const navigation = useNavigation();
    const handleDone = () => {
        navigation.replace('HomeScreen'); // Replace 'NewScreen' with your target screen name
    };

    const handleSkip = () => {
        navigation.replace('HomeScreen'); // Replace 'NewScreen' with your target screen name
    };
    return (
        <Onboarding
            pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image source={AppImages.onBoarding1}  style={{height:500,width:500}}resizeMode='contain'/>,
                    title: '',
                    subtitle: '',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={AppImages.onBoarding2}   style={{height:300,width:300}}/>,
                    title: '',
                    subtitle: '',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={AppImages.onBoarding3}  style={{height:300,width:300}}/>,
                    title: '',
                    subtitle: '',
                },
            ]}

            onDone={handleDone}
            onSkip={handleSkip}
        />
    )
}

export default OnboardingScreen

const styles = StyleSheet.create({})