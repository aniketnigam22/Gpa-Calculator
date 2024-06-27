import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from '../../common/metrices'
import { AppImages } from '../../common/AppImages'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CalculateButton = ({ buttonText, navigation, screenName }) => {
    const handlePress = () => {
        navigation.navigate(screenName);
    }
    return (
        <TouchableOpacity onPress={() => {
            handlePress()
        }}>
            <View style={styles.container}>
                <Image source={AppImages.calHeader} style={styles.buttonImg} />
                <Text style={styles.buttonText}>{buttonText}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CalculateButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        width: responsiveWidth(140),
        height: 40,
        borderRadius: 10,
        elevation: 20,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonImg: {
        height: responsiveHeight(20),
        width: responsiveWidth(20),
        marginLeft: 10
    },
    buttonText: {
        flex: 1,
        marginLeft: 15,
        color: 'black',
        fontSize: 15,
        fontWeight: '500'
    }
})