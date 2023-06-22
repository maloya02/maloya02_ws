// entry point

const express = require("express");

const aaRouter = require('./routes/aaRoutes');

const app = express();

// configure server

app.use(express.json());
app.use(express.json()); 

app.use(express.json({ extended: true })); 


// create routes
app.get('/hello',(req,res) => {
    res.send('Hello Aa From World')
    console.log('Hello AA from World');
})

app.get('/hello-Aadasalla', (req,res) => {
    res.send('Hello AA from World');
})

//get route

require("./routes/tutorial.routes")(app);
require("./routes/comments.routes")(app);

app.use('/', aaRouter);

const PORT = 8000
app.listen(PORT, () => {
    console.log(`Server is currently running on port ${PORT}`);
});