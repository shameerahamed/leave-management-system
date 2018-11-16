import mongoose from 'mongoose';
mongoose.Promise = Promise;

const Schema = mongoose.Schema;

const adminuserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: false
  },
  surname: {
    type: String
  }
});

export default mongoose.model('adminuser', adminuserSchema);