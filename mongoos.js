const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/myproject', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(() => {
    console.log("Connection failed");
});

let userSchema = new mongoose.Schema({
    usn: {
        type: String,
        required: true,
        unique: true, 
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true, 
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

let User = mongoose.model('User', userSchema);

module.exports = { User };
