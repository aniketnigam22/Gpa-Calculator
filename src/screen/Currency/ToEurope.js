import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import Header from '../../Component/Header/Header'
import { Picker } from '@react-native-picker/picker'
import SelectDropdown from 'react-native-select-dropdown'
import { AppImages } from '../../common/AppImages'
import { responsiveHeight, responsiveWidth } from '../../common/metrices'
import { AppStyle } from '../../common/AppStyle'
import { TouchableOpacity } from 'react-native-gesture-handler'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ToEurope = () => {
  const [fromCurrency, setFromCurrency] = useState('INR')
  const [fromCurrencyValue, setFromCurrencyValue] = useState()
  const [toCurrency, setToCurrency] = useState('EUR')
  const [error, setError] = useState('')
  const [resultamount, setResultAmount] = useState()

  const getResultCurrency = async () => {
    if (fromCurrencyValue == null || fromCurrencyValue == undefined || fromCurrencyValue == '') {
      setResultAmount()
      console.log('Invalid value')
      setError('Invalid value')
      return
    }

    console.log(fromCurrencyValue)
    try {
      const host = 'api.frankfurter.app';
      await axios.get(`https://${host}/latest?amount=${fromCurrencyValue}&from=${fromCurrency}&to=${toCurrency}`)
        .then(response => {
          const rates = response.data.rates;
          console.log('result from api', rates)
          if (rates.EUR != null && rates.EUR !== '') {
            console.log('value set for EUR', rates.EUR);
            setResultAmount(rates.EUR);
          } else if (rates.INR != null && rates.INR !== '') {
            console.log('value set for inr', rates.INR);
            setResultAmount(rates.INR);
          }
        })
        .catch(error => {
          console.error('Error fetching conversion rates:', error);
        });
    } catch (error) {
      console.log('Error while fetching currency', error.message)
      setError('Something went wrong')
    }
  }

  const emojisWithIcons = [
    { title: 'INR' },
    { title: 'EUR' },
  ];
  // console.log('Result', resultamount)
  return (
    <View >
            <Header headerText={'INR to EUR'} />
            <Text>hello</Text>

            <View style={styles.inputContainer}>
                <SelectDropdown
                    data={emojisWithIcons}
                    onSelect={(selectedItem, index) => {
                        setResultAmount()
                        if (selectedItem.title === 'INR') {
                            setFromCurrency('INR');
                            setToCurrency('EUR');
                        } else if (selectedItem.title === 'EUR') {
                            setFromCurrency('EUR');
                            setToCurrency('INR');
                        }

                    }}
                    renderButton={(selectedItem, isOpened) => {
                        return (
                            <View style={styles.dropdownButtonStyle}>
                                <Text style={styles.dropdownButtonTxtStyle}>
                                    {(selectedItem && selectedItem.title) || 'INR'}
                                </Text>
                                <Image source={AppImages.dropDown} style={styles.dropdown} />
                            </View>
                        );
                    }}
                    renderItem={(item, index, isSelected) => {
                        return (
                            <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' }) }}>
                                {/* <Icon name={item.icon} style={styles.dropdownItemIconStyle} /> */}
                                <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
                            </View>
                        );
                    }}
                    showsVerticalScrollIndicator={false}
                    dropdownStyle={styles.dropdownMenuStyle}
                />
                <TextInput
                    placeholder='Ex: Rs 123'
                    placeholderTextColor='grey'
                    style={styles.input1}
                    value={fromCurrencyValue}
                    onChangeText={(value) => {
                        setFromCurrencyValue(value)
                        setError('')
                    }}
                    keyboardType='numeric'
                />

            </View>
            {
                resultamount != undefined
                &&
                (
                    <>
                        {
                            fromCurrency === 'INR'
                                ?
                                <Text style={styles.result}>Result: € {resultamount}</Text>
                                :
                                <Text style={styles.result}>Result: ₹{resultamount}</Text>
                        }
                    </>
                )
            }

            {
                error != ''
                &&
                <Text style={styles.err}>{error}</Text>

            }
            <TouchableOpacity onPress={() => {
                getResultCurrency()
            }}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Get</Text>
                </View>
            </TouchableOpacity>
        </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
      flexDirection: 'row',
      borderWidth: 1,
      height: 45,
      // width: '100%',
      // backgroundColor: 'red',
      borderRadius: 12,
      marginHorizontal: 16
  },
  dropdownButtonStyle: {
      width: 100,
      height: 45,
      // backgroundColor: '#E9ECEF',
      borderRadius: 12,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
      flex: 1,
      fontSize: 15,
      fontWeight: '500',
      color: '#151E26',
  },
  dropdownMenuStyle: {
      backgroundColor: '#E9ECEF',
      borderRadius: 8,
  },
  dropdownItemStyle: {
      width: '100%',
      flexDirection: 'row',
      paddingHorizontal: 12,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
      flex: 1,
      fontSize: 18,
      fontWeight: '500',
      color: '#151E26',
  },
  dropdownItemIconStyle: {
      fontSize: 28,
      marginRight: 8,
  },
  dropdown: {
      height: 15,
      width: 15
  },
  input1: {
      // backgroundColor:'red',
      width: '50%',
      // marginRight:30,
      borderLeftWidth: 1,
      marginLeft: 20,
      color: 'black'
  },
  button: {
      // backgroundColor:'red',
      marginHorizontal: responsiveWidth(20),
      height: responsiveHeight(40),
      borderWidth: 1,
      borderRadius: 10,
      borderColor: AppStyle.themeColor,
      marginTop: 20,
      marginBottom: 5,
      justifyContent: 'center',
      alignItems: 'center'
  },
  buttonText: {
      color: AppStyle.themeColor
  },
  result: {
      color: 'black',
      fontSize: 17,
      marginLeft: 20,
      marginTop: 15
  },
  err: {
      color: 'red',
      fontSize: 17,
      marginLeft: 20,
      marginTop: 15
  }

})

export default ToEurope
