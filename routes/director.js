import express from "express";
import DirectorModel from '../models/Director.js'

const route = express.Router()

route.get('/all', (req, res) => {

    DirectorModel.find({}).then((actors) => {
        return res.status(201).json(actors);
    })
    .catch((err) => {
        res.status(510).send('erreur de recuperation des donnees')
    })
})

export default route