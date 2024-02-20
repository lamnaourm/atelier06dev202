import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import routeActor from './routes/actor.js'
import routeDirector from './routes/director.js'
import routeMovie from './routes/movie.js'

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 3000
const url = process.env.URL_MONGO

mongoose.connect(url)
    .then(() => {
        console.log('Connexion Reussie')
    })
    .catch((err) => {
        console.log('Erreur de connexion')
    })

app.use('/actor', routeActor)
app.use('/director', routeDirector)
app.use('/movie', routeMovie)

app.listen(port, (err) =>{
    if(!err)
        console.log('server Stated')
    else 
        console.log('Unable to start server')
})



