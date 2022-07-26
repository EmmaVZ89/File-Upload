const { StatusCodes } = require("http-status-codes");

const uploadProductImage = async (req, res) => {
  console.log(req.files);
  res.send("Upload product image");
};

module.exports = {
  uploadProductImage,
};
