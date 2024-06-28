import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'

const ToUsd = () => {

    // const [amount, setAmount] = useState()
    // const [fromCurrency, setFromCurrency] = useState('')
    // const [toCurrency, setToCurrency] = useState('')



    const host = 'api.frankfurter.app';
    const amount = 10;  // Amount in INR
    const fromCurrency = 'INR';
    const toCurrency = 'USD';

    axios.get(`https://${host}/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`)
        .then(response => {
            const rates = response.data.rates;
            alert(`10 INR = ${rates.USD} USD`);
        })
        .catch(error => {
            console.error('Error fetching conversion rates:', error);
        });

    return (
        <View>
            <Text>ToUsd</Text>
        </View>
    )
}

export default ToUsd

const styles = StyleSheet.create({})