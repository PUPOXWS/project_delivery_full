const bcrypt = require("bcrypt");
const jwt = require("jwt");
const Usuario = require("../model/Usuario");
const generarOtp = require("otp-generator");
const nodemailer = require("nodemailer");
const ControladorRegistros = async (req, res) => {
  const { name, email, password, confirmpassword, imageProfile } = req.body;
  if (!imageProfile) {
    return res.status(400).send({
      message: "Invalid image profile",
      success: false,
    });
  }
  //Verificacion Usuario existe
  const UserExists = await Usuario.findOne({ email });
  if (UserExists) {
    return res.status(200).send({
      message: "User Exists",
      success: false,
    });
  }
  //Encriptando password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  req.body.password = hashPassword;
  const confirmPassword = await bcrypt.hash(confirmpassword, salt);
  
  // Construyendo otp(codigo envio)
  const otp = generarOtp.generate(6,{
    digits: true,
    upperCase:false,
    specialChars: false,
    upperCaseAlphabets: false,
    lowerCaseAlphabets: false,
  });
  req.body.confirmpassword = confirmPassword;
};
