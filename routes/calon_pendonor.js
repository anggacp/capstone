const express = require("express");
const router = express.Router();
const CalonPendonorModel = require("../models/calon_pendonor_model")

router.post("/createCalonPendonor", async (req,res)=> {
    const calonPendonor = new CalonPendonorModel({
        namaPendonor: req.body.myNamaPendonor,
        emailPendonor: req.body.myEmailPendonor,
        alamatPendonor: req.body.myAlamatPendonor,
        kotaPendonor: req.body.myKotaPendonor,
        usiaPendonor: req.body.myUsiaPendonor,
        jenisKelaminPendonor: req.body.myJenisKelaminPendonor,
        beratBadanPendonor: req.body.myBeratBadanPendonor
    });
    try{
        const newCalonPendonor = await calonPendonor.save();
        res.status(201).json(newCalonPendonor);
    } catch (error) {
        res.status(400).json({msg: error});
    }
});

router.get("/getCalonPendonor", async(req,res) => {
    try {
        let calonPendonor=await CalonPendonorModel.find();
        res.json(calonPendonor);
    } catch (e) {
        res.json({msg:e});
    }
})

module.exports = router;