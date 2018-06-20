const router = require('express').Router();

router.use('/candidates', require('./candidate/candidateRoutes'));

module.exports = router;
