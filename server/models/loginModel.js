const db = require('../db.js'); // Database connection

const UserModel = {
    findByEmail: (email) => {
      return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM users WHERE email = ?';
        db.query(query, [email], (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results[0]); // Assuming the email is unique, return the first result
          }
        });
      });
    }
  };
  
  module.exports = UserModel;