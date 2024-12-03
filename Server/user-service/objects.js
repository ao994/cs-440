import mongoose from 'mongoose';
const { Schema } = mongoose;

// user object
const userSchema = new Schema({
    name: String,
    email: String,
    password: String
});
export const User = mongoose.model('User', userSchema);