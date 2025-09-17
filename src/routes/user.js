const { User } = require(' .. /models/user');
const express = require('express');
const router = express. Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/signup', async (req, res) => {
const { name, phone, email, password } = req.body;

try {

const existingUser = await User.findOne({ email: email });

if (existingUser) {
   res.status(400).json({ msg: "user already exist!" })
}
const hashPassword = await bcrypt.hash(password,10);

const result = await User.create({
    name:name,
    email:email,
    password:hashPassword
});

const token = jwt.sign({email:result.email, id:result._id}, process.env.
    JSON_WEB_TOKEN_SECRET_KEY);

    res.status(200).json({
        user:result,
        token:token 
    })
} catch (error) {
    console.log(error);
    res.status(500).json({msg:"something went wtong"});
}
})

