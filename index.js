const express = require('express')
const cors = require('cors')

const serverApp = express()
const dataModel = require('./schema/model');

serverApp.use(express.json())
serverApp.use(cors('http://localhost:3000/'))
const PORT = 4000 || process.env.PORT;
require('dotenv').config();
require('./db/connection')
serverApp.listen(PORT, () => {
    console.log("listening on port " + PORT);
} )


// addData

serverApp.post('/adddata',async (req,res) => {
    const {id,cordinatorName,pickUp,destination,date,time,estimatedAmount,contactNumber} = req.body

    try {
        const data =  new dataModel({
            id,
            cordinatorName,
            pickUp,
            destination,
            date,
            time,
            estimatedAmount,
            contactNumber
        })

        await data.save()
        res.status(200).json(data)
        
    } catch (error) {
        res.status(400).json(error)
        
    }
})

// get
serverApp.get('/alldata',async(req,res) => {
    try {
        const data = await dataModel.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json(error)
        
    }
})

// update
serverApp.put('/update/:id', async (req, res) => {
    const { cordinatorName, pickUp, destination, date, time, estimatedAmount, contactNumber } = req.body;
    const {id} = req.params;

    try {
        const data = await dataModel.findOneAndUpdate(id);
        if (data) {
            data.cordinatorName = cordinatorName;
            data.pickUp = pickUp;
            data.destination = destination;
            data.date = date;
            data.time = time;
            data.estimatedAmount = estimatedAmount;
            data.contactNumber = contactNumber;

            await data.save();
            res.status(200).json("Updated successfully");
        } else {
            res.status(404).json("Data not found");
        }
    } catch (error) {
        res.status(400).json(error.message);
    }
});


// getone
serverApp.get('/getone/:id',async function (req, res) {
    const{id} = req.params

    try {
        const data = await dataModel.findById(id)
        res.status(200).json(data)
        
    } catch (error) {
        console.log(error.message);
        
    }
})

// delete
serverApp.delete('/delete/:id', async (req,res) => {

        const {id} = req.params
    try {

        const data = await dataModel.findOneAndDelete(id)
        res.status(200).json("deleted successfully")
        
    } catch (error) {
        res.status(400).json(error.message)
        
    }
})




