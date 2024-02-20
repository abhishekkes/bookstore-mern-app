import express from "express";
import { PORT,mongodbURL } from "./config.js";
import mongoose from "mongoose"
const app=express();

app.get('/',(req,res)=>{
  console.log(req)
  return res.status(234).send("Welcome to Mern Stack");

});



mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });