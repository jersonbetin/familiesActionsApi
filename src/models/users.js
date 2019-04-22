'use strict';
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  user : { type : String, required : true, unique:true },
  password : { type: String, required: true },
  rol: { type: String, required: true },
  name : {
    first : { type : String, default : '' },
    last : { type : String, default : '' }
  }
}, { versionKey: false });

exports.user = mongoose.model('user', userSchema);
