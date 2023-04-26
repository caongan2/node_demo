const connection = require("../DbConnect/connect");

class Admin {
    select() {
        connection.query('SELECT * FROM users', (error, results, fields) => {
            if (error) {
                console.error('Error executing query:', error);
                return;
            }
            console.log(results)
        })
    }
    create() {
        connection.query('SELECT * FROM users', (error, results, fields) => {
            if (error) {
                console.error('Error executing query:', error);
                return;
            }
            console.log(results)
        })
    }

    delete(id){
        connection.query('DELETE FROM users WHERE id = ' + id, (error, results, fields) => {
            if (error) {
                console.error('Error executing query:', error);
                return;
            }
            console.log("delete ok id = " + id)
        })
    }
}
module.exports = Admin;