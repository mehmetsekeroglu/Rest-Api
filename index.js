const express = require('express');
let data = require('./data.js');

const server = express();
server.use(express.json())

server.get('/', (req, res)=> {
    res.send("merhabayin") 
})

server.get("/movies", (req, res)=>{
    res.status(200).json(data)
})


server.get("/movies/:id",(req,res)=>{
const { id } = req.params;
const movie = data.find(movie=>movie.id === parseInt(id))
if(movie){
    res.status(200).json(movie)
}else{
    res.status(404).send("film yok")
}
})

let nextID =10004 
server.post("/movies", (req, res) =>{
let newMovie = req.body;
newMovie.id = nextID;
nextID++
data.push(newMovie);
res.status(200).json(newMovie)
})

server.delete("/movies/:id",(req,res) => {
const deletedMovieId = req.params.id;
const deletedMovie = data.find(movie=> movie.id === parseInt(deletedMovieId));
if(deletedMovie){
data = data.filter(movie => movie.id !==  parseInt(deletedMovieId))  
res.status(200).end();
}else{
    res.status(404).json({errorMessage: "Film Yok"})
}
})

server.put("/movies/:id", (req,res)=>{
   const editMovieId = req.params.id;
   let editMovie = req.body;
   let movie = data.find(movie=>movie.id === parseInt(editMovieId))
   if(movie){
      
       res.status(200).send(editMovie);

   }
})

server.listen(3000, () =>{
    console.log(`http://localhost:3000 gelen istek`)
})