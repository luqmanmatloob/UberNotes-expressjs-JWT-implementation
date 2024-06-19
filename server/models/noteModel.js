const mongoose = require('mongoose');
    
const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Assuming you have a User model for user authentication
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
