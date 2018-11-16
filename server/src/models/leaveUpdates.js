import mongoose from 'mongoose';
mongoose.Promise = Promise;

const Schema = mongoose.Schema;

const leaveUpdatesSchema = new Schema({
    updatedLeaveName: {
        type: String
    },
    updatedLeaveType: {
        type: String
    },
    updatedStartDate: {
        type: String
    },
    updatedEndDate: {
        type: String
    },
    updatedLeaveDays: {
        type: Number
    },
    leaveStatus: {
        type: String
    },
    datePosted: {
        type: String
    },
    editReason: {
        type: String
    },
    previousLeaveDays: {
        type: Number
    },
    previousLeaveName: {
        type: String
    },
    previousLeaveType: {
        type: String
    },
    previousStartDate: {
        type: String
    },
    previousEndDate: {
        type: String
    },
    reviewedBy: {
        type: String
    },
    userId: {
        type: String
    },
    leaveId: {
        type: String
    }
});

export default mongoose.model('leaveUpdates', leaveUpdatesSchema);