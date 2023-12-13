const express=require('express');
const {getMovies,getMovie,createMovie,deleteMovie,updateMovie}=require("../controllers/movieController");

const router=express.Router();


router.get('/',getMovies);

router.get('/:id',getMovie);

router.post('/',createMovie);

router.delete('/:id',deleteMovie);

router.patch('/:id',updateMovie);

module.exports=router;
