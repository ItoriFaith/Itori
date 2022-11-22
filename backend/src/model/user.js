const  mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("User", {
name: {
    type: String,
    required: true, // the name must be typed
    trim: true, // incase just space is typed
},
email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    // Validate(value){ 
    //     if (!validator.isEmail(value)) {  //! means is not
    //         throw new Error("email error")  // implement for the user to see this error
    //     }
    // }
},
 password: {
        type: String,
        required: true,
        trim: true,
    },

phoneNumber: {
    type: Number,
    required: true,
    minlength: 10,
    // validate(value) {
    //    if (value < 0) {
    //         throw new Error("phonenumber must be a positive number");
    //     }
    //  },
},
address: {
    type: String,
    required: true,
    trim: true,
},
donate: {
    type: String
    
},
sale: {
    type: String
},

});
module.exports = User; 