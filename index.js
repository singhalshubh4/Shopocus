const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

//DB File
require('./models/db.js');

const Signup = mongoose.model('Signup');
const app = express();


// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Add New User

// app.post('/api/members',(req,res)=>{
//     const new_member={
//         firstname : req.body.firstname,
//         lastname : req.body.lastname,
//         email : req.body.email,
//         mobile_number : req.body.mobile_number,
//         password : req.body.password
//     }
//     res.json(new_member); 
// });



// const members = [
//     {
//       id: 1,
//       name: 'John Doe',
//       email: 'john@gmail.com',
//       status: 'active'
//     },
//     {
//       id: 2,
//       name: 'Bob Williams',
//       email: 'bob@gmail.com',
//       status: 'inactive'
//     },
//     {
//       id: 3,
//       name: 'Shannon Jackson',
//       email: 'shannon@gmail.com',
//       status: 'active'
//     }
//   ];


app.post('/api/members',(req,res)=>{

    var signup = new Signup();
        signup.firstname = req.body.firstname;
        signup.lastname = req.body.lastname;
        signup.email = req.body.email;
        signup.mobile_number = req.body.mobile_number;
        signup.password = req.body.password;
    signup.save((err, doc) => {
        if (!err){
          res.send('Value Inserted');
        }
            
         else{
           res.send('Error during record insertion : ' + err);
          }
        
    });


});

const PORT = process.env.PORT || 5000 ;

app.listen(PORT,()=>console.log("Server started"));