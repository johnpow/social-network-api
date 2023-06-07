const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: 'You need to provide a reaction!',
      maxLength: 280,
    },
    username: {
      type: String,
      required: 'You need to provide a username!',
    },
    createdAt: {
      type: Date,
      default: Date.now,
  },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

reactionSchema.method.formatDate = function (date) {
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
};


const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;
