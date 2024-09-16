const UserModel = require('../models/loginModel'); // Assume UserModel is the ORM or raw query model

const GenerateToken = require('../generateToken');

exports.login = async (req, res) => {

  //  console.log("Function call");

    const { email, password } = req.body; // Retrieve email and password from the request

    if(!email || !password){
        return res.status(400).json({ success: false, message: 'Please provide email and password'})
    }

    try{

        console.log('Login Form Data:', req.body);

        //Query the database to find the user with providided password
        const user = await UserModel.findByEmail(email);

        if(!user) {
            return res.status(401).json({ success: false, message: 'Invalid email' })
        }

        //check if password matches 
        if(user.password === password){
            const token = GenerateToken.generateToken(user); 
            return res.status(200).json ({ success: true, token, message: 'Login successful' });
        } else {
            return res.status(401).json({ success: false, message: 'Invalid password'});
        }
    } catch (err) {
        console.error('Error during login', err);
        return res.status(500).json ({ success: false, message: 'Server error' });
    }
};