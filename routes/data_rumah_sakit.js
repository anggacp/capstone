const express = require("express");
const router = express.Router();
var authjwt = require("../authJwt")
var rsModel = require("../models/rumah_sakit_model")

//data rumah sakit yang sudah login
router.get("/", [authjwt.verifyToken],async (req,res)=> {
    try {
        const rs = await rsModel.findOne({ id_rumah_sakit: req.id_rumah_sakit});
        res.status(200).json({
            nama_rs : rs.nama_rumah_sakit,
            stok_plasma_A : rs.stok_plasma_A_positif + rs.stok_plasma_A_negatif,
            stok_plasma_B: rs.stok_plasma_B_positif + rs.stok_plasma_B_negatif,
            stok_plasma_AB: rs.stok_plasma_AB_positif + rs.stok_plasma_AB_negatif,
            stok_plasma_O: rs.stok_plasma_O_positif + rs.stok_plasma_O_negatif
        })
      
    } catch (error) {
        res.json({message:error.message})
    }
  });

  // mendapatkan data plasma darah berdasarkan id_rumah_sakit
  router.get("/:id_rumah_sakit",async (req,res)=> {
    try {
        const rs = await rsModel.findOne({ id_rumah_sakit: req.params.id_rumah_sakit});
        res.status(200).json({
            total_plasma: rs.stok_plasma_A_positif + rs.stok_plasma_A_negatif + 
            rs.stok_plasma_B_positif + rs.stok_plasma_B_negatif +
            rs.stok_plasma_AB_positif + rs.stok_plasma_AB_negatif +
            rs.stok_plasma_O_positif + rs.stok_plasma_O_negatif,
            stok_plasma_A : rs.stok_plasma_A_positif + rs.stok_plasma_A_negatif,
            stok_plasma_B: rs.stok_plasma_B_positif + rs.stok_plasma_B_negatif,
            stok_plasma_AB: rs.stok_plasma_AB_positif + rs.stok_plasma_AB_negatif,
            stok_plasma_O: rs.stok_plasma_O_positif + rs.stok_plasma_O_negatif
        })
      
    } catch (error) {
        res.json({message:error.message})
    }
  });

  //total semua data plasma golongan darah di semua rs
  router.get("/total/allrs",async (req,res)=> {
    try {
        const semua_rs = await rsModel.find();
        var total = {
         stok_plasma_A : 0,
         stok_plasma_B : 0,
         stok_plasma_AB : 0,
         stok_plasma_O : 0  
        }
        for (let i = 0; i < semua_rs.length;i++){
            total.stok_plasma_A += semua_rs[i].stok_plasma_A_positif + semua_rs[i].stok_plasma_A_negatif;
            total.stok_plasma_B += semua_rs[i].stok_plasma_B_positif + semua_rs[i].stok_plasma_B_negatif;
            total.stok_plasma_AB += semua_rs[i].stok_plasma_AB_positif + semua_rs[i].stok_plasma_AB_negatif;
            total.stok_plasma_O += semua_rs[i].stok_plasma_O_positif + semua_rs[i].stok_plasma_O_negatif;
        }
        res.status(200).json(total);
        
      
    } catch (error) {
        res.json({message:error.message})
    }
  });

  // mendapatkan data detail dari stok plasma darah
  router.get("/detail/:id_rumah_sakit",async (req,res)=> {
    try {
        const rs = await rsModel.findOne({ id_rumah_sakit: req.params.id_rumah_sakit});
        res.status(200).json({
            total_plasma: rs.stok_plasma_A_positif + rs.stok_plasma_A_negatif + 
            rs.stok_plasma_B_positif + rs.stok_plasma_B_negatif +
            rs.stok_plasma_AB_positif + rs.stok_plasma_AB_negatif +
            rs.stok_plasma_O_positif + rs.stok_plasma_O_negatif,
            stok_plasma_A_positif : rs.stok_plasma_A_positif,
            stok_plasma_A_negatif : rs.stok_plasma_A_negatif,
            stok_plasma_B_positif : rs.stok_plasma_B_positif,
            stok_plasma_B_negatif : rs.stok_plasma_B_negatif,
            stok_plasma_AB_positif : rs.stok_plasma_AB_positif,
            stok_plasma_AB_negatif : rs.stok_plasma_AB_negatif,
            stok_plasma_O_positif : rs.stok_plasma_O_positif,
            stok_plasma_O_negatif : rs.stok_plasma_O_negatif,
        })
      
    } catch (error) {
        res.json({message:error.message})
    }
  });

  //menambah data golongan darah berdasarkan kategori
//   router.post("/tambah",[authjwt.verifyToken], async (req,res) =>{
//     try {
//     const rs = await rsModel.findOne({ id_rumah_sakit: req.id_rumah_sakit});
//     let kategori = req.body.kategori;
//     rs[kategori] += 1;
//     rs.save();
//     res.status(200).json({
//         "status":"sukses menambah data " + kategori
//     })
// }
// catch (error) {
//     res.json({message:error.message})
// }
//   });
  router.post("/tambah/:id_rumah_sakit", async (req,res) =>{
    try {
    const rs = await rsModel.findOne({ id_rumah_sakit: req.params.id_rumah_sakit});
    let kategori = req.body.kategori;
    rs[kategori] += 1;
    rs.save();
    res.status(200).json({
        "status":"sukses menambah data " + kategori
    })
}


catch (error) {
    res.json({message:error.message})
}
  });

//mengurangi data golongan darah berdasarkan kategori (without jwt token 24jam)
  router.post("/kurang/:id_rumah_sakit", async (req,res) =>{
    try {
    const rs = await rsModel.findOne({ id_rumah_sakit: req.params.id_rumah_sakit});
    let kategori = req.body.kategori;
    if (rs[kategori] == 0){
        res.status(400).json({
            "status": "gagal mengurangi data, karena sudah bernilai nol"
        });
        return null;
    }
    rs[kategori] -= 1;
    rs.save();
    res.status(200).json({
        "status":"sukses mengurangi data " + kategori
    })

}


catch (error) {
    res.json({message:error.message})
}


  });




module.exports = router;