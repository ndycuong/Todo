import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ProjectSchema = new Schema({
    projectName: {
        type: String,
        required: true,
        unique: true,
    },

}
);

export default mongoose.model('project', ProjectSchema);