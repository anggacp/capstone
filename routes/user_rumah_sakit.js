const express = require("express");
const router = express.Router();
const UserModel = require("../models/user_model")


router.post("/login", async (req,res)=> {

    try {
    const { username, password } = req.body;
    //Mencari username di tabel userrumahsakit
    const user = await UserModel.findOne({ username: username});
    //kondisi jika user tidak ditemukan
     if(user == null){
        res.status(404).json({
            isSuccessful:false,
            message: "username tidak ditemukan!"        
        });
        return null
     }
     //kondisi jika password salah
      if (user.password != password){
        res.status(401).json({
            isSuccessful:false,
            message: "Password salah!"
        });
        return null
      }
      //kondisi jika login berhasil
      res.status(200).json({
        isSuccessful:true,
        message:"Login berhasil!"

      })
    } catch (error) {
        res.json({message:error.message})
    }
  });

module.exports = router;