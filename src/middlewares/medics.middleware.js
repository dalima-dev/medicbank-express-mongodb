const mongoose = require('mongoose');

const isIdValid = (req, res, next) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam))
    return res.status(404).send({ message: 'Invalid ID!' });

  next();
};

const isObjectBodyValid = (req, res, next) => {
  const body = req.body;

  if (
    !body ||
    !body.name ||
    !body.CRM ||
    !body.landline ||
    !body.phoneNumber ||
    !body.CEP ||
    !(
      body.specialties.length > 1 &&
      body.specialties.every((specialty) => specialty != '')
    )
  )
    return res.status(400).send({ message: `You didn't fill all fields!` });

  next();
};

module.exports = {
  isIdValid,
  isObjectBodyValid,
};
