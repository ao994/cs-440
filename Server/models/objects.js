import mongoose from 'mongoose';
const { Schema } = mongoose;

//user object
const userSchema = new Schema({
    name:String,
    email:String,
    password:String
});
export const User = mongoose.model('User', userSchema);

//task object
const taskSchema = new Schema({
    username:String,
    task:String,
    description:String,
    course:String,
    dueDate:Date,
    complete:Boolean
});
export const Task = mongoose.model('Task', taskSchema);


//exports
export default {User, Task};