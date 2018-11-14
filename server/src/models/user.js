import mongoose from 'mongoose';
mongoose.Promise = Promise;

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: false
  },
  surname: {
    type: String
  },
  othernames: {
    type: String
  },
  annual: {
    type: Number
  },
  sick: {
    type: Number
  },
  bereavement: {
    type: Number
  },
  family_care: {
    type: Number
  },
  christmas: {
    type: Number
  },
  maternity: {
    type: Number
  },
  paternity: {
    type: Number
  },
  designation: {
    type: String
  },
  gender: {
    type: String
  },
  date_of_birth: {
    type: String
  },
  employee_number: {
    type: Number
  },
  is_archived: {
    type: Boolean
  },
  archive_reason: {
    type: String
  }
});

export default mongoose.model('user', userSchema);