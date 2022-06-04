const mongoose = require("mongoose");
const calonPendonorSchema = mongoose.Schema({
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
    }
});

module.exports = mongoose.model("CalonPendonor", calonPendonorSchema)