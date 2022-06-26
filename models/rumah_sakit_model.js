const mongoose = require("mongoose");
const rumahsakitSchema = mongoose.Schema({
    nama_rumah_sakit: {
        type: String,
    },
    stok_plasma_A_positif: {
        type: Number   
    },
    stok_plasma_A_negatif: {
        type: Number
    },
    stok_plasma_B_positif: {
        type: Number   
    },
    stok_plasma_B_negatif: {
        type: Number
    },
    stok_plasma_AB_positif: {
        type: Number   
    },
    stok_plasma_AB_negatif: {
        type: Number
    },
    stok_plasma_O_positif: {
        type: Number   
    },
    stok_plasma_O_negatif: {
        type: Number
    },
    id_rumah_sakit:{
        type: Number
    }
});

module.exports = mongoose.model("rumahsakit", rumahsakitSchema,"rumahsakit")