import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const TodoSchema = new Schema({    
    text: {
        type: String,
        required: true,
        unique: true,
    },
    day: {
        type: Date,
        required: true,
        default: Date.now,
    },
    time:{
        type: String,
        required: true,
    },
    checked:{
        type: Boolean,
        default: false,
    },
    projectName: {
        type: String,
        ref: 'project', // Tham chiếu đến model Project
      },

    }
);

export default mongoose.model('todo', TodoSchema);