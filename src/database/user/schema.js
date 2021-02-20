const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
  last_name: {
    type: String,
  },
  first_name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  role: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
});

export default schema;
