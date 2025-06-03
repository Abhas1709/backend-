import mongoose from "mongoose";
import { DB_name } from "../constants";

const connecrdb = async ()=>{
    try{
       const connectionDB= await mongoose.connect(`${process.env.MONGO_URI}/${DB_name}`)
    }catch(error){
        console.log("Mongodb connectio error ", error);
        console.log(`\n Mongodb connected !! DB Host:${connectionDB.conection.host}`);
        process.exit(1)
    }
}
export default connecrdb