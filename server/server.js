const express = require('express');
const APIroutes = require("./routes");
const cors = require('cors');
const app = express();
//production//var PORT = process.env.PORT || '5000'
//developement
app.use(express.json());
app.use(cors());
app.use("/", APIroutes)



app.listen(process.env.PORT || '3000', () =>{
    console.log(`server is running at ${process.env.PORT || 3000}`);    
})