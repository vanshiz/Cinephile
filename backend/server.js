require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");

const movieRoutes=require('./routes/movies');


const app=express();
const PORT=process.env.PORT;


app.use(express.json());
//middleware
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
});


//attach the routes
app.use("/api/movies",movieRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/MERN')
    .then(()=>{
        app.listen(PORT,()=>{
            console.log(`Database is connected & Server is running on port ${PORT}`)
        })
    })
    .catch((error)=>{
        console.log(error);
    })

