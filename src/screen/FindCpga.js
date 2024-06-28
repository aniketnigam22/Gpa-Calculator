import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../Component/Header/Header'
import { ScrollView } from 'react-native-gesture-handler'


const FindCpga = () => {

    const [semester, setSemester] = useState()
    const [sgpa, setSgpa] = useState()
    const [errorMessage, setErrorMessage] = useState('')
    const [data, setData] = useState([])

    const addData = () => {
        if (sgpa > 10) {
            setErrorMessage('Enter valid data')
            return
        }
        if (sgpa > 0) {
            setData([...data, { id: data.length + 1, yourSpga: sgpa, Semester: semester }])
            setSemester()
            setSgpa()
        }
    }


    console.log(`Semester: ${semester}`)
    console.log(`Spga: ${sgpa}`)
    console.log("data", data)
    return (


        <View style={styles.container}>

            <Header headerText={'Find CGPA'} />
            <ScrollView>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder='Semester'
                        placeholderTextColor='grey'
                        style={styles.input1}
                        value={semester}
                        onChangeText={(value) => {
                            setSemester(value)
                        }}
                    />
                    <View style={styles.border}></View>
                    <Text style={styles.inputContainerText}>Sgpa:</Text>
                    <TextInput
                        placeholder='0'
                        placeholderTextColor='grey'
                        style={styles.input2}
                        value={sgpa}
                        onChangeText={(value) => {
                            setSgpa(value)
                        }}
                    />
                </View>

                <TouchableOpacity onPress={() => {
                    addData()
                }}>
                    <View style={styles.addSemester}>
                        <Text style={styles.addSemesterText}>Add Semester</Text>
                    </View>
                </TouchableOpacity>

                <View>
                    <FlatList
                        data={data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={styles.listContainer}>
                                    <Text style={styles.semesterData}>{item.Semester}</Text>
                                    <View style={styles.border}></View>
                                    <Text style={styles.input2}>{item.yourSpga}</Text>
                                </View>
                            )
                        }}
                    />
                </View>
            </ScrollView>

        </View>

    )
}


const styles = StyleSheet.create({
    container: {

    },
    inputContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        alignItems: 'center',
        marginHorizontal: 25,
        marginRight: 50,
        borderRadius: 10,
        marginVertical: 14
    },
    inputContainerText: {
        color: 'black',
        flex: 1,
        // backgroundColor: 'green'

    },
    input1: {
        flex: 1.5,
        // backgroundColor: 'blue'
        color: 'black'
    },
    input2: {
        flex: 1,
        // backgroundColor: 'red'
        color: 'black'
    },
    border: {
        borderLeftWidth: 0.5,
        height: '80%',
        marginRight: 10
    },
    addSemester: {
        // backgroundColor:'red',
        width: '60%',
        height: 75,
        marginHorizontal: 50,
        borderRadius: 10,
        borderStyle: 'dotted',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addSemesterText: {
        color: 'black'
    },
    listContainer: {
        flexDirection: 'row',
        borderWidth: 0.5,
        alignItems: 'center',
        marginHorizontal: 25,
        marginRight: 50,
        borderRadius: 10,
        marginVertical: 14,
        height: 40,
    },
    semesterData: {
        flex: 1.5,
        color: 'black',
        marginLeft: 10
    }
})

export default FindCpga
