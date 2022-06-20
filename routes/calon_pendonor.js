const express = require("express");
const router = express.Router();
const CalonPendonorModel = require("../models/calon_pendonor_model")

router.post("/createCalonPendonor", async (req,res)=> {
    const calonPendonor = new CalonPendonorModel({
        namaPendonor: req.body.namaPendonor,
        emailPendonor: req.body.emailPendonor,
        alamatPendonor: req.body.myAlamatPendonor,
        kotaPendonor: req.body.myKotaPendonor,
        usiaPendonor: req.body.myUsiaPendonor,
        jenisKelaminPendonor: req.body.myJenisKelaminPendonor,
        beratBadanPendonor: req.body.myBeratBadanPendonor,
        golonganDarahPendonor: req.body.myGolonganDarahPendonor,
        rhesusDarahPendonor: req.body.myRhesusDarahPendonor,
        tanggalNegatifPendonor: req.body.myTanggalNegatifPendonor,
        mendapatkanTransfusiPendonor: req.body.myMendapatkanTransfusiPendonor,
        sudahDivaksinPendonor: req.body.mySudahDivaksinPendonor,
        namaVaksinPendonor: req.body.myNamaVaksinPendonor,
        dosisVaksinPendonor: req.body.myDosisVaksinPendonor,
        penyakitBeratPendonor: req.body.myPenyakitBeratPendonor
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