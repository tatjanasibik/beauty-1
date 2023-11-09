const express = require ('express');
const mongoose = require ('mongoose');
const cors = require('cors');

const Client = require('./models/client.model.js');

const server = express();
server.use(express.json());
server.use(cors());

const MONGODB_URI = "mongodb+srv://tatjanasibik:tatjana@cluster0.7fuy86h.mongodb.net/?retryWrites=true&w=majority";
const PORT = 3000;

mongoose.connect(MONGODB_URI).then( () => {
    console.log("Connected to MongoDB");

    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
}).catch((error) => {
    console.log(error);
});

//POST
//add new client
server.post('/api/clients', (req, res) => {
    //get client data from request body;
    const clientData = req.body;
    console.log(clientData);

    //save new client to Client model;
    const client = new Client(clientData);

    client
        .save()
        .then(() => {
            res.send({message: "Client save sucessfully"});
        })
        .catch((error) => {
            console.log(error);
            res.send({message: "Client was not saved"});
        });
});

//GET
//get all clients
server.get('/api/clients', (_,res) => {
    Client.find()
        .then((data) => {
            res.send(data);
    })
    .catch((err) => {
        console.error(err); 
        res.send({ message: "Eroor"}) 
    });
});

//PUT
//Update
server.put('/api/clients/:id', (req, res) => {
    const clientId = req.params.id;
    const updatedClientData = req.body;

    Client.findByIdAdndUpdate(clientId, updatedClientData)
        .then(() => {
            res.send({message: "Client updated"});
        }).catch((err) => {
            res.send({message: "client was not updated"});
    });
})

//Delete
server.delete('/api/clients/:id', (req, res) => {
    const clientId = req.params.id;
    const updatedClientData = req.body;

    Client.findByIdAdndDelete(clientId, updatedClientData)
        .then(() => {
            res.send({message: "Client deleted"});
        })
        .catch((err) => {
            console.error(err);
            res.send({message: "client was not deleted"});
    });
})

