
import mongoose, { connect } from "mongoose";
import { DB_name } from "./constants";
import connecrdb from "./db/index.js";
import dotenv from "dotenv";
import { DB_name } from "../constants.js";
dotenv.config({
    path:'./env'
})


connecrdb()













/*
import express from "express"
const app = express()
(async()=>{
    try{
        await mongoose.Connect(`${process.env.MONGO_URI}/${DB_name}`)
        app.on("error",(error)=>{
            console.log("ERR:", error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is Listening on port  ${process.env.PORT}`);
        })
    }catch(error){
        console.log("ERROR:", error)
        throw err
    }
})()
*/
