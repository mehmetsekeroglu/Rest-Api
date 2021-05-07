const router = require('express').Router();

let data = require('../data');

router.get("/", (req, res)=>{
    res.status(200).json(data)
})


router.get("/:id",(req,res)=>{
const { id } = req.params;
const movie = data.find(movie=>movie.id === parseInt(id))
if(movie){
    res.status(200).json(movie)
}else{
    res.status(404).send("film yok")
}
})

let nextID =10004 
router.post("/", (req, res) =>{
let newMovie = req.body;
newMovie.id = nextID;
nextID++
data.push(newMovie);
res.status(200).json(newMovie)
})

router.delete("/:id",(req,res) => {
const deletedMovieId = req.params.id;
const deletedMovie = data.find(movie=> movie.id === parseInt(deletedMovieId));
if(deletedMovie){
data = data.filter(movie => movie.id !==  parseInt(deletedMovieId))  
res.status(200).end();
}else{
    res.status(404).json({errorMessage: "Film Yok"})
}
})

router.put("/:id", (req,res)=>{
   const editMovieId = req.params.id;
   let editMovie = req.body;
   let movie = data.find(movie=>movie.id === parseInt(editMovieId))
   if(movie){
    data = data.filter(movie => movie.id !==  parseInt(editMovieId)) 
    data.push(editMovie); 
    res.status(200).end();
   }else{
    res.status(404).json({errorMessage: "Film Yok"})
}
})
module.exports = router;