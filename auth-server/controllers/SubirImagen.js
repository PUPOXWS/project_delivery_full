const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: "dsiuq4uzu",
  api_key: "124483893473285",
  api_secret: "cP4QzfwZ8vpMeOpiPSHoHOsnkCg",
});

const controladorSubirImagen = async (req, res) => {
  try {
    const resultados = await cloudinary.uploader.upload(req.files.image.path);
    res.json({
      url: resultados.secure_url,
      public_id: resultados.public_id,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {controladorSubirImagen};
