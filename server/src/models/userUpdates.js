import mongoose from 'mongoose';
mongoose.Promise = Promise;

const Schema = mongoose.Schema;

const userUpdatesSchema = new Schema({
  annual: {
    type: Number
  },
  sick: {
    type: Number
  },
  bereavement: {
    type: Number
  },
  familyCare: {
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
  dateOfBirth: {
    type: String
  },
  employeeNumber: {
    type: Number
  },
  editReason: {
      type: String
  },
  datePosted: {
      type: String
  },
  reviewedBy: {
      type: String
  },
  userId: {
      type: String
  }
});

export default mongoose.model('userUpdates', userUpdatesSchema);