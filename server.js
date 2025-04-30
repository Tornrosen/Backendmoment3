/*
Webbapplikation av Anna Danielsson */

//Lägga till MongoDB, mongoose och Express
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//Starta upp Express
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

//ansluta till mongoose
mongoose.connect("mongodb://127.0.0.1:27017/jobs").then(() =>{
    console.log("Ansluten till MongoDB.")
}).catch((error)=>{
    console.log("Fel vid anslutning till databas: " + error)
})

//skapa schema för dokument
const JobSchema = new mongoose.Schema({
    title: {
        type:String, required:true
    },
    workplace: {
        type:String, required:true
    },
    employer: {
        type:String, required:true
    },
    startdate: {
        type:String, required:true
    },
    enddate: {
        type:String, required:true
    },
    description: {
        type:String, required:true
    }
})

//inkludera schema till databas
const Job = mongoose.model("Job", JobSchema)

//Skapa routes
app.get("/api", async (req, res) => {
    res.json({message:"Welcome to my API."})
});

app.get("/jobs", async (req, res) => {
    try {
        let result = await Job.find({});

        return res.json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
})

app.post("/jobs", async (req, res) => {
    try {
        let result = await Job.create(req.body);
        return res.json(result);
    } catch (error) {
        return res.status(400).json(error);
    }
})

app.listen(port, ()=> {
    console.log ("Servern är igång på port: " + port)
});

