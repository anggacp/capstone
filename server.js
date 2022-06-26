const dotenv = require("dotenv");
dotenv.config();
const express = require("express"); //importing express
const mongoose = require("mongoose")
const app = express(); //making express object

const port = process.env.PORT || '5000';
mongoose.connect( "mongodb+srv://azmi:kakatua2@capstone.zfr2c.mongodb.net/capstone?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}); 

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
    console.log("Hurray! we are connected")
});

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
});
app.get("/homepage", (req,res) => {
    res.send("YAY");
});

app.use(express.json());
const calonPendonorRoute = require("./routes/calon_pendonor");
const userRoute = require("./routes/user_rumah_sakit");
const dataRoute = require("./routes/data_rumah_sakit");
app.use("/data",dataRoute)
app.use("/calonPendonor", calonPendonorRoute);
app.use("/user",userRoute);