import { User } from '../db/objects.js';

// Function to find a user by email
export const findUserByEmail = (email) => {
    return User.findOne({ email });
};

// Function to create a new user
export const createUser = (userData) => {
    return User.create(userData);
};