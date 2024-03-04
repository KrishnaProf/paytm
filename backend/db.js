const { Mongoose } = require("mongoose");

const mongoose = new Mongoose();

mongoose.connect("mongodb+srv://leelakrishna682:XdWA11Azt2WzzMc@cluster0.0jhnmy1.mongodb.net/paytm");

const user = new mongoose.Schema({
    
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        minLength:3,
        maxLength: 50

    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }

});

const accountSchema = new mongoose.Schema({     
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})

const User = mongoose.model("User", user);
const Account = mongoose.model("Account", accountSchema);

module.exports = {User, Account}


