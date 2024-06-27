import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight } from '../../common/metrices'
import { AppImages } from '../../common/AppImages'
import { AppStyle } from '../../common/AppStyle'

const Header = ({ headerText }) => {
    return (
        <>
            <StatusBar
                barStyle="light-content"
                backgroundColor={AppStyle.themeColor}
                hidden={false}
            />
            <View style={styles.container}>
                <Image source={AppImages.calHeader} style={styles.headerImg} />
                <Text style={styles.headerText}>{headerText}</Text>
            </View>
        </>

    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: AppStyle.themeColor,
        height: responsiveHeight(50),
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    headerImg: {
        height: 50,
        width: 50
    },
    headerText: {
        color: 'white',
        fontSize: responsiveFontSize(23),
        fontWeight: 'bold',
        marginLeft: 30
    }
})