const medicsService = require('../services/medics.service');

const findMedicsController = async (req, res) => {
  const allMedics = await medicsService.findMedicsService();
  if (allMedics.length == 0)
    return res.status(400).send({ message: `There's no medic registered!` });

  res.send(allMedics);
};

const findMedicByIdController = async (req, res) => {
  const idParam = req.params.id;
  const chosenMedic = await medicsService.findMedicByIdService(idParam);
  if (!chosenMedic)
    return res.status(404).send({ message: 'Medic not found!' });

  res.send(chosenMedic);
};

const createMedicController = async (req, res) => {
  const medic = req.body;
  const newMedic = await medicsService.createMedicService(medic);
  res.send(newMedic);
};

const updateMedicController = async (req, res) => {
  const idParam = req.params.id;
  const medicUpdate = req.body;
  const nonUpdatedMedic = await medicsService.updateMedicService(
    idParam,
    medicUpdate,
  );
  res.send(nonUpdatedMedic);
};

const deleteMedicController = async (req, res) => {
  const idParam = req.params.id;
  await medicsService.deleteMedicService(idParam);
  res.send({ message: `Medic removed with success!` });
};

module.exports = {
  findMedicsController,
  findMedicByIdController,
  createMedicController,
  updateMedicController,
  deleteMedicController,
};
