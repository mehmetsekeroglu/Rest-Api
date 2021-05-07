const express = require('express');
const moviesRouter = require('./routers/moviesRouter');
const rentRouter = require('./routers/rentRouter');
const server = express();
server.use(express.json());
server.use('/movies', moviesRouter)
server.use('/rent', rentRouter)


server.get('/', (req, res)=> {
    res.send("merhabayin") 
})



server.listen(3000, () =>{
    console.log(`http://localhost:3000 gelen istek`)
})