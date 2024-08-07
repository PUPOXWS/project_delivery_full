const express = require('express');
const expressformidable = require('express-formidable');
const multer = require('multer');
const {controladorSubirImagen} = require("../controllers/SubirImagen");
const router = express.Router();
router.post("/upload-image", expressformidable({maxFieldsSize:5*2024*2024}),controladorSubirImagen);
module.exports = router;