'use strict';

import mongoose from 'mongoose';

var LanguageSchema = new mongoose.Schema({
  label:String,
  language: String,
  ned: String,
  hl: String,
  title: String,
  topic1: String,
  topic2: String,
  active: Boolean
});

export default mongoose.model('Language', LanguageSchema);
