import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../common/database';
import { AppStyle } from '../common/AppStyle';
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableHighlight } from '@gorhom/bottom-sheet';
import Header from '../Component/Header/Header';

const Saved = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM cgpa;',
        [],
        (tx, results) => {
          const rows = results.rows;
          let fetchedData = [];
          for (let i = 0; i < rows.length; i++) {
            fetchedData.push(rows.item(i));
          }
          setData(fetchedData);
        },
        (tx, error) => {
          console.error('Error fetching data:', error);
        }
      );
    });
  };
  const deleteData = (id) => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM cgpa WHERE id = ?;',
        [id],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            console.log(`Data with ID: ${id} deleted successfully`);
            fetchData(); // Fetch data again to update the state
          } else {
            console.log(`Failed to delete data with ID: ${id}`);
          }
        },
        (tx, error) => {
          console.error('Error deleting data:', error);
        }
      );
    });
  };
  
  return (
    <View>
      <Header headerText={'Saved Results'} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Results</Text>
          {data?.length > 0 ? (
            data?.map((item, index) => (
              <View style={styles.DataContainer}>
                <View key={index} style={styles.item}>
                  {/* <Text style={styles.text}>ID: {item.id}</Text> */}
                  <Text style={styles.text}>Name: {item.name}</Text>
                  <Text style={styles.text}>CGPA: {item.cgpa}</Text>
                </View>

                <TouchableHighlight underlayColor={'red'} style={styles.deleteButtton} onPress={() => {
                  deleteData(item.id)
                }}>
                  <Text style={{ color: 'red', textAlign: 'center', textAlignVertical: 'center' }}>
                    X
                  </Text>
                </TouchableHighlight>
              </View>

            ))
          ) : (
            <Text style={styles.text}>No data found</Text>
          )}
        </View>
      </ScrollView>
    </View>
  )
}

export default Saved

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: AppStyle.themeColor
  },
  item: {
    marginVertical: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: AppStyle.themeColor,
    borderRadius: 20,
    backgroundColor: '#fff',
    elevation: 2,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 18,
    color: 'black'
  },
  deleteButtton: {
    borderRadius: 15,
    width: 25,
    height: 25,
    borderColor: 'red',
    borderWidth: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  DataContainer: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between',
    width: '100%'
  }
});