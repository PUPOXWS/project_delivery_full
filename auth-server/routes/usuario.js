const express = require('express');
const {ControladorRegistros} = require("../controllers/usuario");

const router = express.Router();

router.post("/registro", ControladorRegistros);

module.exports = router;