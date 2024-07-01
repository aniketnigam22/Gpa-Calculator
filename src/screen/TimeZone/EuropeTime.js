import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AppStyle } from '../../common/AppStyle'
import axios from 'axios';
import Header from '../../Component/Header/Header';


const EuropeTime = () => {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const API = 'https://timeapi.io/api/Time/current/zone?timeZone=Europe/London';
                const response = await axios.get(API);
                setData(response.data);
            } catch (error) {
                setError(error);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <Header headerText={'England Time Zone'} />
            <View style={styles.container}>

                {error ? (
                    <Text style={styles.error}>Failed to load data</Text>
                ) : (
                    <View style={styles.dataContainer}>
                        <Text style={styles.text}><Text style={styles.head}>Year:</Text>   {data.year}</Text>
                        <Text style={styles.text}><Text style={styles.head}>Month:</Text> {data.month}</Text>
                        <Text style={styles.text}><Text style={styles.head}>Day:</Text> {data.day}</Text>
                        <Text style={styles.text}><Text style={styles.head}>Hour:</Text> {data.hour}</Text>
                        <Text style={styles.text}><Text style={styles.head}>Minute:</Text> {data.minute}</Text>
                        <Text style={styles.text}><Text style={styles.head}>Seconds:</Text> {data.seconds}</Text>
                        <Text style={styles.text}><Text style={styles.head}>Milliseconds:</Text> {data.milliSeconds}</Text>
                        <Text style={styles.text}><Text style={styles.head}>DateTime:</Text> {data.dateTime}</Text>
                        <Text style={styles.text}><Text style={styles.head}>Date:</Text> {data.date}</Text>
                        <Text style={styles.text}><Text style={styles.head}>Time:</Text> {data.time}</Text>
                        <Text style={styles.text}><Text style={styles.head}>Time Zone:</Text> {data.timeZone}</Text>
                        <Text style={styles.text}><Text style={styles.head}>Day of Week:</Text> {data.dayOfWeek}</Text>
                        <Text style={styles.text}><Text style={styles.head}>DST Active:</Text> {data.dstActive ? 'Yes' : 'No'}</Text>

                    </View>
                )}
            </View>
        </>
    )
}

export default EuropeTime


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    dataContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        borderColor: AppStyle.themeColor,
        borderWidth: 2
    },
    text: {
        color: '#333',
        fontSize: 18,
        marginVertical: 2,
        fontWeight: '600'
    },
    error: {
        color: 'red',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
    },
    head: {
        color: AppStyle.themeColor,
        fontWeight: '800'
    }
});
