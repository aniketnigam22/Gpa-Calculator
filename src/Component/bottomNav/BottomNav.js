import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { responsiveHeight } from '../../common/metrices';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AppImages } from '../../common/AppImages';

const BottomNav = ({ handleSheet }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleSheet} style={styles.drawerContainer}>
                <Image source={AppImages.drawerr} style={styles.drawer} />
            </TouchableOpacity>
            <Text style={styles.text}>Thank you for using our App :)</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'white',
        height: responsiveHeight(50),
        borderTopLeftRadius: 10,
        borderTopRightRadius: 20,
        elevation: 20,
        justifyContent: 'space-between',
        alignItems: 'center', // Align items to the start of the container
        flexDirection: 'row'
    },
    drawer: {
        height: 30,
        width: 30,
    },
    drawerContainer: {
        height: 50,
        width: 50,
        marginLeft: 20,
        backgroundColor: 'transparent', 
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'black',
        marginRight: 20,
        fontSize:16,
        fontWeight:'600'
    }
});

export default BottomNav;

