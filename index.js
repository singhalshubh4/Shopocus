const express = require('express');
const path = require('path');

const app = express();

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Add New User

app.post('/api/members',(req,res)=>{
    const new_member={
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        mobile_number : req.body.mobile_number,
        password : req.body.password
    }
    res.json(new_member); 
});



const members = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@gmail.com',
      status: 'active'
    },
    {
      id: 2,
      name: 'Bob Williams',
      email: 'bob@gmail.com',
      status: 'inactive'
    },
    {
      id: 3,
      name: 'Shannon Jackson',
      email: 'shannon@gmail.com',
      status: 'active'
    }
  ];

app.get('/api/members',(req,res)=>{
res.json(members);
});

const PORT = process.env.PORT || 5000 ;

app.listen(PORT,()=>console.log("Server started"));