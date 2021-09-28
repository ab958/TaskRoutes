import { Express, Router } from "express";
import { END_POINT,Ambulace_THIS_BASE } from "../constants/api.constants"
import { AmbulanceController } from "../controllers/ambulance.controller"

class Ambulance_Analytics {
    router : Router
    constructor (){
        this.router = Router()
        this.routes()
    }
    routes(){
        console.log('ambu route running')
        this.router.post(`/process-message`,async (req,res,next)=>{
            console.log("wahab")
           try{
              
                const responce = await new AmbulanceController().PostAmbulanceData()
                res.send(responce).status(200)
           } catch(e){
               next(e)
           }
        })
    }
}

export const AmbulanceAnalytics = new Ambulance_Analytics().router