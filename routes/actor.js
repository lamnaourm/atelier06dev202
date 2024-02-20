import express from "express";
import ActorModel from '../models/Actor.js'

const route = express.Router()

route.get('/all', (req, res) => {

    ActorModel.find({}).then((actors) => {
        return res.status(201).json(actors);
    })
    .catch((err) => {
        res.status(510).send('erreur de recuperation des donnees')
    })
})


export default route