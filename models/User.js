const connection = require('../config/db');

const User = {

    create: (userData, callback) => {
        const query = 'INSERT INTO usuarios (email, senha) VALUES (?, ?)';
        connection.query(query, [userData.email, userData.password], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    findAll: (callback) => {
        const query = 'SELECT * FROM usuarios';
        connection.query(query, (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    }
    // outros
};

module.exports = User;
