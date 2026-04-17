const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authRepo = require('../repositories/auth.repository');

const JWT_SECRET = process.env.JWT_SECRET || 'your_super_secret_key_wibha';

class AuthService {
    async registerUser(userData) {
        // 1. Check if email OR phone is already registered
        const existingUserByEmail = await authRepo.getUserByCredential(userData.email);
        const existingUserByPhone = await authRepo.getUserByCredential(userData.phone);
        
        if (existingUserByEmail) throw new Error('Email is already registered.');
        if (existingUserByPhone) throw new Error('Phone number is already registered.');

        // 2. Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(userData.password, salt);

        // 3. Save the user
        const newUser = { ...userData, password: hashedPassword };
        await authRepo.createUser(newUser);

        // --- NEW: AUTO LOGIN LOGIC ---
        const createdUser = await authRepo.getUserByCredential(userData.email);

        // 5. Generate JWT Token
        const token = jwt.sign(
            { 
                id: createdUser.id, 
                role: createdUser.role, 
                is_prime: createdUser.is_prime, 
                name: createdUser.name 
            }, 
            JWT_SECRET, 
            { expiresIn: '1d' }
        );

        // 6. Remove password before sending to frontend
        delete createdUser.password;
        
        // Return both the success message AND the login credentials
        return { 
            message: 'User registered and logged in successfully!', 
            token, 
            user: createdUser 
        };
    }

    async loginUser(identifier, password) {
        // 1. Find the user by Email OR Phone
        const user = await authRepo.getUserByCredential(identifier);
        if (!user) {
            throw new Error('Invalid credentials.');
        }

        // 2. Check active status
        if (user.is_active === 0) {
            throw new Error('Your account has been deactivated. Please contact support.');
        }

        // 3. Verify the password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error('Invalid credentials.');
        }

        // 4. Generate JWT Token
        const token = jwt.sign(
            { id: user.id, role: user.role, is_prime: user.is_prime, name: user.name }, 
            JWT_SECRET, 
            { expiresIn: '1d' }
        );

        delete user.password;
        return { token, user };
    }
}

module.exports = new AuthService();