import mongoose from 'mongoose';
const { Schema } = mongoose;

//grade object
const gradeSchema = new Schema({
    student_id: Number,
    scores: [{
        type: String,
        score: Number
    }],
    class_id: Number
});

export const Grade = mongoose.model('Grade', gradeSchema);




//exports
export default {Grade};