const mongoose = require('../../database');
const bcrypt = require('bcrypt');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        require: true,
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    completed: {
        type: Boolean,
        require: true,
        default: false,
    }
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;