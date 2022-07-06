const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const calonPendonorSchema = mongoose.Schema({
    _id: {
        type: ObjectId
    },
    namaPendonor: {
        type: String,
        required: true,
    },
    emailPendonor: {
        type: String,
        required: true,
    },
    alamatPendonor: {
        type: String,
        required: true,
    },
    kotaPendonor: {
        type: String,
        required: true,
    },
    usiaPendonor: {
        type: String,
        required: true,
    },
    jenisKelaminPendonor: {
        type: String,
        required: true,
    },
    beratBadanPendonor: {
        type: String,
        required: true,
    },
    golonganDarahPendonor: {
        type: String,
        required: true,
    },
    rhesusDarahPendonor: {
        type: String,
        required: true,
    },
    tanggalNegatifPendonor: {
        type: String,
        required: true,
    },
    mendapatkanTransfusiPendonor: {
        type: String,
        required: true,
    },
    sudahDivaksinPendonor: {
        type: String,
        required: true,
    },
    namaDivaksinPendonor: {
        type: String,
    },
    dosisVaksinPendonor: {
        type: String,
    },
    penyakitBeratPendonor: {
        type: String,
    }
});

module.exports = mongoose.model("CalonPendonor", calonPendonorSchema)