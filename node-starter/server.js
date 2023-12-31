// load envi var.
if(process.env.NODE_ENV !== 'production') require('dotenv').config();

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

// db connection
const db = require('./models/index'); // ./models/index // ./models/index.js //./models
db.sequelize.sync().then(() => {
    console.log(`Senced db.`);
}).catch(error => {
    console.error(`Encounter an error during db sync, error:${error}`)
});
//get route

require("./routes/tutorial.routes")(app);

app.use('/', aaRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is currently running on port ${PORT}`);
});