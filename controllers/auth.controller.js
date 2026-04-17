const authService = require('../services/auth.service');

class AuthController {
    async register(req, res) {
        try {
            const { name, phone, email, password } = req.body;
            
            if (!name || !email || !phone || !password) {
                return res.status(400).json({ error: 'Name, phone, email, and password are required.' });
            }

            const result = await authService.registerUser({ name, phone, email, password });
            res.status(201).json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async login(req, res) {
        try {
            // Accept 'identifier' which can be either the phone string or email string
            const { identifier, password } = req.body;

            if (!identifier || !password) {
                return res.status(400).json({ error: 'Please provide your email/phone and password.' });
            }

            const result = await authService.loginUser(identifier, password);
            res.status(200).json(result);
        } catch (error) {
            res.status(401).json({ error: error.message });
        }
    }
}

module.exports = new AuthController();