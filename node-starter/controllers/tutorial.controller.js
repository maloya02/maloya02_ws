// server --> app --> API
// routes
//---------------------
// controller
// model
// db -> table
// module.exports = (app) => {}; ==> bulk/all exporting
// exports.<func> = () = > {} ==> tingitingi
const db = require('../models/index');
const Tutorial = db.tutorials;

//create
exports.create = (req, res) => {//http://localhost:8000/api/tutorials/
    // res.send('POST request Received.')
    const body = req.body
    if (!req.body.title || !req.body.description) {
        res.status(400).send({
            message: `title or description cannot be blank`,
            success: false,
            errorCode: `ERR9001`
        });
        return;
    }
    const { title, description, published } = req.body;
    const tutorial = {
        title, description, published
    };

    Tutorial.create(tutorial)
        .then(data => {
            res.status(200).send({
                success: true,
                message: 'Tutorial saved succesfully.',
                data: data
            });

        })
        .catch(error => {
            res.status(500).send({
                success: false,
                message: `saving of tutorial data failed. Error ${error}`,
                errorCode: `ERR8001`,
            })
        });

}
//get all
exports.findAll = (req, res) => {//http://localhost:8000/api/tutorials/
    // res.send('Get ALL req received')
    Tutorial.findAll()
        .then(data => {
            res.status(200).send({
                success: true,
                data: data
            });

        })
        .catch(error => {
            res.status(500).send({
                success: false,
                message: `saving of tutorial data failed. Error ${error}`,
                errorCode: `ERR8001`,
            })
        });
}
//get 1
exports.findOne = (req, res) => {//http://localhost:8000/api/tutorials/{id}
    // res.send('Get ONE req received')
    const id = req.params.id;

    Tutorial.findByPk(id)
        .then(data => {
            if (data) {
                res.status(200).send({
                    success: true,
                    data: data
                });
            } else {
                res.status(400).send({
                    success: false,
                    message: `Cant find tutorial data with id = ${id}`,
                    errorCode: `ERR7001`
                });
            }
        })
        .catch(error => {
            res.status(500).send({
                success: false,
                message: `cant retrieve tutorial record. Error ${error}`,
                errorCode: `ERR8001`,
            })
        })
}
//update
exports.update = (req, res) => {//http://localhost:8000/api/tutorials/{id}
    // res.send('Update ONE req received')
    if (!req.body.title || !req.body.description) {
        res.status(400).send({
            message: `title and/or description cannot be blank during an update`,
            success: false,
            errorCode: `ERR9002`
        });
        return;
    }
    const id = req.params.id;

    const { title, description, published } = req.body;
    const tutorial = {
        title, description, published
    };
    Tutorial.update(tutorial, { where: { id: id } })
        .then(num => {
            if (num => 1) {

                res.status(200).send({
                    success: true,
                    message: 'Tutorial updated succesfully.',
                    data: {
                        id: id,
                        recordsAffected: num
                    }
                });
            } else {
                res.status(500).send({
                    success: false,
                    message: `cant find tutorial data with id = ${id}, update data ignored`,
                    errorCode: `ERR7002`,
                })

            }
        })
        .catch(error => {
            res.status(500).send({
                success: false,
                message: `cant performe update at the momment. Error ${error}`,
                errorCode: `ERR8004`,
            })
        });
}
//delete all
exports.deleteAll = (req, res) => {//http://localhost:8000/api/tutorials/
    res.send('Delete ALL req received')
}
//delete 1
exports.deleteOne = (req, res) => {//http://localhost:8000/api/tutorials/{id}
    res.send('Delete ONE req received')
}