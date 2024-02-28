const UserModel = require('../model/user')
// Create and Save a new user
exports.create = async (req, res) => {
    if (!req.body.email && !req.body.firstName && !req.body.lastName && !req.body.phone && !req.body.password) {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    
    const user = new UserModel({
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone
    });
    
    await user.save().then(data => {
        res.send({
            message:"User created successfully!!",
            user:data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating user"
        });
    });
};
exports.login = async (req, res) => {
    const { emailOrPhone, password } = req.body;

    try {
        // Implement logic to find the user in the database based on email or phone
        // and check if the provided password matches the stored password.
        // You might use bcrypt for password comparison.
        const user = await UserModel.findOne({ $or: [{ email: emailOrPhone }, { phone: emailOrPhone }] });

        if (user && user.comparePassword(password)) {
            // Passwords match, login successful
            res.send({
                message: "Successfully entered account",
                user: user
            });
        } else {
            // User not found or passwords don't match
            res.status(401).send({
                message: "Invalid email/phone or password"
            });
        }
    } catch (error) {
        // Handle other errors
        console.error(error);
        res.status(500).send({
            message: "Some error occurred"
        });
    }
};
// Retrieve all users from the database.
exports.findAll = async (req, res) => {
    try {
        const user = await UserModel.find();
        res.status(200).json(user);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};
// Find a single User with an id
exports.findOne = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        res.status(200).json(user);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
};
// Update a user by the id in the request
exports.update = async (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    
    const id = req.params.id;
    
    await UserModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `User not found.`
            });
        }else{
            res.send({ message: "User updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};
// Delete a user with the specified id in the request
exports.destroy = async (req, res) => {
    await UserModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
          res.status(404).send({
            message: `User not found.`
          });
        } else {
          res.send({
            message: "User deleted successfully!"
          });
        }
    }).catch(err => {
        res.status(500).send({
          message: err.message
        });
    });
};