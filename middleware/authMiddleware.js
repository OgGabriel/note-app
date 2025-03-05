const jwt = require('jsonwebtoken');

// Middleware to authenticate user
const authenticate = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.user = decoded; // Save the decoded user information to the request object
        next(); // Proceed to the next middleware or route handler
    });
};

module.exports = { authenticate };