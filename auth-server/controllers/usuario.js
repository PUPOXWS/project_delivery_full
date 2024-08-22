const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Usuario = require("../model/Usuario");
const generarOtp = require("otp-generator");
const nodemailer = require("nodemailer");

const ControladorRegistros = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, password, confirmpassword, imageProfile } = req.body;

    if (!imageProfile) {
      return res.status(400).send({
        message: "Invalid image profile",
        success: false,
      });
    }

    // Verificación si el usuario existe
    const UserExists = await Usuario.findOne({ email });
    if (UserExists) {
      return res.status(200).send({
        message: "User Exists",
        success: false,
      });
    }

    // Encriptando password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    req.body.password = hashPassword;
    const confirmPassword = await bcrypt.hash(confirmpassword, salt);

    // Construyendo OTP (código de envío)
    const otp = generarOtp.generate(6, {
      digits: true,
      upperCase: false,
      specialChars: false,
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
    });
    req.body.confirmpassword = confirmPassword;

    // Validar contraseñas
    if (req.body.confirmpassword === confirmPassword) {
      const newUser = new Usuario({
        name,
        email,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword,
        imageProfile,
        otp,
      });
      await newUser.save();

      // Validar si el token existe en .env
      if (!process.env.JWT_SECRET) {
        throw new Error("JWT secret is not set");
      }

      // Generar token
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });

      // Transportador
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      // Correo de confirmación
      const mailOptions = {
        from: "APP DELIVERY",
        to: email,
        subject: "Confirmación de registro",
        text: `Hola ${name}, su código de confirmación es ${otp}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          return res.status(500).json({
            message: "Error al enviar correo",
            success: false,
          });
        } else {
          return res.status(200).json({
            message: "Registro exitoso",
            success: true,
          });
        }
      });

      return res.status(201).send({
        message: "Usuario creado exitosamente",
        data: {
          user: newUser,
          token,
        },
        success: true,
      });
    } else {
      return res.status(400).send({
        message: "Contraseñas no coinciden",
        success: false,
      });
    }
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "Error al crear el usuario",
      success: false,
    });
  }
};

module.exports = { ControladorRegistros };
