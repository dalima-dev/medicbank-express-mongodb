const mongoose = require('mongoose');

const MedicSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  CRM: {
    type: Number,
    require: true,
  },
  landline: {
    type: Number,
    require: true,
  },
  phoneNumber: {
    type: Number,
    require: true,
  },
  CEP: {
    type: Number,
    require: true,
  },
  specialties: {
    type: [String],
    require: true,
  },
});

const Medic = mongoose.model('medics', MedicSchema);

module.exports = Medic;
