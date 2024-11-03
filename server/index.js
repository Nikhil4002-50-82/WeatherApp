import express from "express";
import axios from "axios";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";

const port=5000;
const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

app.get("/getCurrentLocation",async(req,res)=>{
    try{
        const response =await axios.get("http://ip-api.com/json/");
        res.json(response.data);
      }
      catch(error){
        console.log(`error message : ${error.message}`);
      }
})

app.listen(port,()=>{
    console.log(`Server running successfully on port ${port}.`);
})