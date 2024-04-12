const router = require('express').Router();

const UserModel = require("../models/User");

router.post("/login")

router.post("/register", async (req, res) => {
    const {name, email, password} = req.body;

    //check all the missing fields
    if(!name || !email || !password)
    return res.status(400).json({error: `Please enter all the required field.`});


    //name validation
    if(name.length > 25) return res.status(400).json({error: "name can only be less than 25 characters"})


    //email validation
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailReg.test(email)) return res.status(400).json({error: "please enter a valid email address"});
    


    //validation of password
    if(password.length <= 6) return res.json(400).json({error: "password must be atlease 6 cahracters long"})
    try {
const ne
    } catch (err) {
        console.log(err);
        return res.status(500).json({error: err.message})
    }
})

module.exports = router;