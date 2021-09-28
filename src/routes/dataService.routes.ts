import { Express, Router } from "express";
import { END_POINT,Ambulace_THIS_BASE } from "../constants/api.constants"
import { DataRegisterController } from "../controllers/dataservice.controller"

class Data_Register {
    router : Router
    constructor (){
        this.router = Router()
        this.routes()
    }
    routes(){
        // console.log('ambu route running')
        this.router.get(`/service`,async (req,res,next)=>{
            console.log("wahab")
           try{
              
                const responce = await new DataRegisterController().GetDataSerivce()
                res.send(responce).status(200)
           } catch(e){
               next(e)
           }
        })
        this.router.get(`/dbo/table/`,async (req,res,next)=>{
            console.log("wahab")
           try{
              
                const responce = await new DataRegisterController().GetallTable()
                res.send(responce).status(200)
           } catch(e){
               next(e)
           }
        })
        this.router.get(`/dbo/table/ONS_CHD_GEO_LISTINGS/column/`,async (req,res,next)=>{
            console.log("wahab")
           try{
              
                const responce = await new DataRegisterController().GetallCol_inTable()
                res.send(responce).status(200)
           } catch(e){
               next(e)
           }
        })

        this.router.get('/dbo/table/ONS_CHD_GEO_LISTINGS/query/:pageNo', async (req, res, next) => {
            try {
              const bool1 = <any>req.params.pageNo
              const responce = await new DataRegisterController().queryPageNo(bool1)
              res.send(responce).status(200)
            } catch (e) {
              next(e)
            }
          })
        this.router.get('/dbo/table/ONS_CHD_GEO_LISTINGS/query/download/:bool', async (req, res, next) => {
            try {
              const bool1 = <any>req.params.bool
              const responce = await new DataRegisterController().queryTableDownload(bool1)
              res.send(responce).status(200)
            } catch (e) {
              next(e)
            }
          })
        this.router.get('/dbo/table/ONS_CHD_GEO_LISTINGS/query/filter/:filter', async (req, res, next) => {
            try {
              const bool1 = <any>req.params.filter
              const responce = await new DataRegisterController().filterItems(bool1)
              res.send(responce).status(200)
            } catch (e) {
              next(e)
            }
          })
    }
}

export const DataRegisterService = new Data_Register().router