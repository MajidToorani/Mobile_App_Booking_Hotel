/**
 * File Name: MTdatabase.js
 *
 * Revision History:
 *       Majid Tooranisama, 2019-04-14 : Created
 */

var db;

function errorHandler(tx, error) {
    console.error("SQL error: " + tx + " (" + error.code + ")--" + error.message);
}

var DB = {
    MTcreateDatabase: function () {
        var shortName = "MTBookingDB";
        var version = "1.0";
        var displayName = "DB for Book Easy Hotel App";
        var dbSize = 2 * 1024 * 1024;

        console.info("Creating database ...");
        //or window.openDatabase()
        db = openDatabase(shortName, version, displayName, dbSize, dbCreateSuccess);

        function dbCreateSuccess() {
            console.info("Success: Database creation successful.");
        }
    },

    MTcreateTables: function () {

        function successDrop() {
            console.info("Success: Dropping Table successful. ");
        }

        function successCreate() {
            console.info("Success: Create Table successful. ");
        }

        function successInsert() {
            console.info("Success: Data insert successful");
        }

        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function txFunction(tx) {
            var options = [];
            //repeat for other tables
            //=======================

            //don't want to drop any table now. only if necessary.
            //=====================================================
            console.info("Dropping Table roomType if exists...");
            var sqlDropType = "DROP TABLE IF EXISTS roomType;";


            tx.executeSql(sqlDropType, options, successDrop, errorHandler);
            //=====================================================
            //uncomment if necessary

            console.info("Creating Table: roomType...");
            var sqlCreateType = "CREATE TABLE IF NOT EXISTS roomType("
                + "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
                + "name VARCHAR(20) NOT NULL);";

            tx.executeSql(sqlCreateType, options, successCreate, errorHandler);

            console.info("Inserting data to Table roomType...");
            //'' or "" both works.
            var sqlInsertType = ["INSERT INTO roomType(name) VALUES('Please choose your room');",
                " INSERT INTO roomType(name) VALUES('One Bed Room');",
                " INSERT INTO roomType(name) VALUES('Two Bed Room');",
                " INSERT INTO roomType(name) VALUES('Three Bed Room');",
                " INSERT INTO roomType(name) VALUES('Four Bed Room');"];

            for (var i = 0; i < sqlInsertType.length; i++) {
                tx.executeSql(sqlInsertType[i], options, successInsert, errorHandler);

            }
            //===================================================================

            console.info("Creating Other Tables:");
            //table with foreign key snippet
            var sqlCreateBooking = "CREATE TABLE IF NOT EXISTS bookings(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "guestName VARCHAR(30) NOT NULL," +
                "typeId INTEGER NOT NULL," +
                "guestEmail VARCHAR(30)," +
                "guestComments TEXT," +
                "bookingDate DATE," +
                "hasRating VARCHAR(1)," +
                "rating1 INTEGER," +
                "rating2 INTEGER," +
                "rating3 INTEGER," +
                "FOREIGN KEY(typeId) REFERENCES roomType(id));";
            tx.executeSql(sqlCreateBooking, options, successCreate, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    MTdropTables: function () {
        function successDrop() {
            console.info("Success: Dropping Table successful. ");
        }

        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function txFunction(tx) {
            var options = [];
            //repeat for other tables
            //=======================
            console.info("Dropping Table: roomType");
            var sqlType = "DROP TABLE IF EXISTS roomType;";

            tx.executeSql(sqlType, options, successDrop, errorHandler);
            //=====================================================
            console.info("Dropping Table: bookings");
            var sqlBooking = "DROP TABLE IF EXISTS bookings;";

            tx.executeSql(sqlBooking, options, successDrop, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};



 