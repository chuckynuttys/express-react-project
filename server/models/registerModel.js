const db = require('../db.js'); // Database connection


const registerModel = {
    registerUser: (firstName, lastName, email, password) => {
        return new Promise((resolve, reject) => {
            // Use the correct query and value placeholders
            const query = 'INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)';
            const values = [firstName, lastName, email, password];
            console.log(values);
            // Execute the query
            db.query(query, values, (err, results) => {
                if (err) {
                    console.error('Error executing query:', err);
                    reject(err); // Reject the promise on error
                } else {
                    resolve(results); // Resolve the promise with query results
                }
            });
        });
    }
};

module.exports = registerModel;