const jwt = require("jsonwebtoken")
const config = require("./config-jwt")

verifyToken = (req, res, next) => {
    //memeriksa header yang bernama "x-access-token"
    let token = req.headers["x-access-token"];
    //jika token tidak ada
    if (!token) {
      return res.status(403).send({ message: "No token provided!" });
    }
    //memverifikasi token
    jwt.verify(token, config.secret, (err, decoded) => {
      //jika token tidak sesuai
      if (err) {
        return res.status(401).send({ message: "Unauthorized!" });
      }
      //mendapatkan id_rumah_sakit dari tokennya
      req.id_rumah_sakit = decoded.id;
      next();
    });
  };

  module.exports = {
    verifyToken
  }