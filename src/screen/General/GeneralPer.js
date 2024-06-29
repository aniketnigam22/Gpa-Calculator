import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Header from '../../Component/Header/Header'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../common/metrices'
import { AppStyle } from '../../common/AppStyle'

const GeneralPer = () => {
    const [discount, setdiscount] = useState()
    const [amount, setAmount] = useState()
    const [resultAmount, setresultAmount] = useState(0)
    const [message, setMessage] = useState('')

    const calculateOutOfPercentage = () => {
        const percentageValue = parseFloat(discount)
        const outOfValueNumber = parseFloat(amount)

        if (isNaN(percentageValue) || isNaN(outOfValueNumber)) {
            setMessage('Please enter valid numbers')
            setresultAmount(0)
            return
        }

        const calculatedValue = (percentageValue / 100) * outOfValueNumber

        setresultAmount(calculatedValue)
        setMessage('')
    }
    const handleReset = () => {
        setdiscount()
        setAmount()
        setMessage('')
    }

    console.log('discount', discount)
    console.log('amount', amount)


    return (
        <View>
            <Header headerText={'General %'} />

            <View style={styles.inputContainer}>

                <Text style={styles.text}>Enter  percentage</Text>

                <TextInput
                    placeholder='Ex: 12%'
                    placeholderTextColor={'grey'}
                    style={styles.textInput}
                    onChangeText={(discount) => {
                        setdiscount(discount)
                        setMessage('')
                    }}
                    keyboardType="numeric"
                    value={discount}
                />

                <Text style={styles.text}>Out of</Text>

                <TextInput
                    placeholder='Rs: 476'
                    placeholderTextColor={'grey'}
                    style={styles.textInput}
                    onChangeText={(amount) => {
                        setAmount(amount)
                        setMessage('')
                    }}
                    keyboardType="numeric"
                    value={amount}
                />
                {
                    message != ''
                        ?
                        <Text style={styles.errorMessage}>{`${message}`}</Text>
                        :
                        <Text style={styles.message}>{`Result : ${resultAmount}`}</Text>
                }
                <TouchableOpacity onPress={() => {
                    calculateOutOfPercentage()
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

                <Text style={styles.note}>Note: Enter percentage between 0 - 100</Text>
            </View>
        </View>
    )
}



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

export default GeneralPer


