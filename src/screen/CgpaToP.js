import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import Header from '../Component/Header/Header'
import { responsiveHeight, responsiveWidth } from '../common/metrices'
import { AppStyle } from '../common/AppStyle'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CgpaToP = () => {

  const [value, setValue] = useState(0)
  const [spga, setSpga] = useState(0)
  const [message, setMessage] = useState('')

  const calculateSgpa = () => {
    try {
      if (value > 0) {
        const percentage = value * 9.5
        setSpga(percentage)
      } else {
        setMessage('Enter valid value')
      }
    } catch (error) {
      console.log(error);
    }
    console.log('Your cgpa to percentage: ', spga)
  }

  const handleReset = () => {
    setValue(0)
    setSpga(0)
    setMessage('')
  }


  return (
    <View>
      <Header headerText={'Cgpa To %'} />

      <View style={styles.inputContainer}>

        <Text style={styles.text}>Enter your CPGA</Text>

        <TextInput
          placeholder='Ex: 8.21'
          placeholderTextColor={'grey'}
          style={styles.textInput}
          onChangeText={(value) => {
            setValue(value)
            setSpga(0)
            setMessage('')
          }}
          keyboardType="numeric"
        />
        {
          message != ''
            ?
            <Text style={styles.errorMessage}>{`${message}`}</Text>
            :
            <Text style={styles.message}>{`Your percentage is : ${spga}`}</Text>
        }
        <TouchableOpacity onPress={() => {
          calculateSgpa()
        }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Get</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          handleReset()
        }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Reset</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.note}>Note: Enter value between 0 - 10</Text>
      </View>
    </View>
  )
}

export default CgpaToP

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 15,
    marginHorizontal: responsiveWidth(16),

  },
  textInput: {
    // backgroundColor:'red',
    marginHorizontal: responsiveWidth(16),
    height: responsiveHeight(40),
    borderWidth: 1,
    borderRadius: 10,
    color: 'black',
    marginVertical: responsiveHeight(10)
  },
  inputContainer: {
    marginTop: responsiveHeight(25)
  },
  note: {
    color: 'grey',
    fontSize: 12,
    marginHorizontal: responsiveWidth(16),
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
  errorMessage: {
    color: 'red',
    fontSize: 15,
    marginHorizontal: responsiveWidth(16),
  },
  message: {
    color: 'black',
    fontSize: 15,
    marginHorizontal: responsiveWidth(16),
  }
})