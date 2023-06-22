// server --> app --> API
// routes
//---------------------
// controller
// model
// db -> table
// module.exports = (app) => {}; ==> bulk/all exporting
// exports.<func> = () = > {} ==> tingitingi

//create
exports.create =  (req,res)=>{//http://localhost:8000/api/tutorials/
    res.send('POST request Received.')
}
//get all
exports.findAll = (req,res) => {//http://localhost:8000/api/tutorials/
    res.send('Get ALL req received')
} 
//get 1
exports.findOne = (req,res) => {//http://localhost:8000/api/tutorials/{id}
    res.send('Get ONE req received')
} 
//update
exports.update = (req,res) => {//http://localhost:8000/api/tutorials/{id}
    res.send('Update ONE req received')
} 
//delete all
exports.deleteAll = (req,res) => {//http://localhost:8000/api/tutorials/
    res.send('Delete ALL req received')
} 
//delete 1
exports.deleteOne = (req,res) => {//http://localhost:8000/api/tutorials/{id}
    res.send('Delete ONE req received')
}