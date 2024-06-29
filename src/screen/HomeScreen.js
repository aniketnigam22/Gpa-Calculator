import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import Header from '../Component/Header/Header';
import { responsiveHeight, responsiveWidth } from '../common/metrices';
import { AppStyle } from '../common/AppStyle';
import CalculateButton from '../Component/CalculateButton/CalculateButton';
import BottomSheet from '@gorhom/bottom-sheet';
import BottomNav from '../Component/bottomNav/BottomNav';

const HomeScreen = ({ navigation }) => {
  // ref
  const bottomSheetRef = useRef(null);

  // state
  const [isBottomNavVisible, setIsBottomNavVisible] = useState(true);

  // variables
  const snapPoints = useMemo(() => ['25%', '40%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
    if (index === -1) {
      setIsBottomNavVisible(true);
    } else {
      setIsBottomNavVisible(false);
    }
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Header headerText={'GPA Calculator'} />
      <View style={styles.gpaHead}>
        <Text style={styles.gpaHeadText}>GPA</Text>
      </View>

      <View style={styles.buttonContainer}>
        <CalculateButton buttonText={'SGPA to %'} navigation={navigation} screenName={'SpgaToP'} />
        <CalculateButton buttonText={'CGPA to %'} navigation={navigation} screenName={'CgpaToP'} />
      </View>

      <View style={styles.buttonContainer}>
        <CalculateButton buttonText={'Find CGPA'} navigation={navigation} screenName={'FindCpga'} />
        <CalculateButton buttonText={'% to GPA'} navigation={navigation} screenName={'PercentageToGpa'} />
      </View>

      <View style={styles.gpaHead2}>
        <Text style={styles.gpaHeadText}>Currency Conversion</Text>
      </View>

      <View style={styles.buttonContainer}>
        <CalculateButton buttonText={'USD'} navigation={navigation} screenName={'ToUsd'} />
        <CalculateButton buttonText={'Japan'} navigation={navigation} screenName={'ToJapan'} />
      </View>

      <View style={styles.buttonContainer}>
        <CalculateButton buttonText={'Swiss'} navigation={navigation} screenName={'ToSwiss'} />
        <CalculateButton buttonText={'Europe'} navigation={navigation} screenName={'ToEurope'} />
      </View>

      <View style={styles.gpaHead3}>
        <Text style={styles.gpaHeadText}>General</Text>
      </View>

      <View style={styles.buttonContainer}>
        <CalculateButton buttonText={'Discount'} navigation={navigation} screenName={'Discount'} />
        <CalculateButton buttonText={'General %'} navigation={navigation} screenName={'GeneralPer'} />
      </View>

      {isBottomNavVisible && (
        <View style={styles.bottomnav}>
          <BottomNav handleSheet={() => {
            bottomSheetRef.current.snapToIndex(1)
          }} />
        </View>
      )}

      <BottomSheet
        enablePanDownToClose={true}
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enableOverDrag={false}
        handleIndicatorStyle={{ display: "none" }}
        handleComponent={null}
      >
        <View style={styles.sheetContainer}>
          <View style={styles.sheetLine}></View>
          <TouchableOpacity>
            <View style={styles.bottomSheetButton}>
              <Text style={styles.sheetText}>★    Rate us</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Saved')}>
            <View style={styles.bottomSheetButton}>
              <Text style={styles.sheetText}> ⇣     Saved</Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity>
            <View style={styles.bottomSheetButton}>
              <Text style={styles.sheetText}>☏    Contact Us</Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity>
            <View style={styles.bottomSheetButton}>
              <Text style={styles.sheetText}>❤    Favourites</Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity>
            <View style={styles.bottomSheetButton}>
              <Text style={styles.sheetText}> +     More Apps</Text>
            </View>
          </TouchableOpacity>


        </View>
      </BottomSheet>
    </View>
  );
};

export default HomeScreen;

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
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 25
  },
  mainContainer: {
    flex: 1
  },
  bottomnav: {
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute'
  },
  gpaHead2: {
    borderWidth: 1,
    width: responsiveWidth(155),
    height: responsiveHeight(25),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: AppStyle.headingRadius,
    borderColor: AppStyle.themeColor,
    margin: 20,
  },
  gpaHead3: {
    borderWidth: 1,
    width: responsiveWidth(100),
    height: responsiveHeight(25),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: AppStyle.headingRadius,
    borderColor: AppStyle.themeColor,
    margin: 20,
  },
  sheetContainer: {
    marginHorizontal: 30
  },
  sheetLine: {
    borderTopWidth: 5,
    borderRadius: 30,
    borderColor: "lightgray",
    marginTop: 10,
    marginHorizontal: 60,
    marginBottom: 10
  },
  bottomSheetButton: {
    marginTop: 20
  },
  sheetText: {
    color: 'black',
    fontSize: 17
  }
});
