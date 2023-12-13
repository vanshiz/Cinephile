const Movie=require("../models/MoviesModel");
const mongoose=require("mongoose");


// get all Movies
const getMovies = async (req, res) => {
    const Movies = await Movie.find({}).sort({createdAt: -1})
    res.status(200).json(Movies)
  }
  
  // get a single Movie
const getMovie = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such Movie'})
    }
  
    const movie = await Movie.findById(id)
  
    if (!movie) {
      return res.status(404).json({error: 'No such Movie'})
    }
  
    res.status(200).json(movie)
  }

  
  // create a new Movie
  const createMovie =  async (req, res) => {
    const { title, Genre, ratings } = req.body;

    let emptyFields = []

    if (!title) {
      emptyFields.push('title')
    }
    if (!Genre) {
      emptyFields.push('Genre')
    }
    if (!ratings) {
      emptyFields.push('ratings')
    }
    if (emptyFields.length > 0) {
      return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
    }
  
    try {
        const movie = await Movie.create({ title, Genre, ratings });
        res.status(200).json(movie);
    }
     catch (error) {
        res.status(400).json({ error: error.message });
    }
   
}

const deleteMovie = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such movie'})
    }
  
    const movie = await Movie.findOneAndDelete({_id: id})
  
    if(!movie) {
      return res.status(400).json({error: 'No such movie'})
    }
  
    res.status(200).json(movie)
  }
  
  // update a workout
  const updateMovie = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such movie'})
    }
  
    const movie = await Movie.findOneAndUpdate({_id: id}, {
      ...req.body
    })
  
    if (!movie) {
      return res.status(400).json({error: 'No such movie'})
    }
  
    res.status(200).json(movie)
  }
  
  module.exports = {
    getMovies,
    getMovie,
    createMovie,
    deleteMovie,
    updateMovie
  }