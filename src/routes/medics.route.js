const router = require('express').Router();
const medicsController = require('../controllers/medics.controller');
const {
  isIdValid,
  isObjectBodyValid,
} = require('../middlewares/medics.middleware');

router.get('/find-medics', medicsController.findMedicsController);
router.get(
  '/find-medics/:id',
  isIdValid,
  medicsController.findMedicByIdController,
);
router.post(
  '/create',
  isObjectBodyValid,
  medicsController.createMedicController,
);
router.put(
  '/update/:id',
  isIdValid,
  isObjectBodyValid,
  medicsController.updateMedicController,
);
router.delete('/delete/:id', isIdValid, medicsController.deleteMedicController);

module.exports = router;
