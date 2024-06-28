import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Component/Header/Header'
import { ScrollView } from 'react-native-gesture-handler'
import { AppStyle } from '../common/AppStyle'
import { responsiveHeight, responsiveWidth } from '../common/metrices'



const FindCpga = () => {

    const [semester, setSemester] = useState()
    const [sgpa, setSgpa] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')
    const [data, setData] = useState([])
    const [totalSgpa, setTotalSgpa] = useState(0)
    const [cgpa, setCgpa] = useState()
    const [percentage, setPercentage] = useState()
    const [showResult, setShowResult] = useState(false)

    const addData = () => {
        if (sgpa == null || sgpa == undefined) {
            console.log('spga in addData', sgpa)
            setErrorMessage('Enter valid data')
            return
        }
        const parsedSgpa = parseFloat(sgpa);
        if (parsedSgpa > 10 || parsedSgpa <= 0) {
            setErrorMessage('Enter valid data')
            return
        }
        setErrorMessage('')
        const newData = [...data, { id: data.length + 1, yourSpga: parsedSgpa, Semester: semester }]
        setData(newData)
        setSemester('')
        setSgpa(null)
    }

    const handleDelete = (id) => {
        const updatedData = data.filter(item => item.id !== id)
        setData(updatedData);
    }

    useEffect(() => {
        //reduce is a array method that add all the value in array
        const total = data.reduce((acc, item) => acc + item.yourSpga, 0)
        const count = data.length;


        const average = count > 0 ? total / count : 0;
        setCgpa(average)
        setTotalSgpa(total)

        if (cgpa != null || cgpa != undefined) {
            console.log('finding percentage')
            const p = cgpa * 9.5
            setPercentage(p)

        }
    }, [data, addData])


    console.log('semester', semester)
    console.log('sgpa', sgpa)
    console.log("data", data)
    console.log('Total spga: - ', totalSgpa)
    console.log("Your cgpa: ", cgpa);
    console.log('percengae : ', percentage);
    return (
        <>
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
                        placeholder='Ex: 8.42'
                        placeholderTextColor='grey'
                        style={styles.input2}
                        value={sgpa}
                        onChangeText={(value) => {
                            setSgpa(value)
                            setErrorMessage('')
                            setShowResult(false)
                        }}
                        keyboardType='numeric'
                    />
                </View>

                {
                    errorMessage != ''
                    &&
                    <Text style={styles.errorStyle}>{errorMessage}</Text>
                }

                <TouchableOpacity onPress={() => {
                    addData()
                }}>
                    <View style={styles.addSemester}>
                        <Text style={styles.addSemesterText}>+ Add Semester</Text>
                    </View>
                </TouchableOpacity>

                <View>
                    <FlatList
                        data={data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            return (
                                <>
                                    <View style={styles.listMainContainer}>
                                        <View style={styles.listContainer}>
                                            <Text style={styles.semesterData}>Semester:   {item.Semester}</Text>
                                            <View style={styles.border}></View>
                                            <Text style={styles.input2}>Sgpa:   {item.yourSpga}</Text>
                                        </View>
                                        <TouchableOpacity onPress={() => handleDelete(item.id)}>
                                            <View style={styles.deleteContainer}><Text style={{ color: 'red', fontSize: 15 }}>X</Text></View>
                                        </TouchableOpacity>
                                    </View>
                                </>
                            )
                        }}
                    />
                </View>

                <View style={styles.mainButton}>
                    <TouchableOpacity onPress={() => {
                        setShowResult(false)
                        setData([])
                        setErrorMessage('')
                        setPercentage(null)
                        setCgpa(null)
                    }}>
                        <View style={styles.reset}>
                            <Text style={{ color: AppStyle.themeColor, fontSize: 15 }}>Reset</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        setShowResult(true)

                    }} >
                        <View style={styles.calculate}>
                            <Text style={{ color: 'white', fontSize: 15 }}>Calculate</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.resultContainer}>
                    <View style={styles.resultPercentage}>
                        {
                            showResult == true
                                ?
                                <Text style={{ color: AppStyle.themeColor, fontSize: 15, marginLeft: 10, fontWeight: '700' }}>{`Percentage: ${percentage}`}</Text>
                                :
                                <Text style={{ color: AppStyle.themeColor, fontSize: 15, marginLeft: 10 }}>{`Percentage:`}</Text>

                        }
                    </View>
                    <View style={styles.resultBorder}></View>
                    <View style={styles.resultCgpa}>
                        {
                            showResult == true
                                ?
                                <Text style={{ color: AppStyle.themeColor, fontSize: 15, marginLeft: 10, fontWeight: 700 }}>{`Cgpa: ${cgpa}`}</Text>
                                :
                                <Text style={{ color: AppStyle.themeColor, fontSize: 15, marginLeft: 10, fontWeight: 700 }}>{`Cgpa: `}</Text>
                        }

                    </View>
                </View>


            </ScrollView>
        </>


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
        // marginRight: 50,
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
        // width: '60%',
        height: 45,
        marginHorizontal: 40,
        borderRadius: 10,
        borderStyle: 'dotted',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: AppStyle.themeColor
    },
    addSemesterText: {
        color: AppStyle.themeColor
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
        flex: 1
    },
    semesterData: {
        flex: 1.5,
        color: 'black',
        marginLeft: 10
    },
    deleteContainer: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderColor: 'red',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    listMainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 16
    },
    calculate: {
        width: responsiveWidth(130),
        height: responsiveHeight(40),
        backgroundColor: AppStyle.themeColor,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'

    },
    reset: {
        width: responsiveWidth(130),
        height: responsiveHeight(40),
        // backgroundColor: 'red',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: AppStyle.themeColor
    },
    mainButton: {
        flexDirection: 'row',
        width: '100%',
        // backgroundColor: 'green',
        justifyContent: 'space-evenly',
        marginVertical: 20
    },
    resultContainer: {
        height: responsiveHeight(50),
        // width:'80%',
        borderRadius: 2,
        // backgroundColor: 'red',
        marginHorizontal: 25,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: AppStyle.themeColor,
        flexDirection: 'row',
        // alignItems:'center',
        // justifyContent:'center',
        marginBottom: 50
    },
    resultBorder: {
        borderLeftWidth: 3,
        height: '100%',
        marginRight: 10,
        // flex: 1,
        borderColor: AppStyle.themeColor,

    },
    resultPercentage: {
        flex: 2,
        // backgroundColor:'green',
        justifyContent: 'center'
    },
    resultCgpa: {
        flex: 2,
        // backgroundColor:'blue'
        justifyContent: 'center'

    },
    errorStyle: {
        color: 'red',
        marginHorizontal: 20,
        fontSize: 15,
        fontWeight: '600',
        marginBottom: 10
    }

})

export default FindCpga
