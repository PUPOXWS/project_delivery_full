const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: "dyrfa9l8s",
  api_key: "388175982835765",
  api_secret: "57WeHilINybdbufoGn2yDajT6fk",
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
