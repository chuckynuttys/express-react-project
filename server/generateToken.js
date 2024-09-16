const jwt = require('jsonwebtoken');

//Secret key for signing tokens
const SECRET_KEY = 'your_secret_key_here'; // In production, store this in .env

const generateToken = (user) => {

    console.log(user);

    const payload = {
        userId: user.user_id,
        email: user.email,
        firstname: user.firstName,
        lastName: user.lastName
    };

    // create a token with the payload and a secret key with an expriation time
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });

    return token;

}

module.exports = {generateToken}