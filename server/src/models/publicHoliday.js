import mongoose from 'mongoose';
mongoose.Promise = Promise;

const Schema = mongoose.Schema;

const publicHolidaySchema = new Schema({
    holidayDate: {
    type: String,
    required: true
  }
});

export default mongoose.model('publicHoliday', publicHolidaySchema);