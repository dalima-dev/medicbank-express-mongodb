const Medic = require('../models/Medic');

const findMedicsService = async () => {
  const allMedics = await Medic.find();
  return allMedics;
};

const findMedicByIdService = async (id) => {
  const medic = await Medic.findById(id);
  return medic;
};

const createMedicService = async (newMedic) => {
  const createdMedic = await Medic.create(newMedic);
  return createdMedic;
};

const updateMedicService = async (id, medicUpdate) => {
  return await Medic.findByIdAndUpdate(id, medicUpdate);
};

const deleteMedicService = async (id) => {
  return await Medic.findByIdAndDelete(id);
};

module.exports = {
  findMedicsService,
  findMedicByIdService,
  createMedicService,
  updateMedicService,
  deleteMedicService,
};
