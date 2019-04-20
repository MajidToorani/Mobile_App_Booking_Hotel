/**
 * File Name: MTbookingDAL.js
 *
 * Revision History:
 *       Majid Tooranisama, 2019-04-14 : Created
 */

var Review = {
    MTinsert: function (options) {
        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function successInsert() {
            console.info("Success: Insert successful");
            alert("New Booking Added");
        }

        function txFunction(tx) {
            var sql = "";
            sql = "INSERT INTO bookings(guestName, typeId, guestEmail, guestComments, bookingDate, hasRating, " +
                "rating1, rating2, rating3) VALUES(?,?,?,?,?,?,?,?,?);";
            tx.executeSql(sql, options, successInsert, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);

    },

    MTselectAll: function (callback) {
        var options = [];

        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function txFunction(tx) {
            console.info("Selecting all records.  ");
            var sql = "SELECT * FROM bookings;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },

    MTselect: function (callback, options) {
        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function txFunction(tx) {
            console.info("Selecting a Booking.  ");
            var sql = "SELECT * FROM bookings WHERE id=?;";

            tx.executeSql(sql, options, callback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },

    MTupdate: function (options) {
        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function successUpdate() {
            console.info("Success: Update successful");
            alert("Booking Updated successfully");
        }

        function txFunction(tx) {
            console.info("Updating..  ");
            var sql = "";
            sql = "UPDATE bookings " +
                "SET guestName=? , typeId=?, guestEmail=?, guestComments=?, bookingDate=?, hasRating=?,  rating1=?, rating2=?, rating3=?" +
                "WHERE id=?;";
            tx.executeSql(sql, options, successUpdate, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);

    },

    MTdelete: function (options) {
        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function successDelete() {
            console.info("Success: Delete successful");
            alert("Booking Deleted successfully");
        }

        function txFunction(tx) {
            console.info("Deleting..  ");
            var sql = "";
            sql = "DELETE FROM bookings " +
                "WHERE id=?;";
            tx.executeSql(sql, options, successDelete, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};

var Type = {
    MTselectAll: function (callback) {
        var options = [];

        function successTransaction() {
            console.info("Success: Transaction successful");
        }

        function txFunction(tx) {
            console.info("Selecting all records.  ");
            var sql = "SELECT * FROM roomType;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};