const registerModel = require('../models/registerModel'); // Assume UserModel is the ORM or raw query model
const UserModel = require('../models/loginModel'); // Assume UserModel is the ORM or raw query model

exports.register = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    // Basic validation
    if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ success: false, message: 'Please provide all required fields' });
    }

    //If email not in use
    try {
        // Check if email is already in use
        const existingUser = await UserModel.findByEmail(email);

        if (existingUser) {
            return res.status(400).json({ success: false, message: 'Email is already in use' });
        }

        // Create a new user
        const newUser = await registerModel.registerUser(firstName, lastName, email, password);

        const token = generateToken(newUser); // Mock function, replace with actual token generation
        // Respond with success message
        res.status(201).json({ success: true,token, message: 'User registered successfully', user: newUser });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};