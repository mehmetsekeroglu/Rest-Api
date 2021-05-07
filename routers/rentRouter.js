const router = require('express').Router();
let data = require('../data')
let rent = require('../rent');

router.get("/", (req, res)=>{
    res.status(200).json(rent)
})

router.post("/", (req, res) =>{
    let rentedMovie = req.body;
let movie = data.find(movie=>movie.id === parseInt(rentedMovie.movieId))
if(movie){
    rent.push(rentedMovie);
    res.status(200).json(rentedMovie)
}else{
    res.status(404).json({errorMessage: "Film Yok"})
}
    })
module.exports = router;

