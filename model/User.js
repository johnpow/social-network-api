const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    userName: String,
    firstName: {
        type: String,
        required: [true, 'You must provide a first name'],
        minlength: 2,
    },
    isCool: {
        type: Boolean,
        default: false,
    },
    dateSignedUp: {
        type: Date,
        default: Date.now,
    },
    powerLevel: {
        type: Number,
        default: 1,
        min: 1,
    },
    favoriteFoods: [String],
    weapons: {
        primaryWeapon: {
            type: String,
            default: 'frying pan',
        },
        secondaryWeapon: {
            type: String,
            default: 'Spatula',
        }
    },
    role: {
        type: String,
        enum: ['user', 'admin','moderator'],
        message: '{VALUE} is not supported',
    },
});



module.exports = model('User', userSchema);