import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
   name: {
        type: String,
        required: true
   },
   salary: {
        type: Number,
        required: true
   },
   qualification: {
        type: String,
        required: true
   }, experienceinYears: {
        type: Number,
        required: true
   },
   workingHospital:{

        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
        required: true
   }
}, { timestamps: true });

export const Doctor = mongoose.model('Doctor', doctorSchema);