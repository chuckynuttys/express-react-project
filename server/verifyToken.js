const jwt = require('jsonwebtoken');

const SECRET_KEY = 'your_secret_key_here'; // Same secret used in token generation

// Middleware to protect routes
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Expect token in 'Authorization: Bearer <token>'

    if (!token) {
        return res.status(401).json({ success: false, message: 'Access denied. No token provided.' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, SECRET_KEY);

        // Attach the decoded user to the request object
        req.user = decoded;

        // Continue to the next middleware or route handler
        next();
    } catch (error) {
        return res.status(403).json({ success: false, message: 'Invalid token' });
    }
};