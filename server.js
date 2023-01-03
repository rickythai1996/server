const express = require('express')
const mongoose = require('mongoose')
const app = express();
const uri ='mongodb+srv://xponentialventures:Runkroski1996!@coffeehours.sugxcxm.mongodb.net/?retryWrites=true&w=majority'

async function connect() {
    try {
        await mongoose.connect(uri)
        console.log("Connect to MongoDB")        
    }   catch (error) {
        console.error(error);
    }
}

connect();

app.listen(8000, () => {
    console.log("Server started on port 8000");
});

app.post('/login', (req, res) => {
    // get the login form data from the request body
    const { username, password } = req.body;
  
    // check the username and password against the database to see if they are valid
    User.findOne({ username, password }, (error, user) => {
      if (error) {
        // handle error
        return res.status(500).send(error);
      }
      if (!user) {
        // invalid username or password
        return res.status(401).send('Invalid username or password');
      }
      // login successful, send a response with the user data
      res.send(user);
    });
  });
