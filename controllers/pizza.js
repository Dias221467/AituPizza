const PizzaModel = require('../model/pizza')
// Create and Save a new pizza
exports.create = async (req, res) => {
    if (!req.body.size && !req.body.price && !req.body.name && !req.body.description && !req.body.image) {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    
    const pizza = new PizzaModel({
        size: req.body.size,
        price: req.body.price,
        name: req.body.name,
        description: req.body.description,
        image: req.body.image
    });
    
    await pizza.save().then(data => {
        res.send({
            message:"Pizza created successfully!!",
            pizza:data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating pizza"
        });
    });
};
// Retrieve all pizzas from the database.
exports.findAll = async (req, res) => {
    try {
        const pizza = await PizzaModel.find();
        res.status(200).json(pizza);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};
