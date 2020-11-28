const { Schema, model } = require('mongoose');

const schema = new Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, required: true },
});


module.exports = model('Todo', schema);
