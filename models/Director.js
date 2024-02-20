import { Schema, model } from "mongoose";


const DirectorSchema = new Schema({
    name: {type:String, required:true},
    birthname: {type:String, required:true},
    birthdate: {type:Date, default:Date.now},
    birthplace: {type:String, minLength:10}
})

export default model('director', DirectorSchema)