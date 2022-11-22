const bcrypt = require("bcrypt");
const express = require("express"); // connects postman to mongoDb
require("./db/mongoose"); // inside db there is moongose .js
const User = require("./model/user"); // inside models there is a user
const cors = require("cors");
const jwt = require("jsonwebtoken");
const auth = require('./auth')
const app = express();
const port = process.env.PORT || 8080; // host

app.use(express.json());
app.use(cors())  


app.get("/auth", auth, (req,res) => {
  res.json({message: "Yey!!"})
});

//middleware telling it to use JSON format
app.post("/users", (req, res) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hashedPassword) => {
    const user = new User({
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      address: req.body.address,
      donate: req.body.donate,
      sale: req.body.sale,
      email: req.body.email,
      password: hashedPassword,
    });


    user
      .save()
      .then((result) => {// gets yousponse // here you get user has been created
        res.status(201).send({
          message: "User Created Successfully",
          result,
        });
      })
      .catch((error) => {
        res.status(500).send({
          message: "Error creating user",
          error,
        });
      });

  })
  .catch((e) => {
    res.status(500).send({
      message: "Password not hashed",
      e,
    });
  });
});


// login endpoint
app.post("/login", (request, response) => {
  // check if email exists
  User.findOne({ email: request.body.email })

    // if email exists
    .then((user) => {
      // compare the password entered and the hashed password found
      bcrypt
        .compare(request.body.password, user.password)

        // if the passwords match
        .then((passwordCheck) => {

          // check if password does not matches
          if(!passwordCheck) {
            return response.status(400).send({
              message: "Passwords does not match",
              error,
            });
          }

          // If the password matches, then create a random token with the jwt.sign() function. It takes 3 parameters: jwt.sign(payload, secretOrPrivateKey, [options, callback])
          const token = jwt.sign(
            {
              userId: user._id,
              userEmail: user.email,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );

          // Finally, return a success message with the token created:
          response.status(200).send({
            message: "Login Successful",
            email: user.email,
            token,
          });
        })
        // catch error if password does not match
        .catch((error) => {
          response.status(400).send({
            message: "Password does not match",
            error,
          });
        });
    })
    // catch error if email does not exist
    .catch((e) => {
      response.status(404).send({
        message: "Email not found",
        e,
      });
    });
});



app.listen(port, () => {  // what runs the server
  console.log("Server is up on port " + port);
});


