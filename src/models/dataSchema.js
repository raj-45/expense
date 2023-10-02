import { Schema, model } from 'mongoose';

const ReactFormDataSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
});

const User = model('User', ReactFormDataSchema);
export default User;