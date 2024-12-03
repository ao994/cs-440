import mongoose from 'mongoose';
const { Schema } = mongoose;

const taskSchema = new Schema({
    username: String,
    task: String,
    description: String,
    course: String,
    dueDate: Date,
    complete: Boolean
});

export const Task = mongoose.model('Task', taskSchema);
