const express = require("express");
const router = express.Router();
const CalonPendonorModel = require("../models/calon_pendonor_model")

router.post("/createCalonPendonor", async (req,res)=> {
    const calonPendonor = new CalonPendonorModel({
        namaPendonor: req.body.namaPendonor,
        emailPendonor: req.body.emailPendonor,
        alamatPendonor: req.body.alamatPendonor,
        kotaPendonor: req.body.kotaPendonor,
        usiaPendonor: req.body.usiaPendonor,
        jenisKelaminPendonor: req.body.jenisKelaminPendonor,
        beratBadanPendonor: req.body.beratBadanPendonor,
        golonganDarahPendonor: req.body.golonganDarahPendonor,
        rhesusDarahPendonor: req.body.rhesusDarahPendonor,
        tanggalNegatifPendonor: req.body.tanggalNegatifPendonor,
        mendapatkanTransfusiPendonor: req.body.mendapatkanTransfusiPendonor,
        sudahDivaksinPendonor: req.body.sudahDivaksinPendonor,
        namaVaksinPendonor: req.body.namaVaksinPendonor,
        dosisVaksinPendonor: req.body.dosisVaksinPendonor,
        penyakitBeratPendonor: req.body.penyakitBeratPendonor
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