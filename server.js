const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Database Connected Successfully!!");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});
app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html')
});
app.get('/register.html', (req, res) => {
    res.sendFile(__dirname+'/register.html')
});
app.get('/login.html', (req, res) => {
    res.sendFile(__dirname+'/login.html')
});
app.use(express.static('css'));
const UserModel = require('./model/user')
const UserRoute = require('./routes/user')
app.use('/user',UserRoute)
app.post('/user/login', async (req, res) => {
    const { emailOrPhone, password } = req.body;

    try {
        // Assuming you have a UserModel
        const user = await UserModel.findOne({ $or: [{ email: emailOrPhone }, { phone: emailOrPhone }] });

        if (user.password === password) {
            res.status(200).send({ message: "Successfully entered account" });
        } else {
            res.status(401).send({ message: "Incorrect email/phone or password" });
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send({ message: "Some error occurred" });
    }
});
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});