const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String    
    },
    id_rumah_sakit: {
        type: Number,
    },
});

module.exports = mongoose.model("userrumahsakit", userSchema,"userrumahsakit")