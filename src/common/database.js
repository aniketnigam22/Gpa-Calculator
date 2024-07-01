import { useEffect, useState } from 'react';
// import { useSafeAreaFrame } from 'react-native-safe-area-context';
import SQLite from 'react-native-sqlite-storage';



// Function to handle SQL errors
function errorCB(err) {
    console.log("SQL Error: " + err.message);
}

// Function to handle successful SQL execution
function successCB() {
    console.log("SQL executed fine");
}

// Function to handle database open
function openCB() {
    console.log("Database OPENED");
}

// Open the database with callbacks
var db = SQLite.openDatabase("cgpa_databas.db", "1.0", "Test Database", 200000, openCB, errorCB);


// Function to initialize the database and create tables
const initDatabase = () => {
    db.transaction((tx) => {
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS cgpa (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name VARCHAR,
          cgpa REAL
      );`,
            [],
            successCB,
            errorCB
        );
    });
};

// Function to insert data into cgpa table
const insertData = (name, cgpaValue) => {
    db.transaction((tx) => {
        tx.executeSql(
            'INSERT INTO cgpa (name, cgpa) VALUES (?, ?);',
            [name, cgpaValue],
            (tx, results) => {
                if (results.rowsAffected > 0) {
                    console.log('Data inserted successfully');
                } else {
                    console.log('Failed to insert data');
                }
            },
            errorCB
        );
    });
};

// Function to fetch data from cgpa table
const fetchData = () => {
    db.transaction((tx) => {
       return tx.executeSql(
            'SELECT * FROM cgpa;',
            [],
            (tx, results) => {
                // var len = results.rows.length;
                // for (let i = 0; i < len; i++) {
                //     let row = results.rows.item(i);
                //     const object = {
                //         id: row.id,
                //         name: row.name,
                //         cgpa: row.cgpa
                //     }
               
                // }
                return results
                // console.log(results.rows?.item(4));
            },
            errorCB
        );
    });
};

// Initialize the database on component mount


// Example usage:
// Uncomment these lines to insert data and fetch data for testing
// insertData('John Doe', 8.5); // Example insert
// fetchData(); // Example fetch

export { db, initDatabase, insertData, fetchData };
