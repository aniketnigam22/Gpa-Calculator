import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Component/Header/Header'
import { responsiveHeight, responsiveWidth } from '../common/metrices'
import { AppStyle } from '../common/AppStyle'
import CalculateButton from '../Component/CalculateButton/CalculateButton'


const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Header headerText={'GPA Calculator'} />
      <View style={styles.gpaHead}>
        <Text style={styles.gpaHeadText}>GPA</Text>
      </View>

      <View style={styles.buttonContainer}>
        <CalculateButton buttonText={'SGPA to %'} navigation={navigation} screenName={'SpgaToP'}/>
        <CalculateButton buttonText={'CGPA to %'} navigation={navigation} screenName={'CgpaToP'}/>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  gpaHead: {
    borderWidth: 1,
    width: responsiveWidth(44),
    height: responsiveHeight(25),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: AppStyle.headingRadius,
    borderColor: AppStyle.themeColor,
    margin: 20,
  },
  gpaHeadText: {
    color: AppStyle.themeColor,
    fontSize: AppStyle.headingFontSize
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    marginHorizontal: 10
  }
})