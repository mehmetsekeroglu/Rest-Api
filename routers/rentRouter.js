const router = require('express').Router();
let data = require('../data')
let rent = require('../rent');

router.get("/", (req, res)=>{
    res.status(200).json(rent)
})

router.post("/", (req, res) =>{
    let newMovie = req.body;
let movie = data.find(movie=>movie.id === parseInt(newMowie.movieId))
if(movie){
    rent.push(newMovie);
    res.status(200).json(newMovie)
}else{
    res.status(404).json({errorMessage: "Film Yok"})
}
    })
module.exports = router;

