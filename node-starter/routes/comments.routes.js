// comment.routes.js
module.exports = (app) => {
    let router = require('express').Router()
    router.post('/', (req,res)=>{//http://localhost:8000/api/comments/
        res.send('POST request Received.')
    });
    //Get all, Get 1
    router.get('/', (req,res) => {//http://localhost:8000/api/comments/
        res.send('Get ALL req received')
    })
    router.get('/:id', (req,res) => {//http://localhost:8000/api/comments/{id}
        res.send('Get ONE req received')
    })
    //PUT
    router.put('/:id', (req,res) => {//http://localhost:8000/api/comments/{id}
        res.send('Update ONE req received')
    })
    //Delete
    router.delete('/', (req,res) => {//http://localhost:8000/api/comments/
        res.send('Delete ALL req received')
    })
    router.delete('/:id', (req,res) => {//http://localhost:8000/api/comments/{id}
        res.send('Delete ONE req received')
    })

    app.use('/api/comments', router)
}


// entity ---> model
// MVC-R = Model,   View, Controler, Routes
// Model - Db Table
// View- Pages (SPA)
// Controller - Business Logic
// Routes - Address/Endpoint 