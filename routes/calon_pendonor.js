const express = require("express");
const router = express.Router();
const CalonPendonorModel = require("../models/calon_pendonor_model");
const dbConnect = require("../server");
const nodemailer = require("nodemailer")

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
});

router.post("/delete", async(req,res) => {
    const id = req.body
    CalonPendonorModel.findOneAndDelete(({_id:id}),function(err,docs){
        if (docs==null) {
            res.send("ID can't be found")
        } else {
        res.send(docs)
        }
    })
});

router.post('/mailLolos', async (req,res) => {
    const {email} = req.body;
    let transporter = nodemailer.createTransport({
                service:'gmail',
                auth: {
                   user: 'anggara663@gmail.com',
                   pass: 'ksulkkhobxemtzph'
                },
    });

    const msg = {
        from: 'anggara663@gmail.com',
        to: email,
        subject: 'Konfirmasi Pendaftaran Calon Pendonor Plasma Konvalesen',
        text: 'Anda lolos melewati tahapan screening, silahkan datang ke rumah sakit terdekat'
    };

    let info = await transporter.sendMail(msg);

    console.log("Message sent: %s", info.messageId);
    console.log("preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.send('Email sent!')
})

router.post('/mailGagal', async (req,res) => {
    const {email} = req.body;
    let transporter = nodemailer.createTransport({
                service:'gmail',
                auth: {
                   user: 'anggara663@gmail.com',
                   pass: 'ksulkkhobxemtzph'
                },
    });

    const msg = {
        from: 'anggara663@gmail.com',
        to: email,
        subject: 'Konfirmasi Pendaftaran Calon Pendonor Plasma Konvalesen',
        text: 'Mohon maaf, anda tidak lolos sebagai pendonor plasma konvalesen'
    };

    let info = await transporter.sendMail(msg);

    console.log("Message sent: %s", info.messageId);
    console.log("preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.send('Email sent!')
})



module.exports = router;