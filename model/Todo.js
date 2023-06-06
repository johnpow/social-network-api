const { Schema, model } = require('mongoose');

const todoSchema = new Schema({
    title: {
        type: String,
        required: [true, 'You must provide a title'],
    },
    completed: {
        type: Boolean,
        default: false,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        index: true,
    },
});



module.exports = model('Todo', todoSchema);