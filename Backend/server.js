const express=require('express');
const colors=require('colors');
// const dotenv=require('dotenv');
// const {connectDB}=require('./config/db');


// dotenv.config()
// connectDB();
const app=express();


const port=5000;
app.listen(port,console.log(`Server is running on port ${port}`  .yellow.bold) );