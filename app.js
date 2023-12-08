const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
const port = 6001;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", (req,res) =>{
    res.send('welcome to node js day 8 session')
});

app.get('/getMovies',(req,res)=>{
    const url = 'http://localhost:3000/movies';
    axios.get(url).then((response)=>{
        const movies =response.data;
        res.send(movies)
    })

})

app.listen(port,()=>{
    console.log(`server started with port number ${port}`);
})