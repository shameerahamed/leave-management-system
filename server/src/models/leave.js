import mongoose from 'mongoose';
mongoose.Promise = Promise;

const Schema = mongoose.Schema;

const leaveSchema = new Schema({
    leaveName: {
        type: String
    },
    leaveType: {
        type: String
    },
    startDate: {
        type: String
    },
    endDate: {
        type: String
    },
    leaveDays: {
        type: Number
    },
    leaveReason: {
        type: String
    },
    leaveStatus: {
        type: String
    },
    datePosted: {
        type: String
    },
    dateReviewed: {
        type: String
    },
    declinedReason: {
        type: String
    },
    cancelledReason: {
        type: String
    },
    reviewedBy: {
        type: String
    },
    fileName: {
        type: String
    },
    userId: {
        type: String
    }
});

export default mongoose.model('leaverecord', leaveSchema);